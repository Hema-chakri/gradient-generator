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
  ListItem,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {firstColor: '#8ae323', secondColor: '#014f7b'}

  render() {
    const {firstColor, secondColor} = this.state

    return (
      <AppContainer data-testid="gradientGenerator">
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnorderedList>
          {gradientDirectionsList.map(eachDirection => (
            <ListItem>
              <GradientDirectionItem
                key={eachDirection.directionId}
                directionDetails={eachDirection}
              />
            </ListItem>
          ))}
        </UnorderedList>
        <Paragraph>Pick the colors</Paragraph>
        <ContainerOfColorContainer>
          <ColorContainer>
            <CustomPara>{firstColor}</CustomPara>
            <CustomInput type="color" />
          </ColorContainer>
          <ColorContainer>
            <CustomPara>{secondColor}</CustomPara>
            <CustomInput type="color" />
          </ColorContainer>
        </ContainerOfColorContainer>
        <Generate>Generate</Generate>
      </AppContainer>
    )
  }
}

export default GradientGenerator
