import React from "react";
import Card from "./card";
import styled from "styled-components";

const HikesWrapper = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;
`;

const Hike = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 132px;
  margin: 8px;
  padding: 8px;
`;

class Hikes extends React.Component {
  render() {
    return <HikesWrapper>{renderHikeDropZones(this.props)}</HikesWrapper>;
  }
}

const renderHikeDropZones = (props) =>
  props.hikes.map((hike, i) => {
    return <Hike>{hike.color}</Hike>;
  });

export default Hikes;
