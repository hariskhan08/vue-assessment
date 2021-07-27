import { styled } from '@egoist/vue-emotion'

export const Container = styled('div')`
  .errorClass {
    background-color: orange;
  }
  .activeClass {
    background-color: grey;
  }
  & > button {
    outline: 0;
    border: 0;
    background-color: var(--button-background);
  }

  & > button:hover {
    background: grey;
  }
`
