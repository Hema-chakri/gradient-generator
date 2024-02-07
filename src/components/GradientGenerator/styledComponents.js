// Style your elements here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #ffffff;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(${props => props.gradientValue});
`
export const Paragraph = styled.p`
  color: #ffffff;
`
export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`
export const CustomPara = styled.p`
  color: #ffffff;
`
export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CustomInput = styled.input`
  border: 1px solid #1e293b;
`

export const ContainerOfColorContainer = styled.div`
  display: flex;
`

export const Generate = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  border-radius: 5px;
`
export const ListItem = styled.li`
  list-style-type: none;
  margin-right: 20px;
`
