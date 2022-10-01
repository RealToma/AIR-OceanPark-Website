import styled from 'styled-components'
import { customColor } from "../../Config/Color"
import klook from "../../Assets/image/kklook.png"
import nft from "../../Assets/image/nft.png"
import {ReactComponent as SvgTick} from "../../Assets/svg/tick.svg"
import {ReactComponent as SvgIncrease} from "../../Assets/svg/increase.svg"
import {ReactComponent as SvgDecrease} from "../../Assets/svg/decrease.svg"
import { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import get from 'lodash/get'
import axios from "axios"
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import RoundBtn from '../../Components/Button/RoundBtn'
import Loading from '../../Components/Common/Loading'
import { useNavigate } from "react-router-dom";


const StyledContainer = styled.div`
  position: relative;
  padding-top: 37px;
  max-width: 100%;
  margin: auto;
  @media (min-width: 900px) {
    width: 386px;
  }
`

const StyledKlookWrapper = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`
const StyledKlookBtn = styled.div`
  border: 1px solid ${customColor.mainColor02};
  border-radius: 6px;
  padding: 12px 14px;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
`
const StyledKlookBtnContent = styled.div`
  display: flex;
  align-items: center;
  color: ${customColor.mainColor02};
`

const StyledCheckoutPane = styled.div`
  padding-top: 20px;
  position: relative;
`

const StyledCheckoutContent = styled.div`
  background-color: white;
  border-radius: 16px;
  position: relative;
  filter: drop-shadow(4px 4px 21px rgba(0, 0, 0, 0.1));
  overflow: hidden;
`

const StyledCheckoutContentPadding = styled.div`
  padding: 16px 16px 20px 16px;
`

// const StyledCheckoutContentBubble = styled.div`
//   font-weight: 700;
//   font-size: 14px;
//   color: white;
//   border-radius: 100%;
//   background-color: ${customColor.mainColor02};
//   line-height: 160%;
//   transform: rotate(15deg);
//   width: 96px;
//   height: 96px;
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   top: 0;
//   right: -10px;
// `

const StyledNFT = styled.div`
  width: 150px;
  margin: auto;
`

const StyleAmountControlPane = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 14px;
`

const StyledDecreasePane = styled.div`
  cursor: pointer;
`
const StyledIncreasePane = styled.div`
  cursor: pointer;
`
const StyledTotalPane = styled.div`
  text-align: center;
  padding-top: 14px;
`

const StyledTotalLabel = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
`
const StyledTotalValue = styled.div`
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
  color: ${customColor.mainColor02};
`

const StyledConsentPane = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  padding-top: 17px;
`

const StyledKlookConsentPane = styled(StyledConsentPane)`
  padding-top: 30px;
`

const StyledConsentBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background-color: ${customColor.backColor03};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const StyledAmountValue = styled.div`
  width: 60px;
  border: 1px solid #EFEFEF;
  border-radius: 4px;
  text-align: center;
  margin: 0 18px;
  padding: 0 12px;
  font-weight: 600;
  font-size: 26px;
  line-height: 31px;
  color: ${customColor.mainColor02};
`

const StyledPaypalWrapper = styled.div`
  position: relative;
  padding: 15px 16px 0 16px;
  min-height: 161px;
`

const StyledPaypalMask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 200;
`

const StyledNextBtnWrapper = styled.div`
  margin-top: 10px;
`

const StyledNextBtn = styled.div`
  padding: 12px 0;
  cursor: pointer;
`

const StyledKlookRedemptionTxt = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 160%;
  color: ${customColor.mainColor02};
`

const StyledKlookRedemptionCodeWrapper = styled.div`
  background-color: ${customColor.backColor03};
  border-radius: 6px;
  margin-top: 18px;
  input {
    width: 100%;
    border: 0;
    text-align: center;
    background-color: transparent;
    padding: 15px 0;
    &:focus{
        outline: none;
    }
  }
`

const Checkout = (props) => {
  const navigate = useNavigate()
  const { setStep, setNftData, siteCopy } = props
  const token = localStorage.getItem("token")
  const [amount, setAmount] = useState(1)
  const [agreement, setAgreement] = useState(false)
  const [klookAgreement, setKlookAgreement] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showKlookDialog, setShowKlookDialog] = useState(false)
  const [klookCode, setKlookCode] = useState('')
  const [redeemProcessing, setRedeemProcessing] = useState(false)
  const [loading, setLoading] = useState(false)

  const redeemable = (!redeemProcessing && !!klookAgreement && !!klookCode)
  // const klookCodeRef = useRef()
  // const price = 666
  const price = 1
  const total = price * amount
  const maxAmount = 5

  const increase = () => {
    if (amount < maxAmount) setAmount(amount + 1)
  }

  const descrease = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
    currency: "HKD",
    locale: 'en_HK',
  }

  const onCreatePaypalOrder = async (data, actions) => {
    // if (data.paymentSource === 'paypal') {
    //   showPaymentModal()
    // }
    
    if (total >= price && amount > 0 && amount <= maxAmount) {
      return await axios.post(
        process.env.REACT_APP_CITIZEN_URL + "/createOrder",
          {
            productName: 'OP_HW_2022',
            paymentType: 'paypal',
            unit: amount,
            price: total,
          },
          {
            headers: {
              token,
            },
          }
        ).then(({ data }) => {
          if (get(data, 'success')) {
            if (get(data, 'result.orderID')) {
              return actions.order.create({
                purchase_units: [
                    {
                        invoice_id: `${data.result.orderID}`,
                        reference_id: `${data.result.orderID}`,
                        amount: {
                            value: total,
                        },
                    },
                ],
              })
            } else {
              console.log('no order id')
            }
          } else {
            alert('soldout')
            // closePaymentModal()
          }
        })
    } else {
      alert('at least buy 1')
    }
  }

  const showPaymentModal = () => {
    setLoading(true)
  }

  const closePaymentModal = () => {
    setLoading(false)
  }

  const onApprovePaypal = async (data, actions) => {
    showPaymentModal()
    actions.order.capture().then((orderData) => {
      if (get(orderData, 'status') === 'COMPLETED') {
        console.log('done', orderData)
        const invoice_id = get(orderData, 'purchase_units[0].invoice_id')
        if (invoice_id) {
          checkOrder(invoice_id)
        } else {
          // console.log('invoice not found')
        }
      } else {
        console.log('order status is not completed')
      }
    })
  }

  const onChangeCode = (e) => {
    const value = get(e, 'target.value', '')
    if (value === '' || value.match(/^[0-9a-zA-Z]+$/)) {
      setKlookCode(value)
    }
  }

  const redeemByKlook = async () => {
    if (redeemable) {
      setRedeemProcessing(true)
      await axios.post(
        process.env.REACT_APP_CITIZEN_URL + "/redeem",
        {
          code: klookCode,
          couponID: process.env.REACT_APP_KLOOK_COUPON_ID,
        },
        {
          headers: {
            token,
          },
        }
      ).then(({ data }) => {
        if (get(data, 'success')) {
          setNftData(get(data, 'result.citizens', []))
        }
      })
      setStep(3)
      setRedeemProcessing(false)
    }
  }

  const checkOrder = async (invoice_id) => {
    const maxRetryCount = 30
    let retryCount = 0
    const fetch = () => {
      axios.get(
        process.env.REACT_APP_CITIZEN_URL + "/checkOrder",
        {
          params: {
            orderID: invoice_id,
          },
          headers: {
            token,
          },
        },
      ).then(({ data }) => {
        retryCount += 1
        const status = get(data, 'result.status', 0)
        if (status === 0) { // pending
          if (retryCount < maxRetryCount) {
            setTimeout(() => {
              fetch()
            }, 5000)
          }
        }
  
        if (status === 1) { // success
          console.log('success')
          setNftData(get(data, 'result.citizens', []))
          setStep(3)
        }
  
        if (status === 2) { // failed
          setStep(3)
        }
      })
    }
    if (invoice_id) {
      fetch()
    }
  }

  const onPaypalCancel = () => {
    closePaymentModal()
  }

  return (
    <StyledContainer>
      <StyledKlookWrapper onClick={() => {
        setShowModal(true)
        setShowKlookDialog(true)  
      }}>
        <StyledKlookBtn>
          <StyledKlookBtnContent>
            <div style={{width: '78px'}}>
              <img
                src={klook}
                width={"100%"}
                alt={""}
              />
            </div>
            <div style={{ paddingLeft: '13px' }}>{siteCopy.redeemHere}</div>
          </StyledKlookBtnContent>
        </StyledKlookBtn>
      </StyledKlookWrapper> 

      <StyledCheckoutPane>
        <StyledCheckoutContent>
          <StyledCheckoutContentPadding>
            <StyledNFT>
              <img src={nft} width="100%" alt="" />
            </StyledNFT>

            <StyleAmountControlPane>
              <StyledDecreasePane onClick={descrease}>
                <SvgDecrease />
              </StyledDecreasePane>
              <StyledAmountValue>x{amount}</StyledAmountValue>
              <StyledIncreasePane onClick={increase}>
                <SvgIncrease />
              </StyledIncreasePane>
            </StyleAmountControlPane>

            <StyledTotalPane>
              <StyledTotalLabel>{siteCopy.total}</StyledTotalLabel>
              <StyledTotalValue>HKD ${total}</StyledTotalValue>
            </StyledTotalPane>

            <StyledConsentPane>
              <StyledConsentBox onClick={() => setAgreement(!agreement)}>
                {agreement && (
                  <SvgTick />
                )}
              </StyledConsentBox>
              <div style={{ paddingLeft: '12px'}}>
                {siteCopy.agree}
                {"\u00a0"}
                <u style={{ cursor: "pointer" }} onClick={() => navigate('/tnc')}>{siteCopy.tnc}</u>
              </div>
            </StyledConsentPane>
          </StyledCheckoutContentPadding>
          <StyledPaypalWrapper>
            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons createOrder={onCreatePaypalOrder} onApprove={onApprovePaypal} forceReRender={[amount]} onCancel={onPaypalCancel} />
            </PayPalScriptProvider>
            {!agreement && (
              <StyledPaypalMask />
            )}
          </StyledPaypalWrapper>
        </StyledCheckoutContent>

        {/* <StyledCheckoutContentBubble>
          <div style={{ fontSize: '20px' }}>70%</div>
          <div>REMAIN</div>
        </StyledCheckoutContentBubble> */}
      </StyledCheckoutPane>

      <Modal
        open={showModal}
        onClose={() => {
          setShowModal(false)
          setShowKlookDialog(false)
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          {showKlookDialog && (
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                maxWidth: '70vw',
                bgcolor: 'background.paper',
                borderRadius: '20px',
                p: '22px 34px',
                textAlign: 'center',
            }}>
              <StyledKlookRedemptionTxt>{siteCopy.redemption}</StyledKlookRedemptionTxt>
              <StyledKlookRedemptionCodeWrapper>
                <input placeholder={siteCopy.myCode} onChange={onChangeCode} value={klookCode} maxLength="10" />
              </StyledKlookRedemptionCodeWrapper>
              <div>
                <StyledKlookConsentPane>
                  <StyledConsentBox onClick={() => setKlookAgreement(!klookAgreement)}>
                    {klookAgreement && (
                      <SvgTick />
                    )}
                  </StyledConsentBox>
                  <div style={{ paddingLeft: '12px'}}>
                    {siteCopy.agree}
                    {"\u00a0"}
                    <u style={{ cursor: "pointer" }} onClick={() => navigate('/tnc')}>{siteCopy.tnc}</u>
                  </div>
                </StyledKlookConsentPane>
          
                <StyledNextBtnWrapper>
                  <RoundBtn bgColor={redeemable ? customColor.mainColor02 : customColor.progressBar}>
                    <div onClick={redeemByKlook}>
                      <StyledNextBtn>
                        {siteCopy.next}
                      </StyledNextBtn>
                    </div>
                  </RoundBtn>
                </StyledNextBtnWrapper>
              </div>
            </Box>
          )}
        </>
      </Modal>
      <Loading loading={loading} />
    </StyledContainer>
  )
}

export default Checkout