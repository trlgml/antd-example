import React from "react";
import { actions as demoActions } from "@/ducks/demo";
import { connect } from "react-redux";
import { Button } from "antd";

const Demo = (props) => {
  const { demoAsync, list } = props
  return (
    <div className="demo">
      <Button
        type='primary'
        onClick={() => {
          demoAsync()
        }} >
        异步加载
      </Button>
      {
        list.map((item) => {
          return (
            <div key={item.id}>{item.name}</div>
          )
        })
      }
    </div>
  );
};

const mapStateToProps = ({ demo }) => {
  return {
    list: demo.list,
  };
};

const mapDispatchToProps = {
  demoAsync: demoActions.demoAsync,
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);