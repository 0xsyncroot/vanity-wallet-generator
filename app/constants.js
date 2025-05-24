export const WORKER_MAX_TRIES = 200000;

export const COPY_TIMEOUT = 1200;

export const MESSAGES = {
  COPY_SUCCESS: "✅ Copied!",
  COPY_ERROR: "❌ Copy failed",
  NO_PATTERN: "Please enter at least one pattern.",
  SECURITY_NOTE: "100% client-side. No seed phrase or private key is ever sent to any server.",
  MAX_TRIES_ERROR: (tries) => `No result after ${tries.toLocaleString()} tries. Please try a shorter pattern!`,
};
