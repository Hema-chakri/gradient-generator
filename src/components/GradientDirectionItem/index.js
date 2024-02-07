// Write your code here

import {CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails} = props
  const {displayText} = directionDetails

  return (
    <>
      <CustomButton type="button">{displayText}</CustomButton>
    </>
  )
}

export default GradientDirectionItem
