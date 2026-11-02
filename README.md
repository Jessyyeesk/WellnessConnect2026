# Sunway College Ipoh Wellness Connect

A comedy car-racing learning game about blood pressure, diabetes, and mental wellness (stress, anxiety, depression) with coping skills. 15 questions, about 15 minutes, ages 6 to 70. Plain HTML, CSS and JavaScript. No backend, API key or build step.

## Files
- `index.html` page structure
- `style.css` styling and layout
- `script.js` game logic and the editable question bank (top of file)
- `README.md` this guide

## Test locally
Double-click `index.html`, or run `python3 -m http.server` in this folder and open http://localhost:8000.

## Publish on GitHub Pages
1. Create a new public repository on github.com.
2. Upload `index.html`, `style.css`, `script.js` and `README.md` to the repository root (Add file > Upload files > Commit).
3. Go to Settings > Pages. Under Build and deployment choose Deploy from a branch, branch `main`, folder `/ (root)`, then Save.
4. After a minute your site appears at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Edit questions
Open `script.js` and edit the `QUESTIONS` list at the top. Each item has `t` (topic), `q` (question), `o` (exactly 4 options), `a` (index 0 to 3 of the correct option) and `e` (explanation). Options are shuffled automatically. The last question is the final "new example" check and always uses multiple choice.

## Manual test checklist
- Race: hold gas (↑/W or GAS button), steer, car reaches the gate and locks in one answer
- Feedback shows an explanation and Continue moves on
- Score rises by 10 only on first-try correct answers; repeated clicks do not double count
- Untimed mode makes every round plain multiple choice
- Results show stars and review; Retry missed, Play again, Home and Restart work
- Check a phone-width window (about 360px)

## Disclaimer
Educational only. It does not diagnose. If you are worried about your health, see a doctor or counsellor. In an emergency in Malaysia, call 999.
