import styled from 'styled-components'
import {ReactComponent as SvgSuccess} from "../../Assets/svg/success.svg"
import {ReactComponent as SvgFail} from "../../Assets/svg/fail.svg"
import { useState } from 'react'
import RoundBtn from '../../Components/Button/RoundBtn'
import { customColor } from '../../Config/Color'

const StyledContainer = styled.div`
  position: relative;
  padding-top: 37px;
  max-width: 100%;
  margin: auto;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  @media (min-width: 900px) {
    width: 386px;
  }
`

const StyledSuccessPane = styled.div`
  color: ${customColor.mainColor02};
`

const StyledFailedPane = styled.div`
  color: ${customColor.textColor04};
`

const StyledMsg = styled.div`
  padding: 30px 66px 66px 66px;
`
const StyledBtnWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  margin: auto;
`

const Payment = () => {
  const [paymentStatus, setPaymentStatus] = useState('')

  const onReveal = () => {
    console.log('onReveal')
  }

  const onRetry = () => {
    console.log('onRetry')
  }

  return (
    <StyledContainer>
      {paymentStatus === 'success' && (
        <StyledSuccessPane>
          <SvgSuccess />
          <StyledMsg>Payment success, Thank You!</StyledMsg>
          <StyledBtnWrapper onClick={onReveal}>
            <RoundBtn>
              <div style={{ padding: '12px 30px' }}>Reveal my AiR CITIZEN!</div>
            </RoundBtn>
          </StyledBtnWrapper>
        </StyledSuccessPane>
      )}
      {paymentStatus === 'failed' && (
        <StyledFailedPane>
          <SvgFail />
          <StyledMsg>Sorry, Error message.</StyledMsg>
          <StyledBtnWrapper onClick={onRetry}>
            <RoundBtn>
              <div style={{ padding: '12px 30px' }}>Try Again</div>
            </RoundBtn>
          </StyledBtnWrapper>
        </StyledFailedPane>
      )}
      
      
    </StyledContainer>
  )
}

export default Payment