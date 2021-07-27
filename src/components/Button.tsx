import { Component, Vue } from 'vue-property-decorator'
import Icon from './Icon.vue'
import { Container } from '../styles/Button.styles'
@Component({
  components: {
    Icon,
    Container,
  },
  props: {
    iconName: String,
    error: Boolean,
    active: Boolean,
    setState: Function,
  },
})
export class Button extends Vue {
  render() {
    return (
      <Container>
        <button
          class={`${!this.$props.error ? 'errorClass' : ''} ${
            this.$props.active ? 'activeClass' : ''
          }`}
          onClick={this.setState}
        >
          <Icon name={this.iconName} />
        </button>
      </Container>
    )
  }
}
