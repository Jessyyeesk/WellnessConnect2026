# Sunway College Ipoh Wellness Connect

An F1-style racing learning game about **blood pressure, diabetes, stress, anxiety and depression**, built for foundation-level students.
Plain HTML, CSS and JavaScript. No backend, no API key, no build step.

## Files
```
wellness-connect/
  index.html    page structure (home, instructions, game, results)
  style.css     all styling
  script.js     settings, QUESTION BANK (top of file) and game code
  favicon.svg   site icon
  README.md     this file
```

## Test locally
1. Download or unzip the folder.
2. Double-click `index.html` (it opens in your browser). Nothing else is needed.
   Optional local server: run `python3 -m http.server 8000` in the folder, then open http://localhost:8000.

## Publish with GitHub Pages
1. Create a GitHub account and click **New repository** (for example `wellness-connect`, set to Public).
2. Click **uploading an existing file**, drag in `index.html`, `style.css`, `script.js`, `favicon.svg` and `README.md`, then **Commit changes**. `index.html` must be in the repository root, not inside a sub-folder.
3. Go to **Settings > Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, choose branch **main** and folder **/ (root)**, then **Save**.
4. After a minute or two the site appears at `https://YOUR-USERNAME.github.io/wellness-connect/`.

All file paths are relative, so the site works at that project address.

## Edit the questions
Open `script.js`. The **QUESTION BANK** is at the top. Each question looks like this:
```js
{
  topic: "Label shown above the question",
  text: "The question?",
  correct: "The correct answer",
  wrong: [
    ["Wrong answer 1", "Why it is wrong"],
    ["Wrong answer 2", "Why it is wrong"]
  ],
  explain: "Explanation shown after answering"
}
```
Keep one correct and two wrong answers. Answer positions (A, B, C) are shuffled every game. Add `final: true` to mark a final challenge. The total score and progress bar adjust automatically when you add or remove questions. Race length and speed can be changed in `SETTINGS`.

## Game design
- **Race mode:** the car drives itself toward a gate with three lanes (A, B, C). Students steer into a lane to answer. Cones only slow the car and never affect the score. Lock in boosts the car to the gate. Pause is available.
- **Study mode (untimed):** nothing moves until the student presses Lock in.
- **Scoring:** 2 points for a correct first try, 1 for a correct second try, 0 otherwise (max 20). Speed and cones never change the learning score.
- After a wrong answer the student sees why, the lane closes, and they can try again.
- Question 10 is a new-example check (Hafiz) that combines the earlier ideas.
- Controls: arrow keys or A/D to steer, 1/2/3 to pick a lane, Space or Enter to lock in, P or Esc to pause. Touch: on-screen buttons, tap a lane or an answer card.

## Testing checklist
- [ ] Play opens instructions, Start the race opens question 1
- [ ] Steering (keys, buttons, tapping lanes and answer cards) moves the car
- [ ] Lock in works in both modes, and repeated presses do not score twice
- [ ] Correct, wrong-first-try and wrong-second-try feedback all show an explanation and wait for Continue
- [ ] Score, progress bar and question counter update
- [ ] Final screen shows score, review of all 10 questions and help numbers
- [ ] Restart, Home and Play again work
- [ ] Works on a phone-sized screen

## Notes
Health content is educational only and not medical advice. Helpline numbers (Befrienders KL 03-7627 2929, Talian Kasih 15999) should be re-checked from time to time.
