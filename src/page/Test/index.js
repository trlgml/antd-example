import React from 'react'

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color:red
  }
  .Test {
    background-color: var(--bg-color);
    height: 100vh;
  }
`;

export const GlobalTeslaEngineStyle = createGlobalStyle`
  :root {
    --bg-color:blue
  }
  #root {
    font-size: 22px;
    margin-top: 140px;
    font-family: 'Universal Sans', 'Hiragino Sans';
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color:green
    }
    #root {
      margin-top: 540px;
    }
  }
`;

const isTeslaEngine = () => {
  const { userAgent } = window.navigator;
  if (/MicroMessenger/i.test(userAgent) && /TESLA_/i.test(userAgent)) {
    return true;
  }
  return false;
};

const Test = (props) => {
  const ua = window.navigator.userAgent
  
  return (
    <div className="Test">
      你好，hello
      <br/>
      {ua}
      <GlobalStyle />
      {isTeslaEngine() && <GlobalTeslaEngineStyle/>}
    </div>
  );
};



export default Test;