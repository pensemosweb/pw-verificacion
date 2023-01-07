import { css } from 'lit';

export default css`
:host {
  display: block;
  text-transform: uppercase;
}

.hidden {
  display: none;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

@media print {
  .print\\:hidden {
    display: none;
  }

  .print\\:visible {
    display: block;
  }
}
`;