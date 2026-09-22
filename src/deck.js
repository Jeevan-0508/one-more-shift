/**
 * Builds a played deck from the full card pool: shuffled, capped to a shift length, and interleaved
 * so a run is never a long streak of the same answer (77 of the 108 real cards are "flag", so a naive
 * shuffle plays like "always press flag" for stretches — this exists specifically to prevent that).
 */
(function (global) {
  var RNG = (typeof module !== 'undefined' && module.exports) ? require('./rng.js') : global.RNG;

  function buildDeck(cards, size, rand, maxStreak) {
    maxStreak = maxStreak || 3;
    var flags = RNG.shuffle(cards.filter(function (c) { return c.type === 'flag'; }), rand);
    var clears = RNG.shuffle(cards.filter(function (c) { return c.type === 'clear'; }), rand);

    var deck = [];
    var fi = 0, ci = 0, streak = 0, lastType = null;

    while (deck.length < size && (fi < flags.length || ci < clears.length)) {
      var forceClear = lastType === 'flag' && streak >= maxStreak && ci < clears.length;
      var forceFlag = lastType === 'clear' && streak >= maxStreak && fi < flags.length;
      var takeFlag;

      if (forceClear) takeFlag = false;
      else if (forceFlag) takeFlag = true;
      else if (fi >= flags.length) takeFlag = false;
      else if (ci >= clears.length) takeFlag = true;
      // Otherwise, always take the majority (flag) card. Clears are the scarcer pacing
      // resource, so they're only ever spent when forced by the streak cap — spending one
      // "for variety" burns the one thing that guarantees the cap later in the deck, which
      // is exactly how a long-enough deck used to sneak past maxStreak.
      else takeFlag = true;

      var card = takeFlag ? flags[fi++] : clears[ci++];
      deck.push(card);

      if (card.type === lastType) streak++;
      else { streak = 1; lastType = card.type; }
    }
    return deck;
  }

  var Deck = { buildDeck: buildDeck };
  if (typeof module !== 'undefined' && module.exports) module.exports = Deck;
  else global.Deck = Deck;
})(typeof window !== 'undefined' ? window : globalThis);
