import React from "react";
// import * as datav from '@jiaminghi/data-view-react'
// console.log(datav);
import { Loading, FullScreenContainer } from '@jiaminghi/data-view-react'


export default (props) => {
  return (
    <div id="Loading">
      <FullScreenContainer>
        <Loading>Loading...</Loading>
      </FullScreenContainer>
    </div>
  );
};