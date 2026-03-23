function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePort(port) {
  const p = parseInt(port, 10);
  return Number.isInteger(p) && p >= 1 && p <= 65535;
}

function validateString(s, { minLen = 1, maxLen = 255 } = {}) {
  return typeof s === "string" && s.trim().length >= minLen && s.trim().length <= maxLen;
}

module.exports = { validateEmail, validatePort, validateString };
