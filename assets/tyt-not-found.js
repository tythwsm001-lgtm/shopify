class TYTNotFound extends HTMLElement {
  connectedCallback() {
    if (this.initialized) return;
    this.initialized = true;
    const target = new URL(this.dataset.target, window.location.origin);
    if (this.hasAttribute('data-editor') || target.origin !== window.location.origin || target.pathname === window.location.pathname) return;
    // Avoid repeatedly moving a shopper if the destination is unavailable too.
    try {
      if (Date.now() - Number(sessionStorage.getItem('tyt-404-redirect') || 0) < 60000) return;
    } catch (_) { /* Storage is optional for recovery. */ }
    this.remaining = Number(this.dataset.seconds) || 5;
    this.querySelector('[data-countdown]').hidden = false;
    this.querySelector('[data-cancel]').addEventListener('click', () => this.cancel());
    this.querySelector('form').addEventListener('focusin', () => this.cancel());
    this.addEventListener('click', (event) => {
      if (event.target.closest('a')) this.stop();
    });
    this.timer = setInterval(() => {
      if (document.hidden) return;
      this.remaining -= 1;
      this.querySelector('[data-seconds-left]').textContent = this.remaining;
      if (this.remaining <= 0) {
        this.stop();
        try { sessionStorage.setItem('tyt-404-redirect', String(Date.now())); } catch (_) { /* Continue without storage. */ }
        window.location.replace(target.href);
      }
    }, 1000);
  }
  stop() { clearInterval(this.timer); }
  cancel() {
    this.stop();
    this.querySelector('[data-countdown-message]').textContent = 'Automatic redirect paused. Choose a link or search below.';
    this.querySelector('[data-cancel]').hidden = true;
    this.querySelector('[data-countdown-status]').textContent = 'Automatic redirect paused.';
  }
  disconnectedCallback() { this.stop(); }
}
if (!customElements.get('tyt-not-found')) customElements.define('tyt-not-found', TYTNotFound);
