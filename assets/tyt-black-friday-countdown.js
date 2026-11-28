if (!customElements.get('tyt-black-friday-countdown')) {
  customElements.define('tyt-black-friday-countdown', class extends HTMLElement {
    connectedCallback() {
      this.deadline = Date.parse(this.dataset.end);
      if (!Number.isFinite(this.deadline)) { this.hidden = true; return; }
      if (this.hasAttribute('data-hide-on-end')) this.hidden = this.deadline <= Date.now();
      this.update();
      if (this.deadline > Date.now()) this.interval = setInterval(() => this.update(), 1000);
    }
    disconnectedCallback() { clearInterval(this.interval); }
    update() {
      const seconds = Math.max(0, Math.ceil((this.deadline - Date.now()) / 1000));
      const values = { days: Math.floor(seconds / 86400), hours: Math.floor(seconds / 3600) % 24, minutes: Math.floor(seconds / 60) % 60, seconds: seconds % 60 };
      for (const [unit, value] of Object.entries(values)) {
        this.querySelector(`[data-${unit}]`).textContent = String(value).padStart(2, '0');
      }
      if (seconds === 0) {
        clearInterval(this.interval);
        if (this.hasAttribute('data-hide-on-end')) {
          this.hidden = true;
          return;
        }
        this.querySelector('[data-live-label]').textContent = 'HAVE ENDED';
        this.querySelector('.tyt-bf-bar__countdown').hidden = true;
        this.querySelector('.tyt-bf-bar__saving').hidden = true;
        this.querySelector('.tyt-bf-bar__cta').textContent = 'EXPLORE DEALS →';
      }
    }
  });
}
