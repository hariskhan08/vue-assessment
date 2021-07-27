


import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { styled } from '@egoist/vue-emotion'
import {CustomInput} from './components/CustomInput'
const Container = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`

@Component({
  components: {
    CustomInput,
    Container,
  },
})
export class App extends Vue {
  render() {
    return (
      <Container>
    <CustomInput />
  </Container>
    )
  }
}