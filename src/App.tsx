import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { CustomInput } from './components/CustomInput'
import { Button } from './components/Button'
import { createGlobalStyle } from '@egoist/vue-emotion'
import {
  Container,
  StylingContainer,
  SubContainer,
  TooltipItem,
  MainDiv,
} from './styles/App.styles'

@Component({
  components: {
    CustomInput,
    Button,
    Container,
    StylingContainer,
    SubContainer,
    TooltipItem,
    MainDiv,
  },
})
export class App extends Vue {
  backgroundColor = 'black'
  buttonBackground = 'lightgrey'
  buttonHover = 'grey'
  settingsDropdown = false

  toggleDropdown() {
    this.settingsDropdown = !this.settingsDropdown
  }
  render() {
    const GlobalStyle = createGlobalStyle`
    :root{
      --background:${this.backgroundColor};
      --button-background:${this.buttonBackground}
    }
`
    return (
      <MainDiv>
        <GlobalStyle />

        <StylingContainer>
          <Button setState={this.toggleDropdown} iconName='cog' error={true} />
          {this.settingsDropdown && (
            <SubContainer>
              <TooltipItem>
                <div>
                  <span>Background Colour:</span>
                  <input
                    type='color'
                    value={this.backgroundColor}
                    onChange={(event) => {
                      this.backgroundColor = event.target.value
                    }}
                  />
                </div>
                <div>
                  <span>Button Background:</span>
                  <input
                    type='color'
                    value={this.buttonBackground}
                    onChange={(event) => {
                      this.buttonBackground = event.target.value
                    }}
                  />
                </div>
                {/* <div>
          
          <span>
            Button Hover:
          </span>
          <input type="color" value={this.buttonHover} onChange={(event)=>{
          this.buttonHover = event.target.value
        }}/>
        </div> */}
              </TooltipItem>
            </SubContainer>
          )}
        </StylingContainer>

        <Container>
          <CustomInput />
        </Container>
      </MainDiv>
    )
  }
}
