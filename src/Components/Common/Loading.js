import {ReactComponent as SvgLoading} from "../../Assets/svg/loading.svg"
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import styled, { keyframes } from "styled-components"
import { customColor } from "../../Config/Color"


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


const StyledSpinnerWrapper = styled.div`
    padding: 60px;
    background: ${customColor.mainColor02};
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        display: block;
        animation: ${rotate} 1s linear infinite;
        will-change: transform;
    }
`

const Loading = (props) => {
    const { loading = false } = props
    return (
        <Modal
            open={loading}
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',     
                padding: 0,
                margin: 0,   
            }}>
               <StyledSpinnerWrapper>
                    <SvgLoading width="66" height="66" />
                </StyledSpinnerWrapper>
            </Box>
        </Modal>
    )

}

export default Loading