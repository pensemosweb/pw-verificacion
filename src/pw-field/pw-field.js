
import { LitElement, html } from 'lit';
import sharedStyles from '../shared-styles/main.styles.js';
import styles from './pw-field.styles.js';

class PwField extends LitElement {
  static get is() {
    return 'pw-field';
  }

  static get styles() {
    return [sharedStyles, styles];
  }

  static get properties() {
    return {
      name: String,
      label: String,
      value: String,
      type: String,
      isDisabled: { type: Boolean, attribute: 'is-disabled' }
    };
  }

  constructor() {
    super();
    this.name = ''
    this.label = '';
    this.value = '';
    this.type = 'text';
    this.isDisabled = false
  }

  render() {
    const { name, type, label, value, isDisabled, onInput } = this;

    return html`
      <div class="flex flex-cols">
        <label for=${name}>${label}</label>
        <input
          type="${type}"
          @input=${onInput}
          .value=${value}
          id=${name}
          name=${name}
          ?disabled=${isDisabled}
        />
      </div>
    `;
  }

  onInput(e) {
    const { name, value } = e.target;

    const fieldChanged = new CustomEvent('pw-field-changed', {
      composed: true,
      detail: { [name]: value },
    });

    this.dispatchEvent(fieldChanged);
  }
}

customElements.define(PwField.is, PwField);