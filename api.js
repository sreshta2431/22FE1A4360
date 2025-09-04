let storage = [];

export function shortenUrl(url) {
  const short = Math.random().toString(36).substring(2, 8);
  const entry = { original: url, short: window.location.origin + '/' + short, clicks: 0 };
  storage.push(entry);
  return entry.short;
}

export function getStats() {
  return storage;
}