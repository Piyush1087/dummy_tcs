# Collaboration Realtime & Hydration Contract

Status: FROZEN from Collaboration 6.7B frontend reconciliation.

## Purpose

Prevent Collaboration state from depending on transient WebSocket/session state. Persisted backend reads are the reconstruction source of truth. Realtime exists only to reduce latency between persisted changes and UI refresh.

## Core invariant

A Collaboration must reconstruct correctly after:

- page refresh;
- navigating away and back;
- logout/login;
- browser restart;
- WebSocket disconnect/reconnect;
- opening the same Collaboration on another device/session.

No workflow, message, payment, Deliverable or resolution state may exist only in browser memory or a socket event payload.

## Entry/hydration sequence

Canonical sequence:

1. load Collaboration inbox/list through HTTP/query API;
2. resolve selected `collaborationId` (including deep-link selection);
3. fetch persisted Collaboration detail;
4. fetch persisted messages/history required for the workspace;
5. render the authoritative hydrated state;
6. attach/join realtime room for the selected Collaboration.

The UI may show loading skeletons while steps 1-4 complete.

## Selection change

When switching Collaboration:

1. leave/unsubscribe prior realtime room as appropriate;
2. select new `collaborationId`;
3. fetch persisted detail/messages for the new Collaboration;
4. render it;
5. join/confirm realtime subscription.

No previous Collaboration state should bleed into the newly selected thread.

## Realtime event handling

WebSocket events are change/invalidation signals, not complete domain truth.

Preferred behavior:

`socket event -> identify affected Collaboration -> refetch authoritative read model/messages as required -> update UI`

Do not derive canonical stage/lifecycle transitions solely from event strings.

## Command handling

After a successful action command:

1. consume authoritative updated response when supplied;
2. update selected Collaboration optimistically only with authoritative returned state, not locally invented transitions;
3. refresh relevant inbox/read model where needed;
4. allow realtime to synchronize counterpart/other sessions.

If command response does not include sufficient authoritative state, refetch.

## Socket disconnect

Socket disconnect must not:

- blank the Collaboration;
- clear thread/message data;
- reset workflow state;
- return user to inbox;
- block normal HTTP reads/actions unless the specific action technically requires realtime (none are canonical today).

The UI may show a subtle `Realtime updates temporarily unavailable` state.

## Reconnect

On reconnect:

- rejoin selected Collaboration room;
- resynchronize/refetch when necessary;
- do not assume no state changed while disconnected.

## Inbox synchronization

Inbox events may trigger refetch of thread rows. If the selected Collaboration is affected, refetch its detail/messages as needed.

Thread list state is a projection; the selected Collaboration read model remains authoritative for detailed workflow UI.

## Stale state

If backend rejects an action because state/version changed elsewhere:

- show a concise state-changed message;
- refetch authoritative Collaboration;
- do not attempt to replay the transition locally without fresh validation.

## Error behavior

Hydration failure should present recoverable error/retry UI where possible. Realtime errors must be isolated from hydration errors.

A failed notification/socket update cannot be interpreted as failed persistence if the command/backend write succeeded.

## Existing production implementation direction

The current production pattern of HTTP-loading threads/detail/messages and using WebSocket events to trigger silent refresh is the architecture to preserve. Future refactoring must not regress to socket-owned Collaboration state.

## Testing requirements

Frontend/backend integration tests should cover at minimum:

- enter Collaboration from cold page load;
- refresh while in each major stage;
- navigate away and back;
- disconnect WebSocket, continue viewing persisted state, reconnect;
- action by counterparty while current user is disconnected, then reconnect/refetch;
- same Collaboration in two browser sessions;
- terminal Collaboration re-entry with resolution history still visible;
- completed Collaboration re-entry with feedback state intact.
