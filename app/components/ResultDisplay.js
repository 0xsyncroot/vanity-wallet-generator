export function ResultDisplay({ result, copyMsg, handleCopy }) {
  if (!result) return null;

  if (result.error) {
    return (
      <div className="mt-8">
        <div className="text-red-600 font-semibold bg-red-50 p-4 rounded-xl border border-red-100">
          {result.error}
        </div>
      </div>
    );
  }

  const CopyButton = ({ value, type }) => (
    <button
      onClick={() => handleCopy(type, value)}
      className="ml-1 px-2 py-1 text-xs bg-gray-100 hover:bg-indigo-100 rounded border border-gray-200 transition-all duration-300 hover:border-indigo-200"
    >
      Copy
    </button>
  );

  const CopyMessage = ({ type }) => (
    copyMsg.key === type && (
      <span className="ml-2 text-xs text-green-600 font-bold animate-fade-in">
        {copyMsg.msg}
      </span>
    )
  );

  return (
    <div className="mt-8 space-y-4">
      <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300">
        <span className="font-semibold text-gray-700">Address:</span>
        <span className="font-mono text-sm break-all select-all flex-1">
          {result.address}
        </span>
        <CopyButton value={result.address} type="address" />
        <CopyMessage type="address" />
      </div>

      <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300">
        <span className="font-semibold text-gray-700">Private Key:</span>
        <span className="font-mono text-xs break-all select-all flex-1">
          {result.privateKey}
        </span>
        <CopyButton value={result.privateKey} type="privateKey" />
        <CopyMessage type="privateKey" />
      </div>

      <div className="bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition-all duration-300">
        <span className="font-semibold text-gray-700">Seed Phrase:</span>
        <div className="mt-2 p-3 bg-white border border-gray-200 rounded-xl font-mono text-xs break-words select-all flex items-center">
          <span className="flex-1">{result.mnemonic}</span>
          <CopyButton value={result.mnemonic} type="mnemonic" />
          <CopyMessage type="mnemonic" />
        </div>
      </div>

      <div className="pt-2 text-sm text-gray-500 flex items-center gap-2">
        <span className="font-bold">Attempts:</span>
        <span className="bg-indigo-50 px-2 py-1 rounded text-indigo-600">
          {result.tries.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
