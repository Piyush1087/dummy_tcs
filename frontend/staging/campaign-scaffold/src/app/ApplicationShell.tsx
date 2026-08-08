import type { PropsWithChildren } from "react";

/**
 * Staging adapter for the canonical application-shell Content Area contract.
 * Global navigation and shell chrome are intentionally platform-owned and absent here.
 */
export function ApplicationShell({ children }: PropsWithChildren) {
  return (
    <main className="applicationShell" aria-label="Creator Shop application content">
      <div className="contentArea">{children}</div>
    </main>
  );
}
