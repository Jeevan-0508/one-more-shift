import { describe, expect, test } from 'bun:test';
import { mulberry32, shuffle } from './rng.js';

describe('mulberry32', function () {
  test('same seed produces the same sequence', function () {
    var r1 = mulberry32(42);
    var r2 = mulberry32(42);
    var seq1 = [r1(), r1(), r1()];
    var seq2 = [r2(), r2(), r2()];
    expect(seq1).toEqual(seq2);
  });

  test('different seeds diverge', function () {
    var r1 = mulberry32(1);
    var r2 = mulberry32(2);
    expect(r1()).not.toBe(r2());
  });

  test('stays within [0, 1)', function () {
    var r = mulberry32(7);
    for (var i = 0; i < 200; i++) {
      var v = r();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });
});

describe('shuffle', function () {
  test('is a permutation: same elements, same length', function () {
    var arr = [1, 2, 3, 4, 5];
    var out = shuffle(arr, mulberry32(1));
    expect(out.length).toBe(arr.length);
    expect(out.slice().sort()).toEqual(arr.slice().sort());
  });

  test('never mutates the input array', function () {
    var arr = [1, 2, 3];
    var copy = arr.slice();
    shuffle(arr, mulberry32(1));
    expect(arr).toEqual(copy);
  });

  test('same seed shuffles identically', function () {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(shuffle(arr, mulberry32(99))).toEqual(shuffle(arr, mulberry32(99)));
  });
});
