import { useState } from "react";

export function useCopyToClipboard() {
  const [copyMsg, setCopyMsg] = useState({ key: "", msg: "" });

  const handleCopy = async (key, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyMsg({ key, msg: "✅ Copied!" });
    } catch {
      setCopyMsg({ key, msg: "❌ Copy failed" });
    }
    setTimeout(() => setCopyMsg({ key: "", msg: "" }), 1200);
  };

  return { copyMsg, handleCopy };
}
