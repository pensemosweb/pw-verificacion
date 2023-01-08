/* eslint-disable no-use-before-define */
export function onInput(e) {
  const { target } = e;
  const { name, value } = target;
  dispatchPwFieldChanged(target, name, value);
}

function dispatchPwFieldChanged(target, name, value) {
  const fieldChanged = new CustomEvent('pw-field-changed', {
    composed: true,
    detail: { [name]: value },
  });

  target.dispatchEvent(fieldChanged);
}

export function onDateInput(e) {
  const { target } = e;
  const { name, valueAsNumber, value } = target;
  dispatchPwFieldChanged(target, name, { value, valueAsNumber });
}