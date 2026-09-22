import { describe, expect, test } from 'bun:test';
import { createGame, currentCard, answer, accuracy, rank } from './game.js';

function deck() {
  return [
    { type: 'flag', text: 'a' },
    { type: 'clear', text: 'b' },
    { type: 'flag', text: 'c' },
  ];
}

describe('createGame', function () {
  test('starts at zero score with the deck attached', function () {
    var g = createGame(deck());
    expect(g.score).toBe(0);
    expect(g.index).toBe(0);
    expect(g.done).toBe(false);
  });

  test('an empty deck starts already done', function () {
    var g = createGame([]);
    expect(g.done).toBe(true);
  });
});

describe('answer', function () {
  test('a correct call scores points and increments the streak', function () {
    var g = createGame(deck());
    var r = answer(g, 'flag');
    expect(r.outcome.correct).toBe(true);
    expect(r.state.score).toBe(10);
    expect(r.state.streak).toBe(1);
  });

  test('a wrong call scores nothing and resets the streak to zero', function () {
    var g = createGame(deck());
    var r = answer(g, 'clear'); // first card is 'flag'
    expect(r.outcome.correct).toBe(false);
    expect(r.state.score).toBe(0);
    expect(r.state.streak).toBe(0);
  });

  test('consecutive correct calls earn a growing streak bonus', function () {
    var g = createGame([{ type: 'flag' }, { type: 'flag' }, { type: 'flag' }]);
    var r1 = answer(g, 'flag');
    var r2 = answer(r1.state, 'flag');
    expect(r2.outcome.pointsEarned).toBeGreaterThan(r1.outcome.pointsEarned);
  });

  test('never advances past the end of the deck', function () {
    var g = createGame([{ type: 'flag' }]);
    var r1 = answer(g, 'flag');
    expect(r1.state.done).toBe(true);
    var r2 = answer(r1.state, 'flag');
    expect(r2.outcome).toBeNull();
    expect(r2.state).toEqual(r1.state);
  });

  test('original state object is never mutated', function () {
    var g = createGame(deck());
    var before = JSON.stringify(g);
    answer(g, 'flag');
    expect(JSON.stringify(g)).toBe(before);
  });
});

describe('accuracy and rank', function () {
  test('accuracy is 0 with no calls made', function () {
    expect(accuracy(createGame(deck()))).toBe(0);
    expect(rank(createGame(deck()))).toBe('No calls made');
  });

  test('100% accuracy ranks Legendary Investigator', function () {
    var g = createGame([{ type: 'flag' }, { type: 'flag' }]);
    var r1 = answer(g, 'flag');
    var r2 = answer(r1.state, 'flag');
    expect(accuracy(r2.state)).toBe(1);
    expect(rank(r2.state)).toBe('Legendary Investigator');
  });

  test('poor accuracy ranks Still Learning the Floor', function () {
    var g = createGame([{ type: 'flag' }, { type: 'flag' }]);
    var r1 = answer(g, 'clear');
    var r2 = answer(r1.state, 'clear');
    expect(rank(r2.state)).toBe('Still Learning the Floor');
  });
});
