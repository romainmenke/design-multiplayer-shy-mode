var s = document.createElement('script');
s.setAttribute('type', 'text/javascript');
s.setAttribute('src', chrome.runtime.getURL('scripts/shy-mode.js'));
document.body.appendChild(s);
