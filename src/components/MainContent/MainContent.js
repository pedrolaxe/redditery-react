import React from "react";

import { MainContentStyle } from './MainContentStyle.js';

const MainContent = ({ children }) => {
  return (
    <MainContentStyle>
      {children}
    </MainContentStyle>
    
);
}

export default MainContent;