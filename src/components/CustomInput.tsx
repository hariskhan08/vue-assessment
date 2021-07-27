
import { styled } from '@egoist/vue-emotion'
import  Icon from './Icon.vue'
import {Button} from './Button'
import { Component, Vue } from 'vue-property-decorator'

const Container = styled('div')`
  border: 1px solid grey;
  border-radius: 2px;
`


const ButtonDiv = styled('div')`
background-color: whitesmoke;
`


const SubDiv = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  & > input{
    border: 0;
    outline: 0;
  height: 27px}
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
      top: 35%;
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
  onSetCurrentField(value: string, icon: string) {
    console.log("in function", value, icon)
    this.currentIcon = icon
    this.defaultInput = value
    console.log('icon', this.currentIcon)
    this.hoverShow = !this.hoverShow
  }
  
  checkField(event:any) {
    
    if (this.validation[this.defaultInput].test(event.target.value)) {
      console.log("in if condition")
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
          onSetCurrentField={this.onSetCurrentField}
          name="envelope"
          text="Link To Email"
          value="email"
          hover={true}
        />
        <Icon
          onSetCurrentField={this.onSetCurrentField}
          name="file"
          text="Link To Page"
          value="page"
          hover={true}
        />
        <Icon
          onSetCurrentField={this.onSetCurrentField}
          name="mobile"
          text="Link To Phone"
          value="phone"
          hover={true}
        />
      </span>}

<SubDiv>
{!this.focus &&<ButtonDiv>

<Button
   setState={this.setHoverState}
  // :class="hoverShow ? 'btn-active' : ''"
  iconName={this.currentIcon}
/>
</ButtonDiv>}


      <input
        onFocus={()=>this.toggleFocus(true)}
        onKeyup={(event:any)=>{
       
          this.checkField(event)}
        }
        // v-model="inputValue"
        type="type"
        placeholder="URL"
      />

      {this.focus&&

<Button
  setState={this.validator ? this.resetFocus() : null}
  // :class="validator ? 'validated' : null"
  iconName="check"
/>
}
{(!this.focus&&this.validator)&&

 <Button
  setState={this.resetState}
  // :class="validator ? 'validated' : null"
  iconName="trash"
/>
}

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


