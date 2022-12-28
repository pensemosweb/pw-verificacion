import { html } from 'lit';
import { fixture, expect, oneEvent } from '@open-wc/testing';
import '../src/pw-verificacion.js';
import { getField } from './utills.js';

describe('Dado la pantalla principal de verificacion automotriz', () => {
  let element;
  let root;
  beforeEach(async () => {
    element = await fixture(html`<pw-verificacion></pw-verificacion>`);
    root = element.shadowRoot;
  });

  describe('Cuando el usuario quiere llenar los datos del cliente en tres secciones', () => {
    it('Entonces un formulario para ingresar datos del cliente es mostrado', () => {
      expect(root.querySelector('[data-testid="form"]')).to.be.visible;
    });
  });

  describe('Cuando el usuario ingresa el dato de CLAVE', () => {
    it('Entonces la clave se refleja en las otras dos secciones', async () => {
      const form = root.querySelector('[data-testid="form"]');
      const formDisabled1 = root.querySelector('[data-testid="form-disabled-1"]');
      const formDisabled2 = root.querySelector('[data-testid="form-disabled-2"]');

      const field = getField(form, '[data-testid="form-first"]', '[name="clave"]');
      const field2 = getField(formDisabled1, '[data-testid="form-first"]', '[name="clave"]');
      const field3 = getField(formDisabled2, '[data-testid="form-first"]', '[name="clave"]');

      field.value = 'C-P01';
      field.dispatchEvent(new InputEvent('input'));

      await formDisabled1.updateComplete;
      await formDisabled2.updateComplete;

      expect(field2.value).to.equal(field.value);
      expect(field3.value).to.equal(field.value);
    });
  });

  describe('Cuando el usuario ingresa el dato de FECHA', () => {
    it('Entonces la clave se refleja en las otras dos secciones', async () => {

    });
  });

  describe('Cuando el usuario ingresa el dato de HORA', () => {
    it('Entonces la clave se refleja en las otras dos secciones', () => {
      
    });
  });

});
