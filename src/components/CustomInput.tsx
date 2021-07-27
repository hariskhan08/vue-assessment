import Icon from './Icon.vue'
import { Button } from './Button'
import { Component, Vue } from 'vue-property-decorator'
import { Container, ConditionalDiv, SubDiv } from '../styles/CustomInput.styles'

@Component({
  components: {
    Button,
    Icon,
    Container,
    ConditionalDiv,
    SubDiv,
  },
  props: {
    type: String,
  },
})
export class CustomInput extends Vue {
  $refs!: {
    input: HTMLInputElement
    tooltip: HTMLSpanElement
  }

  listener(event: Event) {
    if (
      // eslint-disable-next-line operator-linebreak
      !this.$refs.tooltip ||
      (event.target && this.$refs.tooltip.contains(event.target))
    ) {
      return
    }
    this.hoverShow = false
  }

  mounted() {
    document.addEventListener('mousedown', this.listener.bind(this))
    document.addEventListener('touchstart', this.listener.bind(this))
  }

  unmounted() {
    document.removeEventListener('mousedown', this.listener.bind(this))
    document.removeEventListener('touchstart', this.listener.bind(this))
  }

  inputValue = '' as string
  validator = false as boolean
  focus = false as boolean
  hoverShow = false as boolean
  active = false as boolean
  defaultInput = 'url' as string
  currentIcon = 'paperclip' as string
  validation = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /0[0-9]{10}/,
    page: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
    url: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
  }

  toggleFocus(value: boolean) {
    this.focus = value
    this.$refs.input.focus()
  }
  setHoverState() {
    this.hoverShow = !this.hoverShow
  }
  setActiveState() {
    this.active = !this.active
  }
  onSetCurrentField(value: string, icon: string) {
    this.currentIcon = icon
    this.defaultInput = value
    this.hoverShow = !this.hoverShow
  }

  checkField(event: any) {
    this.inputValue = event.target.value
    if (this.validation[this.defaultInput].test(event.target.value)) {
      this.validator = true
      return
    }
    this.validator = false
  }
  resetState() {
    this.resetValue()
    this.resetFocus()
    this.resetValidator()
  }
  resetFocus() {
    this.focus = false
  }
  resetValue() {
    this.inputValue = ''
  }
  resetValidator() {
    this.validator = false
  }

  render() {
    return (
      <Container class={`${!this.validator && this.focus ? 'validated' : ''}`}>
        <ConditionalDiv>
          {this.hoverShow && (
            <span class='popuptext show' id='myPopup' ref='tooltip'>
              <Icon
                onSetCurrentField={this.onSetCurrentField}
                name='envelope'
                text='Link To Email'
                value='email'
                hover={true}
              />
              <Icon
                onSetCurrentField={this.onSetCurrentField}
                name='file'
                text='Link To Page'
                value='page'
                hover={true}
              />
              <Icon
                onSetCurrentField={this.onSetCurrentField}
                name='mobile'
                text='Link To Phone'
                value='phone'
                hover={true}
              />
            </span>
          )}

          <SubDiv>
            {!this.focus && (
              <Button
                setState={this.setHoverState.bind(this)}
                iconName={this.currentIcon}
                error={true}
              />
            )}

            <input
              onFocus={() => this.toggleFocus(true)}
              onKeyup={(event: any) => {
                this.checkField(event)
              }}
              value={this.inputValue}
              type='type'
              placeholder={this.defaultInput}
              ref='input'
            />

            {this.focus && (
              <Button
                setState={this.validator ? () => this.resetFocus() : () => {}}
                iconName='check'
                error={this.validator}
              />
            )}
            {!this.focus && this.validator && (
              <Button
                setState={this.resetState.bind(this)}
                iconName='trash'
                error={true}
              />
            )}

            {!this.focus && (
              <Button
                setState={this.setActiveState.bind(this)}
                iconName='external-link-alt'
                error={true}
                active={this.active}
              />
            )}
            {this.focus && (
              <Button
                setState={this.resetState.bind(this)}
                iconName='times'
                error={true}
              />
            )}
          </SubDiv>
        </ConditionalDiv>
      </Container>
    )
  }
}
