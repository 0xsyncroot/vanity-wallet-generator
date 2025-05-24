"use client";
import { useState, useRef } from "react";
import { PatternInputs } from "./components/PatternInputs";
import { ResultDisplay } from "./components/ResultDisplay";
import { Footer } from "./components/Footer";
import { WORKER_MAX_TRIES } from "./constants";
import { useCopyToClipboard } from "./hooks/useCopyToClipboard";

export default function Home() {
  const [patterns, setPatterns] = useState({
    start: "",
    end: "",
    contain: ""
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [tries, setTries] = useState(0);
  const workerRef = useRef();
  const { copyMsg, handleCopy } = useCopyToClipboard();

  const genWallet = () => {
    setLoading(true);
    setResult(null);
    setTries(0);

    const worker = new window.Worker("/vanity-worker.js");
    workerRef.current = worker;
    worker.postMessage({
      startPattern: patterns.start,
      endPattern: patterns.end,
      containPattern: patterns.contain,
      maxTry: WORKER_MAX_TRIES,
    });

    worker.onmessage = (e) => {
      if (e.data.found) {
        setResult({
          address: e.data.address,
          privateKey: e.data.privateKey,
          mnemonic: e.data.mnemonic,
          tries: e.data.tries,
        });
        setLoading(false);
        worker.terminate();
      } else if (e.data.tries) {
        setTries(e.data.tries);
      }
      if (e.data.found === false && e.data.tries >= WORKER_MAX_TRIES) {
        setResult({ 
          error: `No result after ${WORKER_MAX_TRIES.toLocaleString()} tries. Please try a shorter pattern!` 
        });
        setLoading(false);
        worker.terminate();
      }
    };
  };

  const cancelProcess = () => {
    if (workerRef.current) {
      workerRef.current.terminate();
      workerRef.current = null;
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md mx-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700 bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
              Generate EVM Vanity Address
            </h2>
            
            <PatternInputs
              patterns={patterns}
              setPatterns={setPatterns}
              disabled={loading}
            />

            <div className="flex gap-2">
              <button
                onClick={genWallet}
                disabled={loading}
                className={`flex-1 py-2 rounded-xl text-white font-semibold transition-all duration-300 ${
                  loading
                    ? "bg-indigo-200 cursor-not-allowed"
                    : "bg-indigo-500 hover:bg-indigo-600 hover:shadow-md"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Generate"
                )}
              </button>
              
              {loading && (
                <button
                  onClick={cancelProcess}
                  className="flex-1 py-2 rounded-xl text-white font-semibold transition-all duration-300 bg-gray-400 hover:bg-gray-600 hover:shadow-md"
                >
                  Cancel
                </button>
              )}
            </div>

            {loading && (
              <div className="text-xs text-indigo-500 mt-2 animate-pulse">
                {patterns.start || patterns.end || patterns.contain ? (
                  <>Processing... {tries ? `Tried: ${tries.toLocaleString()}` : null}</>
                ) : (
                  "Generating wallet..."
                )}
              </div>
            )}

            <ResultDisplay result={result} copyMsg={copyMsg} handleCopy={handleCopy} />
          </div>

          <div className="text-xs text-gray-500 text-center mt-4 bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
            100% client-side. No seed phrase or private key is ever sent to any server.
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
