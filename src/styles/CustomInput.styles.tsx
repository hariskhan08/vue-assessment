import { styled } from '@egoist/vue-emotion'

export const Container = styled('div')`
  body {
    font-family: sans-serif;
  }
  border: 1px solid grey;
  border-radius: 8px;
  overflow: hidden;

  &.validated {
    border-color: orange;
  }
  &.error {
    background-color: orange;
  }
`

export const SubDiv = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    border: 0;
    outline: 0;
    padding: 15px;
    height: 16px;
  }
`

export const InputDiv = styled('div')`
  border: 0;
  outline: 0;
`
export const ConditionalDiv = styled('div')`
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & .hoverState {
    &::after {
      content: '';
      position: absolute;
      top: 35%;
      left: 0%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: white transparent transparent transparent;
      transform: rotate(-90deg);
    }
  }
  & .popuptext {
    overflow: hidden;
    width: 130px;
    background-color: white;
    color: #fff;
    text-align: center;
    border-radius: 6px;

    position: absolute;
    z-index: 1;
    top: -47%;
    left: -19%;
    margin-left: -80px;
  }
`
