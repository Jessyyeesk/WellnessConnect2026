/* =====================================================================
   Sunway College Ipoh Wellness Connect
   ---------------------------------------------------------------------
   PART 1: SETTINGS + QUESTION BANK  (safe to edit)
   PART 2: GAME CODE                 (edit only if you know JavaScript)
   ===================================================================== */

/* ---------- PART 1A: SETTINGS ---------- */
const SETTINGS = {
  pointsFirstTry: 2,    // points for a correct first answer
  pointsRetry: 1,       // points for a correct second answer
  raceDistance: 1800,   // Race mode: track length to the gate (bigger = more reading time)
  raceSpeed: 120,       // Race mode: car speed
  studyDistance: 300,   // Study mode: distance from start line to the gate
  studySpeed: 230       // Study mode: speed after Lock in
};

/* ---------- PART 1B: QUESTION BANK ----------
   Each question:
     topic   : label shown above the question
     text    : the question
     correct : the correct answer
     wrong   : exactly TWO wrong answers, each as [answer text, why it is wrong]
     explain : explanation shown after the question
     final   : true marks the final "new example" challenge
   Answer positions (A/B/C) are shuffled every game.
   To add or remove questions, copy or delete a whole { ... } block.
   Keep exactly one correct and two wrong answers per question. */
const QUESTIONS = [
  {
    topic: "Why health matters",
    text: "Why is it important to look after both your physical and your mental health?",
    correct: "They are linked: stress can disturb sleep and raise blood pressure, and long-term illness can affect mood.",
    wrong: [
      ["Only physical health matters because mental health cannot be changed.", "Mental health can improve with healthy habits, support and treatment, and it also affects the body."],
      ["You only need to think about health after you feel very sick.", "Conditions such as high blood pressure and early diabetes often cause no symptoms, so prevention and regular checks matter."]
    ],
    explain: "Body and mind affect each other. Caring for both through regular check-ups, balanced meals, activity, enough sleep and talking about your feelings helps you stay well and spot problems early."
  },
  {
    topic: "Blood pressure",
    text: "A nurse measures your blood pressure as 150/95 on three different visits. What does this suggest?",
    correct: "High blood pressure (hypertension) that needs a doctor's follow-up.",
    wrong: [
      ["Normal blood pressure for a student.", "Healthy blood pressure is around 120/80. Repeated readings of 140/90 or higher are considered high."],
      ["Low blood sugar.", "Blood pressure and blood sugar are different measurements. 150/95 describes the pressure inside your arteries."]
    ],
    explain: "Blood pressure is the force of blood against artery walls, written as two numbers in mmHg. Around 120/80 is healthy and repeated readings of 140/90 or higher suggest hypertension. It often has no symptoms, so it can only be found by measuring it. Untreated, it raises the risk of heart attack, stroke and kidney disease."
  },
  {
    topic: "Blood pressure: care",
    text: "Which set of habits helps keep blood pressure in a healthy range?",
    correct: "Eating less salt, being active most days and not smoking.",
    wrong: [
      ["Adding extra salt to every meal for flavour.", "Too much salt makes the body hold water and raises blood pressure."],
      ["Sitting all day and cutting sleep to study.", "Inactivity and poor sleep are linked to higher blood pressure."]
    ],
    explain: "Less salt and fewer processed foods, about 150 minutes of activity a week, a healthy weight, no smoking, limiting alcohol if you drink, managing stress and taking prescribed medicine all help control blood pressure."
  },
  {
    topic: "Diabetes",
    text: "What is happening in the body of a person with diabetes?",
    correct: "Blood sugar stays too high because the body makes too little insulin or cannot use it properly.",
    wrong: [
      ["Blood sugar drops to zero because insulin works too fast.", "The problem is the opposite: sugar builds up in the blood instead of entering the body's cells."],
      ["Food sugar cannot be digested in the stomach.", "Digestion works. The problem is that insulin is missing or not working, so sugar stays in the bloodstream."]
    ],
    explain: "Insulin is a hormone that moves glucose from the blood into cells for energy. In type 1 diabetes the body makes little or no insulin. In type 2, the most common type, the body responds poorly to insulin and may not make enough. Over time, high blood sugar can damage the eyes, kidneys, nerves and heart."
  },
  {
    topic: "Diabetes: warning signs",
    text: "Which group of symptoms could be warning signs of diabetes?",
    correct: "Feeling very thirsty, urinating often, tiredness, blurred vision and wounds that heal slowly.",
    wrong: [
      ["Sneezing, itchy eyes and a runny nose.", "These are typical of allergies or a cold, not of high blood sugar."],
      ["Sudden hair colour change and growing taller overnight.", "These are not linked to diabetes."]
    ],
    explain: "High blood sugar can cause thirst, frequent urination, tiredness, blurred vision, slow-healing wounds, tingling hands or feet and weight loss. Some people have no signs at all, so if you notice these symptoms or have risk factors, ask a doctor for a simple blood sugar test."
  },
  {
    topic: "Diabetes: care",
    text: "Which choice best helps prevent or manage type 2 diabetes?",
    correct: "Choosing water over sweetened drinks, eating vegetables and wholegrains, being active and having regular screening.",
    wrong: [
      ["Skipping breakfast, then eating a large sugary meal.", "Irregular eating and big sugary meals cause large blood sugar swings and can lead to weight gain."],
      ["Stopping medicine as soon as you feel well.", "Medicine and insulin keep blood sugar controlled. Only a doctor should change or stop them."]
    ],
    explain: "A balanced diet with fewer sugary drinks, regular activity, a healthy weight, screening, foot and eye checks, and taking prescribed medicine or insulin as directed all lower the risk of complications."
  },
  {
    topic: "Stress and anxiety",
    text: "How is anxiety different from everyday stress?",
    correct: "Anxiety is ongoing, excessive worry or fear that can continue even when there is no immediate problem.",
    wrong: [
      ["They are exactly the same and always last one day.", "Stress is a response to a demand such as exams and usually eases when it passes. Anxiety can persist and interfere with daily life."],
      ["Anxiety only happens to adults.", "Anxiety can affect anyone, including children, teenagers and students."]
    ],
    explain: "Stress is your reaction to pressure. Anxiety is persistent worry or fear, often with a racing heart, restlessness, poor sleep or trouble concentrating. Slow breathing, exercise, sleep and talking to someone help. If worry stays strong for weeks or stops you doing daily activities, see a counsellor or doctor."
  },
  {
    topic: "Depression",
    text: "Which description best matches possible depression?",
    correct: "Feeling very sad, empty or uninterested in usual activities for two weeks or more, with changes in sleep, appetite or energy.",
    wrong: [
      ["Feeling disappointed for an afternoon after a poor test result.", "Short-lived sadness after a setback is a normal feeling. Depression lasts longer and affects daily life."],
      ["Feeling tired after a long run, which passes after rest and food.", "Normal tiredness from exercise goes away with rest. It is not a sign of depression."]
    ],
    explain: "Depression is a treatable health condition, not weakness or laziness. Common signs are a persistent low mood or loss of interest, sleep and appetite changes, low energy, poor concentration and feeling worthless or hopeless. Talk to a trusted person, counsellor or doctor. If anyone has thoughts of harming themselves, get help immediately."
  },
  {
    topic: "Coping with stress",
    text: "Aiman has three assignments due, cannot sleep and feels overwhelmed. What is the healthiest first step?",
    correct: "Break the work into small steps, take short breaks, practise slow deep breathing and talk to a friend, family member or counsellor.",
    wrong: [
      ["Stay awake all night and avoid everyone until it is finished.", "Sleep loss and isolation make stress worse and make it harder to think clearly."],
      ["Ignore the feelings and rely on energy drinks or other substances.", "Avoiding feelings or using substances may seem to help briefly but can worsen stress, anxiety and sleep."]
    ],
    explain: "Healthy coping includes planning small tasks, taking breaks, slow breathing, exercise, regular meals, good sleep, limiting caffeine and late-night screens, hobbies, and talking to someone you trust. Ask for professional help if stress keeps building."
  },
  {
    topic: "Final challenge: new example",
    final: true,
    text: "Hafiz, 20, feels completely fine. His father has diabetes and high blood pressure, and Hafiz drinks sweet drinks daily and rarely exercises. What is the most helpful plan?",
    correct: "Get his blood sugar and blood pressure checked, and start healthier habits now: water instead of sweet drinks, daily activity and less salt.",
    wrong: [
      ["Do nothing because he has no symptoms.", "Diabetes and high blood pressure can be present for years without symptoms, and family history raises risk, so screening is wise."],
      ["Lifestyle cannot change family illness, so only mental health matters.", "Habits strongly influence the risk of type 2 diabetes and high blood pressure, even with family history. Physical and mental health both matter."]
    ],
    explain: "This combines what you learned: these conditions can be silent, family history and daily habits raise risk, and screening plus healthy choices (water, activity, less salt, sleep, managing stress) protect both body and mind."
  }
];

/* =====================================================================
   PART 2: GAME CODE
   ===================================================================== */
(function () {
  'use strict';

  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const SCREENS = ['home', 'how', 'game', 'end'];
  const TOTAL = QUESTIONS.length;
  const MAX_SCORE = TOTAL * SETTINGS.pointsFirstTry;

  /* track geometry (logical canvas units) */
  const W = 360, H = 480, ROAD_L = 40, ROAD_W = 280, LANE_W = ROAD_W / 3, CAR_Y = 380;
  const laneX = i => ROAD_L + LANE_W * (i + 0.5);
  const LANE_COL = ['#e10600', '#ffd400', '#f2f2f2'];
  const LANE_TXT = ['#ffffff', '#111111', '#111111'];
  const LANE_NAME = ['A (red)', 'B (yellow)', 'C (white)'];

  const cv = $('track'), ctx = cv.getContext('2d');
  const DPR = Math.min(2, window.devicePixelRatio || 1);
  cv.width = W * DPR; cv.height = H * DPR;
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

  let G = null, mode = 'race', raf = 0, last = 0, loopOn = false;

  /* ---------- screens ---------- */
  function show(name) {
    SCREENS.forEach(s => { $(s).hidden = (s !== name); });
    if (name !== 'game') stopLoop();
    window.scrollTo(0, 0);
  }
  const ask = msg => window.confirm(msg);

  /* ---------- game setup ---------- */
  function newGame() {
    G = { q: 0, score: 0, attempt: 0, opts: [], blocked: -1, lane: 1, carX: laneX(1), travel: 0, gateD: 0,
          speed: 0, boost: false, locked: false, phase: 'play', paused: false, after: 0, slow: 0, spin: 0,
          cones: [], coneHits: 0, results: [], flash: null, firstChoice: null, done: false, pts: 0, lastOpt: null };
    $('modal').hidden = true;
    $('pauseBtn').textContent = 'Pause';
    buildDots();
    show('game');
    loadQuestion();
    startLoop();
  }

  function loadQuestion() {
    const q = QUESTIONS[G.q];
    G.opts = shuffle([{ t: q.correct, ok: true }].concat(q.wrong.map(w => ({ t: w[0], why: w[1], ok: false }))));
    G.attempt = 0; G.blocked = -1; G.firstChoice = null; G.done = false;
    renderQuestion();
    startAttempt();
  }

  function startAttempt() {
    G.phase = 'play'; G.locked = false; G.boost = false; G.travel = 0; G.slow = 0; G.spin = 0; G.after = 0; G.flash = null; G.speed = 0;
    G.gateD = mode === 'race' ? SETTINGS.raceDistance : SETTINGS.studyDistance;
    G.cones = [];
    if (mode === 'race') {
      for (let d = 350; d < G.gateD - 300; d += 380) G.cones.push({ d: d + Math.random() * 60, lane: Math.floor(Math.random() * 3), hit: false });
    }
    if (G.blocked === G.lane) G.lane = [0, 1, 2].filter(i => i !== G.blocked)[0];
    G.carX = laneX(G.lane);
    markSelection(); updateStatus();
    $('lockBtn').textContent = mode === 'race' ? 'Lock in (boost)' : 'Lock in & drive';
  }

  function renderQuestion() {
    const q = QUESTIONS[G.q];
    $('hudQ').textContent = (G.q + 1) + ' / ' + TOTAL;
    $('hudScore').textContent = G.score + ' / ' + MAX_SCORE;
    $('qTag').textContent = q.topic;
    $('qText').textContent = q.text;
    const box = $('opts'); box.innerHTML = '';
    G.opts.forEach((o, i) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'opt lane' + i; b.dataset.lane = i;
      b.innerHTML = '<b class="chip">' + 'ABC'[i] + '</b><span></span>';
      b.lastChild.textContent = o.t;
      b.addEventListener('click', () => setLane(i));
      box.appendChild(b);
    });
    updateProgress();
  }

  function buildDots() {
    const d = $('dots'); d.innerHTML = '';
    for (let i = 0; i < TOTAL; i++) d.appendChild(document.createElement('span'));
  }
  function updateProgress() {
    const done = G.results.filter(Boolean).length;
    $('progressFill').style.width = (done / TOTAL * 100) + '%';
    [].forEach.call($('dots').children, (s, i) => {
      const r = G.results[i];
      s.className = r ? (r.pts > 0 ? 'done' : 'miss') : (i === G.q ? 'cur' : '');
    });
    $('hudScore').textContent = G.score + ' / ' + MAX_SCORE;
  }

  function markSelection() {
    [].forEach.call($('opts').children, (b, i) => {
      b.classList.toggle('sel', i === G.lane);
      b.disabled = (i === G.blocked);
      b.setAttribute('aria-pressed', i === G.lane ? 'true' : 'false');
    });
  }

  function updateStatus() {
    let s;
    if (G.locked) s = 'Locked in: lane ' + LANE_NAME[G.lane] + '. Driving to the gate...';
    else if (G.blocked >= 0) s = 'Second try: lane ' + LANE_NAME[G.blocked] + ' is closed. You are in lane ' + LANE_NAME[G.lane] + '.';
    else if (mode === 'study') s = 'Study mode: no rush. You are in lane ' + LANE_NAME[G.lane] + '. Change lane, then press Lock in.';
    else s = 'You are in lane ' + LANE_NAME[G.lane] + '. Steer to your answer. Cones only slow you down and never change your score.';
    $('statusLine').textContent = s;
  }

  /* ---------- controls ---------- */
  function canAct() { return G && G.phase === 'play' && !G.paused && !G.locked; }
  function setLane(l) {
    if (!canAct() || l < 0 || l > 2 || l === G.blocked) return;
    G.lane = l; markSelection(); updateStatus();
  }
  function move(dir) {
    if (!canAct()) return;
    let n = G.lane + dir;
    if (n === G.blocked) n += dir;
    if (n < 0 || n > 2 || n === G.blocked) return;
    setLane(n);
  }
  function lockIn() {
    if (!canAct()) return;
    G.locked = true;
    if (mode === 'race') G.boost = true;
    updateStatus();
  }
  function setPaused(v) {
    if (!G || G.phase !== 'play') return;
    G.paused = v; $('pauseBtn').textContent = v ? 'Resume' : 'Pause';
  }

  /* ---------- answering (scores exactly once per attempt) ---------- */
  function resolve(lane) {
    if (G.phase !== 'play') return;          // guard against duplicate scoring
    G.phase = 'resolving';
    G.carX = laneX(lane);
    const o = G.opts[lane], q = QUESTIONS[G.q];
    G.lastOpt = o; G.attempt++; G.after = 0.8; G.flash = { lane: lane, ok: o.ok };
    if (G.attempt === 1) G.firstChoice = o.t;
    if (o.ok) { G.pts = G.attempt === 1 ? SETTINGS.pointsFirstTry : SETTINGS.pointsRetry; G.score += G.pts; G.done = true; }
    else if (G.attempt >= 2) { G.pts = 0; G.done = true; }
    else { G.pts = 0; G.done = false; G.blocked = lane; }
    if (G.done) {
      G.results[G.q] = { text: q.text, correct: q.correct, firstChoice: G.firstChoice, firstOk: G.firstChoice === q.correct,
                         pts: G.pts, attempts: G.attempt, explain: q.explain, topic: q.topic };
    }
    updateProgress();
  }

  function showFeedback() {
    G.phase = 'feedback';
    const o = G.lastOpt, q = QUESTIONS[G.q], last = G.q === TOTAL - 1;
    const card = $('fbCard'); card.className = 'modal-card' + (o.ok ? '' : ' bad');
    let title, pts = '', body = '';
    if (o.ok) {
      title = '\u2714 Correct!';
      pts = '+' + G.pts + (G.pts === 1 ? ' point (second try)' : ' points');
      body = '<p class="hl"><b>Answer:</b> ' + esc(q.correct) + '</p><p><b>Why:</b> ' + esc(q.explain) + '</p>';
    } else if (!G.done) {
      title = '\u2718 Not quite';
      pts = 'No points yet. You can still earn ' + SETTINGS.pointsRetry + ' point.';
      body = '<p class="hl bad"><b>You chose:</b> ' + esc(o.t) + '</p><p><b>Why this does not fit:</b> ' + esc(o.why) + '</p><p>That lane is now closed. Read the question again and try the other lanes.</p>';
    } else {
      title = '\u2718 Not this time';
      pts = '0 points for this question.';
      body = '<p class="hl bad"><b>You chose:</b> ' + esc(o.t) + '</p><p><b>Why this does not fit:</b> ' + esc(o.why) + '</p><p class="hl"><b>Correct answer:</b> ' + esc(q.correct) + '</p><p><b>Why:</b> ' + esc(q.explain) + '</p>';
    }
    $('fbTitle').textContent = title; $('fbPoints').textContent = pts; $('fbBody').innerHTML = body;
    $('fbBtn').textContent = !G.done ? 'Try again' : (last ? 'See my results' : 'Continue');
    $('modal').hidden = false;
    $('fbCard').scrollTop = 0;
    $('fbBtn').focus();
  }

  function onContinue() {
    if (!G || G.phase !== 'feedback') return;   // ignore repeated clicks
    G.phase = 'play';
    $('modal').hidden = true;
    if (!G.done) { startAttempt(); }
    else if (G.q < TOTAL - 1) { G.q++; loadQuestion(); }
    else finish();
  }

  /* ---------- completion ---------- */
  function finish() {
    G.phase = 'over';
    stopLoop();
    const pct = Math.round(G.score / MAX_SCORE * 100);
    const firstTry = G.results.filter(r => r && r.firstOk).length;
    $('endScore').textContent = G.score; $('endMax').textContent = MAX_SCORE;
    $('endPct').textContent = pct + '% learning score, ' + firstTry + ' of ' + TOTAL + ' correct on the first try';
    let t, m;
    if (pct >= 80) { t = 'Pole position!'; m = 'Excellent understanding. Share what you learned with friends and family.'; }
    else if (pct >= 50) { t = 'On the podium!'; m = 'Good work. Read the explanations below for the questions you missed, then try again for a higher score.'; }
    else { t = 'Back to the pits'; m = 'Every driver needs practice. Read the explanations below, use Study mode, and try again.'; }
    $('endTitle').textContent = t; $('endMsg').textContent = m;
    $('endDrive').textContent = 'Driving stats (not part of your score): ' + G.coneHits + ' cone' + (G.coneHits === 1 ? '' : 's') + ' hit in ' + (mode === 'race' ? 'Race' : 'Study') + ' mode.';
    const box = $('review'); box.innerHTML = '';
    G.results.forEach((r, i) => {
      const d = document.createElement('div'); d.className = 'rv' + (r.pts > 0 ? '' : ' miss');
      const first = r.firstOk ? '\u2714 Correct on the first try' : '\u2718 First answer: ' + esc(r.firstChoice);
      d.innerHTML = '<h3>Q' + (i + 1) + '. ' + esc(r.text) + '</h3><p><b>' + first + '</b> (' + r.pts + ' point' + (r.pts === 1 ? '' : 's') + ')</p>' +
        (r.firstOk ? '' : '<p><b>Correct answer:</b> ' + esc(r.correct) + '</p>') + '<p>' + esc(r.explain) + '</p>';
      box.appendChild(d);
    });
    show('end');
  }

  /* ---------- game loop ---------- */
  function update(dt) {
    if (G.paused || G.phase === 'feedback' || G.phase === 'over') return;
    const base = mode === 'race' ? SETTINGS.raceSpeed : (G.locked ? SETTINGS.studySpeed : 0);
    const target = base * (G.boost ? 2.6 : 1) * (G.slow > 0 ? 0.45 : 1);
    G.speed += (target - G.speed) * Math.min(1, dt * 5);
    if (G.phase === 'play' && G.speed < 0.5 && target === 0) G.speed = 0;
    G.travel += G.speed * dt;
    G.carX += (laneX(G.lane) - G.carX) * Math.min(1, dt * 10);
    if (G.slow > 0) G.slow -= dt;
    if (G.spin > 0) G.spin -= dt;
    if (G.phase === 'play') {
      G.cones.forEach(c => {
        const y = CAR_Y - (c.d - G.travel);
        if (!c.hit && Math.abs(y - CAR_Y) < 30 && Math.abs(G.carX - laneX(c.lane)) < 32) { c.hit = true; G.slow = 1; G.spin = 0.5; G.coneHits++; }
      });
      if (G.travel >= G.gateD) resolve(G.lane);
    } else if (G.phase === 'resolving') {
      G.after -= dt;
      if (G.after <= 0) showFeedback();
    }
  }

  function drawCar(x, y, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    ctx.fillStyle = '#0b0b0b';
    [[-21, -30, 9, 17], [12, -30, 9, 17], [-22, 10, 10, 21], [12, 10, 10, 21]].forEach(r => ctx.fillRect(r[0], r[1], r[2], r[3]));
    ctx.fillStyle = '#1a1a1a'; ctx.fillRect(-23, -46, 46, 6); ctx.fillRect(-18, 30, 36, 7);
    ctx.fillStyle = '#e10600'; ctx.fillRect(-23, -46, 5, 6); ctx.fillRect(18, -46, 5, 6); ctx.fillRect(-18, 30, 4, 7); ctx.fillRect(14, 30, 4, 7);
    ctx.beginPath(); ctx.moveTo(0, -46); ctx.lineTo(5, -40); ctx.lineTo(7, -12); ctx.lineTo(13, -4); ctx.lineTo(12, 22); ctx.lineTo(6, 32);
    ctx.lineTo(-6, 32); ctx.lineTo(-12, 22); ctx.lineTo(-13, -4); ctx.lineTo(-7, -12); ctx.lineTo(-5, -40); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.fillRect(-2, -44, 4, 74);
    ctx.fillStyle = '#111'; ctx.beginPath(); ctx.ellipse(0, 4, 6, 9, 0, 0, 6.3); ctx.fill();
    ctx.fillStyle = '#ffd400'; ctx.beginPath(); ctx.arc(0, 3, 4, 0, 6.3); ctx.fill();
    ctx.restore();
  }

  function drawGate(y) {
    ctx.fillStyle = '#e8e8e8'; ctx.fillRect(ROAD_L - 14, y - 38, 6, 46); ctx.fillRect(ROAD_L + ROAD_W + 8, y - 38, 6, 46);
    ctx.fillStyle = '#0c0c0c'; ctx.fillRect(ROAD_L - 14, y - 38, ROAD_W + 28, 42);
    for (let i = 0; i < 3; i++) {
      const x = ROAD_L + i * LANE_W + 5;
      ctx.fillStyle = LANE_COL[i]; ctx.fillRect(x, y - 34, LANE_W - 10, 34);
      ctx.fillStyle = LANE_TXT[i]; ctx.font = 'bold 24px system-ui,Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('ABC'[i], x + (LANE_W - 10) / 2, y - 16);
      ctx.globalAlpha = 0.25; ctx.fillStyle = LANE_COL[i]; ctx.fillRect(ROAD_L + i * LANE_W, y, LANE_W, 8); ctx.globalAlpha = 1;
      if (i === G.blocked) {
        ctx.fillStyle = 'rgba(0,0,0,.72)'; ctx.fillRect(x, y - 34, LANE_W - 10, 34);
        ctx.fillStyle = '#ff5a5f'; ctx.fillText('\u2715', x + (LANE_W - 10) / 2, y - 16);
      }
      if (G.flash && G.flash.lane === i) {
        ctx.fillStyle = G.flash.ok ? 'rgba(34,197,94,.65)' : 'rgba(255,90,95,.65)'; ctx.fillRect(x, y - 34, LANE_W - 10, 34);
      }
    }
  }

  function draw() {
    const off = G.travel;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#14301c'; ctx.fillRect(0, 0, W, H);
    const o80 = off % 80;
    ctx.fillStyle = '#1a3d25';
    for (let y = -80 + o80; y < H; y += 80) { ctx.fillRect(0, y, ROAD_L - 10, 40); ctx.fillRect(ROAD_L + ROAD_W + 10, y, W - ROAD_L - ROAD_W - 10, 40); }
    ctx.fillStyle = '#2b2d33'; ctx.fillRect(ROAD_L, 0, ROAD_W, H);
    /* selected lane tint, closed lane shade */
    ctx.globalAlpha = 0.14; ctx.fillStyle = LANE_COL[G.lane]; ctx.fillRect(ROAD_L + G.lane * LANE_W, 0, LANE_W, H); ctx.globalAlpha = 1;
    if (G.blocked >= 0) { ctx.fillStyle = 'rgba(0,0,0,.5)'; ctx.fillRect(ROAD_L + G.blocked * LANE_W, 0, LANE_W, H); }
    /* kerbs */
    const P = 24, o = off % P, base = Math.floor(off / P);
    for (let i = -1; i * P + o < H; i++) {
      const y = i * P + o;
      ctx.fillStyle = ((i - base) & 1) ? '#e10600' : '#ffffff';
      ctx.fillRect(ROAD_L - 10, y, 10, P); ctx.fillRect(ROAD_L + ROAD_W, y, 10, P);
    }
    /* lane dashes */
    const o40 = off % 40; ctx.fillStyle = '#d9d9d9';
    for (let k = 1; k <= 2; k++) for (let y = -40 + o40; y < H; y += 40) ctx.fillRect(ROAD_L + LANE_W * k - 2, y, 4, 22);
    /* start grid line */
    const sy = CAR_Y + 44 + off;
    if (sy < H + 12) for (let c = 0; c < 14; c++) { ctx.fillStyle = (c & 1) ? '#fff' : '#000'; ctx.fillRect(ROAD_L + c * 20, sy, 20, 8); ctx.fillStyle = (c & 1) ? '#000' : '#fff'; ctx.fillRect(ROAD_L + c * 20, sy + 8, 20, 8); }
    /* cones */
    G.cones.forEach(c => {
      const y = CAR_Y - (c.d - off);
      if (y < -20 || y > H + 20) return;
      const x = laneX(c.lane);
      ctx.fillStyle = c.hit ? '#7a4a1c' : '#ff7a00';
      ctx.beginPath(); ctx.moveTo(x, y - 16); ctx.lineTo(x + 12, y + 10); ctx.lineTo(x - 12, y + 10); ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.fillRect(x - 7, y - 2, 14, 4);
    });
    /* gate */
    const gy = CAR_Y - (G.gateD - off);
    if (gy > -50 && gy < H + 60) drawGate(gy);
    /* car */
    drawCar(G.carX, CAR_Y, G.spin > 0 ? Math.sin(G.spin * 30) * 0.4 : 0);
    /* readouts */
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.font = 'bold 13px system-ui,Arial';
    ctx.fillStyle = 'rgba(0,0,0,.6)'; ctx.fillRect(4, 4, 150, 40);
    ctx.fillStyle = '#ffd400'; ctx.fillText(Math.round(G.speed / 120 * 200) + ' km/h', 10, 20);
    ctx.fillStyle = '#fff'; ctx.fillText('Gate in ' + Math.max(0, Math.round((G.gateD - off) / 10)) + ' m', 10, 37);
    if (G.paused) {
      ctx.fillStyle = 'rgba(0,0,0,.65)'; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#fff'; ctx.font = 'bold 34px system-ui,Arial'; ctx.textAlign = 'center'; ctx.fillText('PAUSED', W / 2, H / 2);
      ctx.font = '15px system-ui,Arial'; ctx.fillText('Press Resume, P or Esc', W / 2, H / 2 + 28);
    }
  }

  function frame(t) {
    if (!loopOn) return;
    const dt = Math.min(0.05, (t - last) / 1000 || 0); last = t;
    if (G) { update(dt); draw(); }
    raf = requestAnimationFrame(frame);
  }
  function startLoop() { if (loopOn) return; loopOn = true; last = performance.now(); raf = requestAnimationFrame(frame); }
  function stopLoop() { loopOn = false; cancelAnimationFrame(raf); }

  /* ---------- events ---------- */
  $('playBtn').addEventListener('click', () => {
    mode = document.querySelector('input[name="mode"]:checked').value;
    show('how');
  });
  $('howBackBtn').addEventListener('click', () => show('home'));
  $('startBtn').addEventListener('click', newGame);
  $('againBtn').addEventListener('click', newGame);
  $('endHomeBtn').addEventListener('click', () => { G = null; show('home'); });
  $('homeBtn').addEventListener('click', () => {
    const wasPaused = G && G.paused; setPaused(true);
    if (ask('Return to the home page? Your progress will be lost.')) { G = null; show('home'); }
    else if (!wasPaused) setPaused(false);
  });
  $('restartBtn').addEventListener('click', () => {
    const wasPaused = G && G.paused; setPaused(true);
    if (ask('Restart the race from question 1?')) newGame();
    else if (!wasPaused) setPaused(false);
  });
  $('pauseBtn').addEventListener('click', () => setPaused(!G.paused));
  $('leftBtn').addEventListener('click', () => move(-1));
  $('rightBtn').addEventListener('click', () => move(1));
  $('lockBtn').addEventListener('click', lockIn);
  $('fbBtn').addEventListener('click', onContinue);

  cv.addEventListener('pointerdown', e => {
    if (!G) return;
    const r = cv.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width * W;
    setLane(Math.max(0, Math.min(2, Math.floor((x - ROAD_L) / LANE_W))));
  });

  /* stop buttons keeping keyboard focus after a mouse/touch click */
  document.addEventListener('click', e => {
    const b = e.target.closest && e.target.closest('button');
    if (b && !b.closest('#modal')) b.blur();
  });

  document.addEventListener('keydown', e => {
    if ($('game').hidden || !G || !$('modal').hidden) return;
    const k = e.key, onBtn = e.target && e.target.tagName === 'BUTTON';
    if (k === 'ArrowLeft' || k === 'a' || k === 'A') { e.preventDefault(); move(-1); }
    else if (k === 'ArrowRight' || k === 'd' || k === 'D') { e.preventDefault(); move(1); }
    else if ((k === ' ' || k === 'Enter') && !onBtn) { e.preventDefault(); lockIn(); }
    else if (k === 'p' || k === 'P' || k === 'Escape') { e.preventDefault(); setPaused(!G.paused); }
    else if (k === '1' || k === '2' || k === '3') setLane(Number(k) - 1);
  });

  document.addEventListener('visibilitychange', () => { if (document.hidden && G) setPaused(true); });

  show('home');
})();
