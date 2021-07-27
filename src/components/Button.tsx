  // <button @click="setState">
  //   <Icon :iconName="iconName" />
  // </button>

import { Component, Vue } from 'vue-property-decorator'
import Icon from './Icon.vue'
import { styled } from '@egoist/vue-emotion'

const Container = styled('div')`
& > button{
  outline:0;
  border:0
}
& > button:active{
  background: red;
}
`


@Component({
  components: {
    Icon,
    Container
  },
  props: {
    iconName: String,
    setState: Function
  },
})
export class Button extends Vue {
  
  render() {

    return <Container>
<button  onClick={this.setState}>
    <Icon name={this.iconName} />
  </button>

    </Container>
  }
}
