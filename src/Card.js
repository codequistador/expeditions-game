import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: ${(props) => `${props.color}`};
  position: relative;
`;

const Value = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  background-color: white;
  color: black;
  font-size: 18px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  left: 5px;
`;

class Card extends React.Component {
  render() {
    return (
      <Wrapper color={this.props.color}>
        <Value>{this.props.value}</Value>
      </Wrapper>
    );
  }
}

export default Card;
