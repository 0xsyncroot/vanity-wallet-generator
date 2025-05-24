import { DEFAULT_MAX_TRIES } from "../constants";

export function PatternInputs({ patterns, setPatterns, disabled }) {
  const handleChange = (key) => (e) => {
    const value = key === "maxTries" ? parseInt(e.target.value) || DEFAULT_MAX_TRIES : e.target.value;
    setPatterns(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="mb-4 space-y-2">
      <input
        type="number"
        value={patterns.maxTries || DEFAULT_MAX_TRIES}
        onChange={handleChange("maxTries")}
        placeholder={`Number of tries (default: ${DEFAULT_MAX_TRIES.toLocaleString()})`}
        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition-all duration-300 hover:border-indigo-300"
        disabled={disabled}
        min="1"
        max="10000000"
      />
      <input
        value={patterns.start}
        onChange={handleChange("start")}
        placeholder="Starts with (e.g. cafe)"
        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition-all duration-300 hover:border-indigo-300"
        disabled={disabled}
      />
      <input
        value={patterns.end}
        onChange={handleChange("end")}
        placeholder="Ends with (e.g. 888)"
        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition-all duration-300 hover:border-indigo-300"
        disabled={disabled}
      />
      <input
        value={patterns.contain}
        onChange={handleChange("contain")}
        placeholder="Contains (e.g. dead)"
        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition-all duration-300 hover:border-indigo-300"
        disabled={disabled}
      />
    </div>
  );
}
