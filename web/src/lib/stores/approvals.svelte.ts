export interface PendingApproval {
  approvalId: string;
  callId: string;
  toolName: string;
  argsSummary: string;
  riskLevel: string;
  reason: string;
  timeoutSecs: number;
  requestedAt: number;
}

function createApprovalsStore() {
  let pending = $state<PendingApproval[]>([]);

  return {
    get pending() {
      return pending;
    },

    addRequest(
      approvalId: string,
      callId: string,
      toolName: string,
      argsSummary: string,
      riskLevel: string,
      reason: string,
      timeoutSecs: number,
    ) {
      pending = [
        ...pending,
        {
          approvalId,
          callId,
          toolName,
          argsSummary,
          riskLevel,
          reason,
          timeoutSecs,
          requestedAt: Date.now(),
        },
      ];
    },

    resolve(approvalId: string) {
      pending = pending.filter((p) => p.approvalId !== approvalId);
    },

    clear() {
      pending = [];
    },
  };
}

export const approvalsStore = createApprovalsStore();
