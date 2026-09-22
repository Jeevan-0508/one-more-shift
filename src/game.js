/**
 * Pure game-state logic, no DOM. A shift is a fixed deck; each answer is scored against the card's
 * real type, a streak multiplier rewards consecutive correct calls, and a rank is assigned only at
 * the end from the final accuracy, never adjusted mid-shift.
 */
(function (global) {
  function createGame(deck) {
    return {
      deck: deck,
      index: 0,
      score: 0,
      streak: 0,
      bestStreak: 0,
      correct: 0,
      wrong: 0,
      done: deck.length === 0,
    };
  }

  function currentCard(state) {
    return state.done ? null : state.deck[state.index];
  }

  /** choice: 'flag' | 'clear'. Returns a new state plus the outcome for the UI to react to. */
  function answer(state, choice) {
    if (state.done) return { state: state, outcome: null };
    var card = state.deck[state.index];
    var isCorrect = choice === card.type;

    var next = Object.assign({}, state);
    next.index = state.index + 1;
    next.streak = isCorrect ? state.streak + 1 : 0;
    next.bestStreak = Math.max(state.bestStreak, next.streak);
    next.correct = state.correct + (isCorrect ? 1 : 0);
    next.wrong = state.wrong + (isCorrect ? 0 : 1);

    var basePoints = 10;
    var streakBonus = isCorrect ? Math.min(next.streak - 1, 5) * 2 : 0;
    next.score = state.score + (isCorrect ? basePoints + streakBonus : 0);
    next.done = next.index >= state.deck.length;

    return {
      state: next,
      outcome: { correct: isCorrect, card: card, pointsEarned: next.score - state.score },
    };
  }

  function accuracy(state) {
    var total = state.correct + state.wrong;
    return total === 0 ? 0 : state.correct / total;
  }

  function rank(state) {
    var acc = accuracy(state);
    if (state.correct + state.wrong === 0) return 'No calls made';
    if (acc >= 0.9) return 'Legendary Investigator';
    if (acc >= 0.75) return 'Senior Investigator';
    if (acc >= 0.5) return 'Field Investigator';
    return 'Still Learning the Floor';
  }

  var Game = { createGame: createGame, currentCard: currentCard, answer: answer, accuracy: accuracy, rank: rank };
  if (typeof module !== 'undefined' && module.exports) module.exports = Game;
  else global.Game = Game;
})(typeof window !== 'undefined' ? window : globalThis);
