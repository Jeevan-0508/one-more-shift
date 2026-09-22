/**
 * DOM wiring for a shift: build a deck from the real card pool, run it through the pure Game
 * state machine on every FLAG/CLEAR call (click or F/C key), and end the shift either when the
 * deck runs out or the clock does — whichever comes first.
 */
(function () {
  var SHIFT_SECONDS = 60;
  var DECK_SIZE = 30;
  var BEST_KEY = 'oms_best_score';

  var state = null;
  var timeLeft = SHIFT_SECONDS;
  var timerHandle = null;
  var shiftOver = false;

  function loadBest() {
    try { return parseInt(localStorage.getItem(BEST_KEY), 10) || 0; } catch (e) { return 0; }
  }
  function saveBest(score) {
    try { localStorage.setItem(BEST_KEY, String(score)); } catch (e) { /* private mode, etc: no persistence, no crash */ }
  }
  var bestScore = loadBest();

  // Streak cap tightens partway through the deck: first two thirds is the pacing tested in
  // deck.test.js (cap 3), the final third demands faster switching (cap 2) so a shift actually
  // gets harder as the clock runs down, not just longer.
  function streakCap(pos) { return pos < Math.floor(DECK_SIZE * 0.67) ? 3 : 2; }

  var els = {
    intro: document.getElementById('intro'),
    play: document.getElementById('play'),
    results: document.getElementById('results'),
    time: document.getElementById('time'),
    timeBar: document.getElementById('time-bar'),
    score: document.getElementById('score'),
    streak: document.getElementById('streak'),
    progress: document.getElementById('progress'),
    pattern: document.getElementById('pattern'),
    text: document.getElementById('card-text'),
    feedback: document.getElementById('feedback'),
    flagBtn: document.getElementById('flag-btn'),
    clearBtn: document.getElementById('clear-btn'),
    startBtn: document.getElementById('start-btn'),
    againBtn: document.getElementById('again-btn'),
    rank: document.getElementById('rank'),
    finalScore: document.getElementById('final-score'),
    finalAccuracy: document.getElementById('final-accuracy'),
    finalStreak: document.getElementById('final-streak'),
    finalCalls: document.getElementById('final-calls'),
    bestScore: document.getElementById('best-score'),
    newBest: document.getElementById('new-best'),
    introBest: document.getElementById('intro-best'),
  };

  function startShift() {
    els.introBest.textContent = bestScore;
    var seed = Date.now() % 2147483647;
    var deck = Deck.buildDeck(window.CARDS, DECK_SIZE, RNG.mulberry32(seed), streakCap);
    state = Game.createGame(deck);
    timeLeft = SHIFT_SECONDS;
    shiftOver = false;

    els.intro.hidden = true;
    els.results.hidden = true;
    els.play.hidden = false;
    els.feedback.textContent = '';
    els.feedback.className = 'feedback';

    renderCard();
    renderHud();
    if (timerHandle) clearInterval(timerHandle);
    timerHandle = setInterval(tick, 1000);
  }

  function tick() {
    timeLeft -= 1;
    if (timeLeft <= 0) {
      timeLeft = 0;
      endShift();
    }
    renderHud();
  }

  function renderHud() {
    els.time.textContent = timeLeft + 's';
    els.timeBar.style.width = Math.max(0, (timeLeft / SHIFT_SECONDS) * 100) + '%';
    els.timeBar.classList.toggle('low', timeLeft <= 10);
    els.score.textContent = state.score;
    els.streak.textContent = state.streak;
    els.progress.textContent = Math.min(state.index + 1, state.deck.length) + ' / ' + state.deck.length;
  }

  function renderCard() {
    var card = Game.currentCard(state);
    if (!card) { endShift(); return; }
    els.pattern.textContent = card.patternName;
    els.text.textContent = card.text;
  }

  function call(choice) {
    if (shiftOver || state.done) return;
    var result = Game.answer(state, choice);
    state = result.state;
    var outcome = result.outcome;

    els.feedback.textContent = (outcome.correct ? '+' + outcome.pointsEarned + ' — ' : 'Missed — ') + outcome.card.reveal;
    els.feedback.className = 'feedback ' + (outcome.correct ? 'good' : 'bad');

    renderHud();
    if (state.done) endShift();
    else renderCard();
  }

  function endShift() {
    if (shiftOver) return;
    shiftOver = true;
    if (timerHandle) clearInterval(timerHandle);

    els.play.hidden = true;
    els.results.hidden = false;
    var acc = Game.accuracy(state);
    els.rank.textContent = Game.rank(state);
    els.finalScore.textContent = state.score;
    els.finalAccuracy.textContent = Math.round(acc * 100) + '%';
    els.finalStreak.textContent = state.bestStreak;
    els.finalCalls.textContent = (state.correct + state.wrong) + ' calls, ' + state.correct + ' correct';

    var isNewBest = state.score > bestScore;
    if (isNewBest) { bestScore = state.score; saveBest(bestScore); }
    els.bestScore.textContent = bestScore;
    els.newBest.hidden = !isNewBest;
  }

  els.startBtn.addEventListener('click', startShift);
  els.againBtn.addEventListener('click', startShift);
  els.flagBtn.addEventListener('click', function () { call('flag'); });
  els.clearBtn.addEventListener('click', function () { call('clear'); });

  document.addEventListener('keydown', function (e) {
    if (els.play.hidden) return;
    if (e.key === 'f' || e.key === 'F') call('flag');
    if (e.key === 'c' || e.key === 'C') call('clear');
  });
})();
