import { css } from 'lit';

export default css`
  .grid {
    display: grid;
    gap: 1rem;
  }

  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(12px,1fr));
  }

  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(50px,1fr));
  }

  .grid-cols-2 {
    grid-template-columns: 1fr 1fr;
  }

  .grid-rows-2 {
    grid-template-columns: 1fr 1fr;
  }

  .grid-template-cols-auto {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .grid-template-rows-auto {
    grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
  }

  .gap-0 {
    gap: 0;
  }

  .flex {
    display: flex;
  }

  .flex-cols {
    flex-direction: column;
  }

  label {
    text-transform: uppercase;
  }

  .pw-input {
    padding: 8px;
    height: 12px;
  }

  .mbe-1 {
    margin-block-end: 8px;
  }

  .mbe-2 {
    margin-block-end: 16px;
  }

  .mbe-3 {
    margin-block-end: 24px;
  }

  .mbe-4 {
    margin-block-end: 32px;
  }

  .border {
    border: 1px solid #ccc;
  }

  .p-2 {
    padding: 16px
  }

  .text-lg {
    font-size: 24px;
  }

  button {
    border: none;
    padding: 0;
    margin: 0;
    background: transparent;
  }
`;
