const assert = require("assert");

describe("Utils", () => {
  it("should trim strings", () => {
    assert.strictEqual("  hello  ".trim(), "hello");
  });

  it("should split CSV", () => {
    assert.deepStrictEqual("a,b,c".split(","), ["a", "b", "c"]);
  });

  it("should clamp values", () => {
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    assert.strictEqual(clamp(150, 0, 100), 100);
  });
});
