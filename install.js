const installOptions = document.getElementById('install-options');
const installButton = installOptions.querySelector('summary');
const standalone = window.matchMedia('(display-mode: standalone)');
let installPrompt;

function hideInstall() {
  installOptions.hidden = true;
  installOptions.open = false;
}

if (standalone.matches || navigator.standalone) hideInstall();

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installPrompt = event;
});

window.addEventListener('appinstalled', () => {
  installPrompt = undefined;
  hideInstall();
});

installButton.addEventListener('click', async event => {
  if (!installPrompt) return;

  event.preventDefault();
  const prompt = installPrompt;
  installPrompt = undefined;
  installOptions.open = false;

  try {
    const { outcome } = await prompt.prompt();
    if (outcome === 'accepted') hideInstall();
  } catch {
    installOptions.open = !installOptions.hidden;
  }
});
