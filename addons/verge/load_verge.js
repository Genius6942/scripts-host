/// load_verge.js

fetch('https://scripts.haelp.dev/addons/verge/verge.js').then(r => r.text()).then(r => eval(r)).catch((e) => console.error('Failed to load VERGE:', e));
