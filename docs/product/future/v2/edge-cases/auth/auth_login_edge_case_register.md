# Auth / Login Edge-Case Register

**Scope:** Creator Shop account identity, login, onboarding activation, Team-invite authentication, password recovery, Google authentication and future authentication-provider extensibility.  
**Program:** Brand Settings Stage A / BS-12 security handoff.  
**Branch purpose:** preserve MVP-resolved edge cases and V2 deferrals without treating this future branch as implementation authority.

## Frozen MVP authentication model

Creator Shop separates:

1. **Admission** — who is allowed into a workspace;
2. **Account identity** — which Creator Shop User this is;
3. **Authentication method** — how the User proves identity.

MVP routine login methods are all three of:

- Password, when configured;
- Google authentication, when linked;
- Email OTP/passwordless login.

Production OTP is delivered through **Postmark**. The current fixed development OTP is test-only and must never become production authority.

### Initial Brand Owner activation

The work-email verification screen offers two authentication paths:

```text
A. Enter emailed OTP
   → work email verified
   → Set your password
   → account activation complete

B. Continue with Google
   → Google verified email must equal expected Brand work email
   → Google identity linked
   → account activation complete
```

The Google path does not require a password during activation. A Google-only User can add a password later from Account & Security.

### Routine sign-in

```text
Email + Password
or
Continue with Google
or
Email OTP
```

OTP login is passwordless authentication, distinct from the fixed development stub.

### Team invitation admission

A Team invitation determines **workspace admission**, not account identity by itself.

The invitation link remains reusable while it is valid and the recipient has **not yet completed workspace admission successfully**. Inspecting the link, refreshing the page, an invalid password attempt, cancelled Google sign-in, provider failure, or other unsuccessful authentication attempt must not consume it.

The invitation becomes consumed only after the backend successfully completes the admission transaction and issues a usable authenticated session / membership result. After successful admission it cannot be used again.

If backend admission succeeds but the browser loses the response before navigation, the membership remains active and the User signs in normally; the consumed invitation is not reopened.

---

## Edge-case register

| ID | Scenario | Status | Frozen handling |
|---|---|---|---|
| AUTH-001 | Initial Brand Owner uses OTP activation | `MVP_RESOLVED` | Verify expected work email with real Postmark-delivered OTP; then require `Set your password` before activation completes. |
| AUTH-002 | Initial Brand Owner uses Google activation | `MVP_RESOLVED` | Google verified email must exactly equal the expected work email from Brand claim; link Google identity and complete activation without forcing password creation. |
| AUTH-003 | User later wants both Google and Password | `MVP_RESOLVED` | Both methods may coexist on one Creator Shop User. Google-only User may set password; password User may add Google. |
| AUTH-004 | Routine login with OTP | `MVP_RESOLVED` | Supported MVP method. Generate a short-lived one-time OTP, deliver through Postmark, rate-limit requests/verification, consume on successful login. Never use fixed test OTP in production. |
| AUTH-005 | Routine login with password | `MVP_RESOLVED` | Allowed only when password exists; generic invalid-credential response on failure. |
| AUTH-006 | Routine login with Google | `MVP_RESOLVED` | Resolve provider subject to existing User; verified email equality supports safe first-time linking when no conflicting provider identity exists. |
| AUTH-007 | Google email exactly matches existing password/OTP account | `MVP_RESOLVED` | Safe automatic linking to same User if Google email is verified and Google subject is not already bound elsewhere. Do not create a duplicate User. |
| AUTH-008 | Google verified email differs from Creator Shop primary email | `MVP_RESOLVED` | Do not auto-link in MVP. Require the User to authenticate through an existing method; alternate-email identity linking is deferred. |
| AUTH-009 | Google subject already linked to another Creator Shop User | `MVP_RESOLVED` | Identity conflict. Never silently reassign provider subject or merge accounts. |
| AUTH-010 | Google email changes after link | `MVP_RESOLVED` | Provider subject remains identity anchor. If provider still verifies the subject but email no longer matches Creator Shop primary email, require revalidation/support rather than silently changing Creator Shop primary email. |
| AUTH-011 | Password-only User adds Google | `MVP_RESOLVED` | From authenticated Account & Security flow; verified Google email must match Creator Shop primary email; then link provider subject. |
| AUTH-012 | Google-only User sets password | `MVP_RESOLVED` | Authenticated Settings flow; set a new password without creating a second User. |
| AUTH-013 | User tries to remove last authentication method | `MVP_RESOLVED` | Block. At least one usable auth method must remain. |
| AUTH-014 | User removes Google while Password or OTP remains available | `MVP_RESOLVED` | Allowed after appropriate reauthentication/security confirmation. Provider link is removed; Creator Shop account persists. |
| AUTH-015 | User changes password while other sessions exist | `MVP_RESOLVED` | Security architecture must support revoking existing sessions. Exact session technology is implementation-owned. |
| AUTH-016 | Forgot-password email exists | `MVP_RESOLVED` | Issue hashed single-use reset token, send via Postmark, short expiry, allow password reset, revoke prior reset tokens and existing sessions on success. |
| AUTH-017 | Forgot-password email does not exist | `MVP_RESOLVED` | Return same generic success message as existing account to prevent account enumeration. |
| AUTH-018 | Password reset link expired | `MVP_RESOLVED` | Reject and allow requesting a new link. |
| AUTH-019 | Password reset token reused | `MVP_RESOLVED` | Reject; reset tokens are single-use. |
| AUTH-020 | Multiple reset requests | `MVP_RESOLVED` | New request supersedes older live reset tokens for that User. |
| AUTH-021 | Public login with unknown email | `MVP_RESOLVED` | Generic invalid credentials / sign-in failed response; do not disclose whether account exists or its Brand/Creator role. |
| AUTH-022 | Login UI asks Brand vs Creator role | `MVP_RESOLVED` | Do not ask. One Creator Shop login surface resolves User first and routes to the correct persona/workspace. |
| AUTH-023 | New Team invitee has no Creator Shop account | `MVP_RESOLVED` | Valid invitation admits email; recipient may authenticate/bootstrap with Google (matching invited email) or create password. Membership is created only after successful admission. |
| AUTH-024 | Team invitee already has password account | `MVP_RESOLVED` | Invitation remains admission authority. Existing User authenticates normally; no duplicate account or password reset is required. |
| AUTH-025 | Team invitee already has Google-only account | `MVP_RESOLVED` | Existing User can authenticate with linked Google if primary email equals invitation email. |
| AUTH-026 | Invite page opened repeatedly before successful admission | `MVP_RESOLVED` | Allowed while invitation remains valid/PENDING. Inspection and failed auth attempts do not consume token. |
| AUTH-027 | Invitation succeeds and workspace membership/session is issued | `MVP_RESOLVED` | Atomically consume invitation. Subsequent link use shows already accepted/consumed. |
| AUTH-028 | Backend admission succeeds but frontend navigation fails | `MVP_RESOLVED` | Do not reactivate invitation. Membership is authoritative; User signs in normally and enters workspace. |
| AUTH-029 | Invitation expires before admission | `MVP_RESOLVED` | Cannot authenticate/admit through old link; administrator issues a fresh invitation/token. |
| AUTH-030 | Removed Team member still knows password / has Google | `MVP_RESOLVED` | Account authentication may remain valid, but inactive workspace membership blocks Brand workspace access. Account/history are retained. |
| AUTH-031 | Initial corporate Owner loses company-email access | `MVP_RESOLVED` | No automated ownership takeover. Manual Support recovery under BS-02 authority. |
| AUTH-032 | Self-service primary email change | `DEFERRED_V2` | Not MVP. Email changes interact with Brand-domain Owner invariant, Team admission and linked Google identity; Support handles exceptions. |
| AUTH-033 | Same email attempts to create both Brand and Creator accounts | `MVP_RESOLVED` | MVP keeps one primary email → one Creator Shop User/current persona. Cross-persona unified identity switching is deferred. |
| AUTH-034 | Future Instagram/TikTok social sign-in | `DEFERRED_V2` | Authentication grant is separate from data/integration grant. Never reuse Instagram Insights/BrandIntegration credentials as login credentials. |
| AUTH-035 | Future multiple auth providers | `DEFERRED_V2_ARCHITECTURE_READY` | Prefer generic `(provider, provider_subject) → User` identity model instead of adding one provider-subject column per provider forever. |
| AUTH-036 | OTP requested repeatedly | `MVP_RESOLVED` | Rate-limit by account/email/IP/device signals as appropriate; newest valid OTP may supersede older codes; responses must not expose account existence. |
| AUTH-037 | OTP entered incorrectly many times | `MVP_RESOLVED` | Attempt limit + temporary throttling; do not permanently lock account solely from remote attempts. |
| AUTH-038 | OTP expires | `MVP_RESOLVED` | Reject and allow a new OTP request. |
| AUTH-039 | OTP reused after successful login | `MVP_RESOLVED` | Reject; one-time means one successful consumption. |
| AUTH-040 | Google provider unavailable | `MVP_RESOLVED` | Do not affect Password/OTP methods. Show provider-specific failure and allow another login method. |
| AUTH-041 | Password login unavailable because User never set password | `MVP_RESOLVED` | Tell User to use Google/OTP or reset/set password; do not imply account is invalid. |
| AUTH-042 | User signs out | `MVP_RESOLVED` | Current session must be terminable server-side; clearing browser storage alone is not the complete security contract. |
| AUTH-043 | Account/security-sensitive change occurs | `MVP_RESOLVED` | Must be capable of invalidating affected sessions and generating security notification/audit event. |
| AUTH-044 | Access token stolen from browser/local storage | `MVP_IMPLEMENTATION_GAP` | Current long-lived localStorage bearer model requires Stage-B security reconciliation toward revocable session architecture; exact design owned by Auth/Backend. |

---

## Frontend state families required

At minimum:

- Login ready / submitting / failed;
- Password login;
- Google login;
- OTP request / OTP sent / OTP verification / expired / throttled;
- Initial Owner verification choice (OTP or Google);
- `Set your password` after OTP Owner activation;
- Team invitation inspect / authenticate / retry / accepted / expired / consumed;
- Forgot password request / sent / reset / expired / completed;
- Account & Security: Password configured/not configured; Google connected/not connected;
- last-auth-method removal blocked;
- generic provider outage/retry state.

## Security invariants

- Admission never comes from Google-domain matching alone.
- Google authentication never bypasses Brand claim or Team invitation.
- Provider subjects are unique and never silently reassigned.
- Public auth responses avoid account enumeration.
- OTP/reset/invitation tokens are short-lived, one-time and stored only as secure hashes where persistence is required.
- Authentication and workspace membership remain separate authorization layers.
- Security events must be capable of terminating sessions.
