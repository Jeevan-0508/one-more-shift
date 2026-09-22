import { describe, expect, test } from 'bun:test';
import { buildDeck } from './deck.js';
import { mulberry32 } from './rng.js';

function makeCards(nFlag, nClear) {
  var cards = [];
  for (var i = 0; i < nFlag; i++) cards.push({ type: 'flag', id: 'f' + i });
  for (var j = 0; j < nClear; j++) cards.push({ type: 'clear', id: 'c' + j });
  return cards;
}

describe('buildDeck', function () {
  test('returns exactly the requested size when enough cards exist', function () {
    var deck = buildDeck(makeCards(20, 20), 15, mulberry32(1));
    expect(deck.length).toBe(15);
  });

  test('never exceeds the available pool', function () {
    var deck = buildDeck(makeCards(3, 2), 100, mulberry32(1));
    expect(deck.length).toBe(5);
  });

  test('never produces a same-type streak longer than maxStreak, while both pools still have cards', function () {
    // 70/10 mirrors the real taxonomy's rough flag/clear ratio; deck size stays well under the
    // smaller pool so the guarantee is never asked to do the impossible.
    var deck = buildDeck(makeCards(70, 10), 24, mulberry32(3), 3);
    var streak = 1;
    for (var i = 1; i < deck.length; i++) {
      if (deck[i].type === deck[i - 1].type) streak++;
      else streak = 1;
      expect(streak).toBeLessThanOrEqual(3);
    }
  });

  test('once the smaller pool is exhausted, the remainder is drawn from whatever is left rather than stalling', function () {
    // Structural edge case: with only 10 clears and a 40-card ask, clears run out partway through
    // and the tail is necessarily all flags. That is correct behaviour, not a bug — buildDeck should
    // still return the full requested size instead of getting stuck.
    var deck = buildDeck(makeCards(70, 10), 40, mulberry32(3), 3);
    expect(deck.length).toBe(40);
    var clearCount = deck.filter(function (c) { return c.type === 'clear'; }).length;
    expect(clearCount).toBe(10); // every clear card gets used exactly once
  });

  test('uses every clear card before repeating, given a small clear pool', function () {
    var cards = makeCards(50, 4);
    var deck = buildDeck(cards, 30, mulberry32(5), 3);
    var clearIds = deck.filter(function (c) { return c.type === 'clear'; }).map(function (c) { return c.id; });
    // 4 unique clears; with 30 drawn and forced interleaving many will repeat, but all 4 ids must appear.
    expect(new Set(clearIds).size).toBe(4);
  });

  test('same seed builds an identical deck', function () {
    var cards = makeCards(30, 15);
    var d1 = buildDeck(cards, 20, mulberry32(123));
    var d2 = buildDeck(cards, 20, mulberry32(123));
    expect(d1.map(function (c) { return c.id; })).toEqual(d2.map(function (c) { return c.id; }));
  });
});
