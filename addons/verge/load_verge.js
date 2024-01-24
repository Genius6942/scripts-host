/// load_verge.js

console.log('Loading verge...');

fetch('https://scripts.haelp.dev/addons/verge/verge.js').then(r => r.text()).then(r => eval(r)).catch((e) => console.error('Failed to load VERGE:', e));
