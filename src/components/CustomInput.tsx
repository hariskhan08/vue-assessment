
import { styled } from '@egoist/vue-emotion'
import  Icon from './Icon.vue'
import {Button} from './Button'
import { Component, Vue } from 'vue-property-decorator'

const Container = styled('div')`
  border: 1px solid grey;
  border-radius: 2px;
`


const ButtonDiv = styled('div')`
border: 0;
outline: 0;
background-color: whitesmoke;
padding-top: 0.2rem;
padding-bottom: 0.2rem;


`
const CenterButton = styled('div')`
border: 0;
outline: 0;

  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
`

const InputDiv = styled('div')`
border:0;
outline: 0;
height:30px;


}
`
const SubDiv = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  & > input{
    border: 0;
    outline: 0;}
`

const ConditionalDiv = styled('div')`
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & .popuptext {
    width: 160px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    top: -164%;
    left: -40%;
    margin-left: -80px;

    &::after {
      content: '';
      position: absolute;
      top: 40%;
      left: 103%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
      transform: rotate(-90deg);
    }
  }
`

@Component({
  components: {
    Button,
    Icon,
    Container,
    ConditionalDiv,
    ButtonDiv,SubDiv
  },
  props: {
    type: String,
  },
})
export class CustomInput extends Vue {
  inputValue = '' as string
  validator = false as boolean
  focus = false as boolean
  hoverShow = false as boolean
  active = false as boolean
  defaultInput = 'page' as string
  currentIcon = 'paperclip' as string
  validation = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /0[0-9]{10}/,
    page: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
  }

  toggleFocus(value: boolean) {
    this.focus = value
    this.checkField()
  }
  setHoverState() {
    this.hoverShow = !this.hoverShow
  }
  setActiveState() {
    this.active = !this.active
  }
  setCurrentField(value: string, icon: string) {
    this.currentIcon = icon
    this.defaultInput = value
    this.hoverShow = !this.hoverShow
  }
  checkField() {
    if (this.validation['email'].test(this.inputValue)) {
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

  render(){
    return(
      <Container>
    <ConditionalDiv>
      {this.hoverShow && <span class="popuptext show" id="myPopup">
        <Icon
          setCurrentField={this.setCurrentField}
          name="envelope"
          text="Link To Email"
          value="email"
        />
        <Icon
          setCurrentField={this.setCurrentField}
          name="file"
          text="Link To Page"
          value="page"
        />
        <Icon
          setCurrentField={this.setCurrentField}
          name="mobile"
          text="Link To Phone"
          value="phone"
        />
      </span>}

<SubDiv>
{!this.focus &&<ButtonDiv>

<Button
   setState={this.setHoverState}
  // :class="hoverShow ? 'btn-active' : ''"
  iconName="copy"
/>
</ButtonDiv>}


      <input
        onFocus={()=>this.toggleFocus(true)}
        onKeyup={this.checkField}
        // v-model="inputValue"
        type="type"
        placeholder="URL"
      />

      {this.focus&&<CenterButton>

<Button
  setState={this.validator ? this.resetFocus() : null}
  // :class="validator ? 'validated' : null"
  iconName="check"
/>
</CenterButton>}
{(!this.focus&&this.validator)&&<CenterButton>

 <Button
  setState={this.resetState}
  // :class="validator ? 'validated' : null"
  iconName="trash"
/>
</CenterButton>}

{!this.focus &&<ButtonDiv>


<Button
  setState={this.setActiveState}
  // :class="active ? 'btn-active' : ''"
  iconName="external-link-alt"
/>
</ButtonDiv>}
{this.focus&& <ButtonDiv>

<Button
  setState={this.resetState}
  iconName="times"
/>
</ButtonDiv>}
</SubDiv>

    </ConditionalDiv>
  </Container>
    )
  }
}


