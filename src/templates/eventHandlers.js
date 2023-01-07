export function onInput(e) {
  const { target } = e;
  const { name, value } = target;
  const fieldChanged = new CustomEvent('pw-field-changed', {
    composed: true,
    detail: { [name]: value },
  });

  target.dispatchEvent(fieldChanged);
}