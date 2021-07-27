import { styled } from '@egoist/vue-emotion'

export const Container = styled('div')`
  border: 1px solid grey;
  border-radius: 2px;

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
    height: 26px;
  }
`

export const ConditionalDiv = styled('div')`
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & .popuptext {
    width: 160px;
    background-color: white;
    color: #fff;
    text-align: center;
    border-radius: 6px;

    position: absolute;
    z-index: 1;
    top: -147%;
    left: -38%;
    margin-left: -80px;

    &::after {
      content: '';
      position: absolute;
      top: 35%;
      left: 103%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: white transparent transparent transparent;
      transform: rotate(-90deg);
    }
  }
`
