/** Tiny seeded PRNG (mulberry32) so a shuffle is reproducible for tests without pulling in a library. */
(function (global) {
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffle(arr, rand) {
    var out = arr.slice();
    for (var i = out.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var tmp = out[i]; out[i] = out[j]; out[j] = tmp;
    }
    return out;
  }

  var RNG = { mulberry32: mulberry32, shuffle: shuffle };
  if (typeof module !== 'undefined' && module.exports) module.exports = RNG;
  else global.RNG = RNG;
})(typeof window !== 'undefined' ? window : globalThis);
