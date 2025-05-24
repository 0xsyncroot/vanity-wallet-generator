// file: /public/vanity-worker.js
self.importScripts("https://cdn.jsdelivr.net/npm/ethers@6.10.0/dist/ethers.umd.min.js");

self.onmessage = function (e) {
  const { startPattern, endPattern, containPattern, maxTry } = e.data;

  // If no patterns provided, generate regular wallet
  if (!startPattern && !endPattern && !containPattern) {
    const wallet = ethers.Wallet.createRandom();
    self.postMessage({
      address: wallet.address,
      privateKey: wallet.privateKey,
      mnemonic: wallet.mnemonic ? wallet.mnemonic.phrase : "None",
      tries: 1,
      found: true,
    });
    return;
  }

  let tries = 0;
  let wallet = null;
  const matchesPattern = (address, start, end, contain) => {
    const addr = address.slice(2).toLowerCase();
    let ok = true;
    if (start) ok = ok && addr.startsWith(start.toLowerCase());
    if (end) ok = ok && addr.endsWith(end.toLowerCase());
    if (contain) ok = ok && addr.includes(contain.toLowerCase());
    return ok;
  };

  while (tries < maxTry) {
    tries++;
    wallet = ethers.Wallet.createRandom();
    const address = wallet.address;
    if (matchesPattern(address, startPattern, endPattern, containPattern)) {
      self.postMessage({
        address: wallet.address,
        privateKey: wallet.privateKey,
        mnemonic: wallet.mnemonic ? wallet.mnemonic.phrase : "None",
        tries,
        found: true,
      });
      return;
    }
    if (tries % 5000 === 0) {
      self.postMessage({ tries, found: false });
    }
  }
  self.postMessage({ found: false, tries });
};
