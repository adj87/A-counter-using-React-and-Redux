import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { normalize, fontFace } from 'polished';

import { Button, ButtonBar, Display } from '../components';

injectGlobal`
  ${normalize()};

  ${fontFace({
    fontFamily: 'system',
    fontStyle: 'normal',
    fontWeight: 300,
    localFonts: [
      '.SFNSText-Light',
      '.HelveticaNeueDeskInterface-Light',
      '.LucidaGrandeUI',
      'Ubuntu Light',
      'Segoe UI Light',
      'Roboto-Light',
      'DroidSans',
      'Tahoma',
    ],
  })};
`;

const StyledWrapper = styled.div`
  font-family: system;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const StyledBox = styled.div`
  width: 300px;
  max-width: 100%;
`;

const AppView = ({ counter }) => (
  <StyledWrapper>
    <StyledBox>
      <Display>{counter}</Display>
      <ButtonBar>
        <Button>-2</Button>
        <Button>-1</Button>
        <Button>Reset</Button>
        <Button>+1</Button>
        <Button>+2</Button>
      </ButtonBar>
    </StyledBox>
  </StyledWrapper>
);

AppView.defaultProps = {
  counter: 0,
};

AppView.propTypes = {
  counter: PropTypes.number,
};

export default AppView;
