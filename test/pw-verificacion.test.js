import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/pw-verificacion.js';

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
    it('Entonces la clave se refleja en las otras dos secciones', () => {

    });
  })

  describe('Cuando el usuario ingresa el dato de FECHA', () => {
    it('Entonces la clave se refleja en las otras dos secciones', () => {
      
    });
  });

  describe('Cuando el usuario ingresa el dato de HORA', () => {
    it('Entonces la clave se refleja en las otras dos secciones', () => {
      
    });
  });

});
