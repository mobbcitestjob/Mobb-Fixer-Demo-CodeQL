// Intentionally vulnerable JavaScript file used for CI testing — do not deploy.
// Triggers CodeQL rule js/useless-regexp-character-escape exactly once: inside a
// JS string literal '\.' is the same as '.', so the regex matches ANY character
// instead of a literal dot. A hostname allowlist built this way wrongly accepts
// "mobbxai" or "mobb-ai".
function isAllowedHost(host) {
  return new RegExp('mobb\.ai').test(host);
}

module.exports = { isAllowedHost };
