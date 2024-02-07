import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  Heading,
  Paragraph,
  UnorderedList,
  CustomPara,
  ColorContainer,
  CustomInput,
  ContainerOfColorContainer,
  Generate,
  ResponsiveContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }

  onGenerate = () => {
    const {firstColor, secondColor, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${firstColor}, ${secondColor}`,
    })
  }

  render() {
    const {
      activeGradientDirection,
      firstColor,
      secondColor,
      gradientValue,
    } = this.state

    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <UnorderedList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionDetails={eachDirection}
                clickGradientDirectionItem={this.clickGradientDirectionItem}
                isActive={activeGradientDirection === eachDirection.value}
              />
            ))}
          </UnorderedList>
          <Paragraph>Pick the colors</Paragraph>
          <ContainerOfColorContainer>
            <ColorContainer>
              <CustomPara>{firstColor}</CustomPara>
              <CustomInput
                type="color"
                value={firstColor}
                onChange={this.onChangeFirstColor}
              />
            </ColorContainer>
            <ColorContainer>
              <CustomPara>{secondColor}</CustomPara>
              <CustomInput
                type="color"
                value={secondColor}
                onChange={this.onChangeSecondColor}
              />
            </ColorContainer>
          </ContainerOfColorContainer>
          <Generate onClick={this.onGenerate}>Generate</Generate>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
