import React from "react"
import PropTypes from "prop-types"
import styled, { injectGlobal } from "styled-components"
import { normalize, fontFace } from "polished"

import { Button, ButtonBar, Display } from "../components"

injectGlobal`
  ${normalize()};

  ${fontFace({
    fontFamily: "system",
    fontStyle: "normal",
    fontWeight: 300,
    localFonts: [
      ".SFNSText-Light",
      ".HelveticaNeueDeskInterface-Light",
      ".LucidaGrandeUI",
      "Ubuntu Light",
      "Segoe UI Light",
      "Roboto-Light",
      "DroidSans",
      "Tahoma",
    ],
  })};
`

const StyledWrapper = styled.div`
  font-family: system;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const StyledBox = styled.div`
  width: 300px;
  max-width: 100%;
`

const AppView = ({ counter, handleReset, handleAdd }) => (
  <StyledWrapper>
    <StyledBox>
      <Display>{counter || 0}</Display>
      <ButtonBar>
        <Button value="-2" onClick={handleAdd}>
          -2
        </Button>
        <Button value="-1" onClick={handleAdd}>
          -1
        </Button>
        <Button value="0" onClick={handleReset}>
          Reset
        </Button>
        <Button value="1" onClick={handleAdd}>
          +1
        </Button>
        <Button value="2" onClick={handleAdd}>
          +2
        </Button>
      </ButtonBar>
    </StyledBox>
  </StyledWrapper>
)

AppView.defaultProps = {
  counter: 0,
}

AppView.propTypes = {
  counter: PropTypes.number,
  handleReset: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
}

export default AppView
