
  export const statusStyle = {
    Owned: "text-blue-300 border-blue-400 bg-authorisation-viewing-bg",
    Authorized:
      "text-authorisation-approved-text border-status-success-600 bg-status-success-900",
    Locked:
      "text-text-secondary border-authorisation-locked-border bg-authorisation-locked-bg",
    Pending:
      "text-authorisation-pending-text border-authorisation-pending-border bg-authorisation-pending-bg",
  } as const;
