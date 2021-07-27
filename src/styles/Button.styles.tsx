import { styled } from '@egoist/vue-emotion'

export const Container = styled('div')`
  .errorClass {
    background-color: orange;
  }
  .activeClass {
    background-color: rgb(73, 76, 83);
  }
  & > button {
    outline: 0;
    border: 0;
    background-color: var(--button-background);
    padding: 10px;
  }

  & > button:hover {
    background: rgb(188, 194, 203);
  }
`
