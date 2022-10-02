import styled from 'styled-components'
import {ReactComponent as SvgSuccess} from "../../Assets/svg/success.svg"
import {ReactComponent as SvgFail} from "../../Assets/svg/fail.svg"
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

const StyledPane = styled.div`
  padding-top: 96px;
  @media (min-width: 900px) {
    padding-top: 86px;
  }
`

const StyledSuccessPane = styled(StyledPane)`
  color: ${customColor.mainColor02};
`

const StyledFailedPane = styled(StyledPane)`
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

const Payment = (props) => {
  const { setStep, siteCopy, error } = props
  const success = !!nftData.length

  const onReveal = () => {
    setStep(4)
  }

  const onRetry = () => {
    setStep(2)
  }

  return (
    <StyledContainer>
      {success && (
        <StyledSuccessPane>
          <SvgSuccess />
          <StyledMsg>{siteCopy.paymentSuccess}</StyledMsg>
          <StyledBtnWrapper onClick={onReveal}>
            <RoundBtn>
              <div style={{ padding: '12px 30px' }}>{siteCopy.revealNft}</div>
            </RoundBtn>
          </StyledBtnWrapper>
        </StyledSuccessPane>
      )}
      {!success && (
        <StyledFailedPane>
          <SvgFail />
          asdasd
          <StyledMsg>{error ? error : siteCopy.order_error_other}</StyledMsg>
          <StyledBtnWrapper onClick={onRetry}>
            <RoundBtn>
              <div style={{ padding: '12px 30px' }}>{siteCopy.tryAgain}</div>
            </RoundBtn>
          </StyledBtnWrapper>
        </StyledFailedPane>
      )}
    </StyledContainer>
  )
}

export default Payment