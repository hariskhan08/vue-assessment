import { styled } from '@egoist/vue-emotion'
export const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95vh; 
`
export const MainDiv = styled('div')`
background: var(--background);
  
`
export const StylingContainer = styled('div')`
position: relative;
  display: flex;
  width: 100%;
`
export const SubContainer = styled('div')`
position: absolute;
left: 0%;
top: 100%;


&::after{
  content: '';
      position: absolute;
      top: 0%;
      left: 25%;
      margin-left: 7px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
}
`

export const TooltipItem = styled('div')`
width: 160px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    top: 0%;
    left: -0%;
    margin-top: 6px

`