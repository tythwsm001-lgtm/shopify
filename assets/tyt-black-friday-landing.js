class TytBundleBuilder extends HTMLElement {
  connectedCallback() {
    if (this.form) return;
    this.form = this.querySelector('form');
    this.slots = [...this.querySelectorAll('fieldset')];
    this.button = this.querySelector('button');
    this.output = this.querySelector('output');
    this.error = this.querySelector('[role="alert"]');
    this.money = new Intl.NumberFormat(this.dataset.locale, {
      style: 'currency',
      currency: this.dataset.currency,
    });
    this.form.addEventListener('change', (event) => {
      if (!event.target.matches('[data-bundle-product]')) return;
      this.updatePreview(event.target.closest('fieldset'));
      this.updateExtension();
      this.updateTotal();
    });
    this.form.addEventListener('submit', (event) => this.buy(event));
    for (const slot of this.slots) {
      const product = slot.querySelector('[data-bundle-product]');
      product.disabled = product.options.length < 2;
      if (product.disabled) product.options[0].textContent = 'No products available';
      this.updatePreview(slot);
    }
    this.updateExtension();
    this.updateTotal();
  }

  updateExtension() {
    const mount = this.querySelector('[data-bundle-category="ball-mounts"] select');
    const slot = this.querySelector('[data-bundle-category="hitch-extension-1"]');
    const extension = slot.querySelector('select');
    const incompatible = mount.selectedOptions[0]?.dataset.receiver === '2.5';
    if (incompatible) extension.value = '';
    extension.disabled = incompatible || extension.options.length < 2;
    slot.querySelector('[data-extension-warning]').hidden = !incompatible;
    this.updatePreview(slot);
  }

  get selections() {
    return [...this.querySelectorAll('[data-bundle-product]:enabled')].map((select) => select.selectedOptions[0])
      .filter((option) => option?.value);
  }

  updatePreview(slot) {
    if (!slot) return;
    const product = slot.querySelector('[data-bundle-product]').selectedOptions[0];
    const fitBadge = slot.querySelector('[data-bundle-fit]');
    if (fitBadge) {
      const size = product?.dataset.receiver;
      fitBadge.hidden = size !== '2' && size !== '2.5';
      fitBadge.dataset.tytFit = fitBadge.hidden ? '' : size;
      fitBadge.textContent = fitBadge.hidden ? '' : size + '″ Receiver';
    }
    const preview = slot.querySelector('.tyt-builder__preview');
    const image = preview.querySelector('img');
    const source = product?.dataset.image;
    preview.hidden = !source;
    if (!source) return;
    image.alt = product.dataset.title;
    image.src = source;
  }

  updateTotal() {
    const selections = this.selections;
    this.button.disabled = this.busy || selections.length === 0;
    this.output.querySelector('[data-total-empty]').hidden = selections.length > 0;
    this.output.querySelector('[data-total-values]').hidden = selections.length === 0;
    if (!selections.length) return;

    const totals = selections.reduce((sum, option) => {
      const price = Number(option.dataset.price);
      sum.price += price;
      sum.compare += Math.max(price, Number(option.dataset.comparePrice || price));
      return sum;
    }, { price: 0, compare: 0 });
    const savings = totals.compare - totals.price;
    const compare = this.output.querySelector('[data-total-compare]');
    const saving = this.output.querySelector('[data-total-savings]');
    this.output.querySelector('[data-total-price]').textContent = this.money.format(totals.price / 100);
    compare.hidden = saving.hidden = savings <= 0;
    compare.textContent = this.money.format(totals.compare / 100);
    saving.textContent = 'Save ' + this.money.format(savings / 100);
  }

  async buy(event) {
    event.preventDefault();
    this.updateExtension();
    this.updateTotal();
    const selections = this.selections;
    if (this.busy || selections.length === 0) return;
    this.busy = true;
    this.updateTotal();
    this.error.hidden = true;
    try {
      const response = await fetch(this.dataset.cartAdd, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ items: selections.map((option) => ({ id: option.value, quantity: 1 })) }),
      });
      const result = await response.json();
      if (!response.ok || result.status) {
        this.error.textContent = (result.description || 'The bundle could not be added.') + ' Review your cart before trying again.';
        this.error.hidden = false;
        return;
      }
      window.location.assign('/checkout');
    } catch {
      this.error.textContent = 'We could not confirm the bundle. Review your cart before trying again.';
      this.error.hidden = false;
    } finally {
      if (!this.error.hidden) {
        this.busy = false;
        this.updateTotal();
      }
    }
  }
}

if (!customElements.get('tyt-bundle-builder')) customElements.define('tyt-bundle-builder', TytBundleBuilder);

document.addEventListener('change', (event) => {
  const selected = event.target;
  if (!selected.matches('.tyt-deals__options input:checked')) return;

  const card = selected.closest('.tyt-deals__card');
  const price = card.querySelector('[data-deal-selected-price]');
  const comparePrice = price.querySelector('s');
  comparePrice.textContent = selected.dataset.comparePrice || '';
  comparePrice.hidden = !selected.dataset.comparePrice;
  price.querySelector('strong').textContent = selected.dataset.price;
  card.querySelector('[data-deal-default-price]').hidden = true;
  price.hidden = false;
});

document.addEventListener('submit', (event) => {
  const form = event.target;
  if (!form.matches('.tyt-deals__buy')) return;

  const selected = form.querySelector('.tyt-deals__options input:checked');
  if (selected) {
    form.elements.quantity.value = selected.dataset.minQuantity;
  }
});
