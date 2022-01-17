import React, { useState } from "react";
import styled from "styled-components";

//다른거
const Title = () => {
  return <div>나의 부지런함에 칭찬해</div>;
};

//
const Lifecycle = () => {
  const [title, setTitle] = useState(false);
  const toggle = () => {
    setTitle(!title);
  };
  return (
    <All>
      <button onClick={toggle}>ON/OFF</button>
      {title && <Title />}
    </All>
  );
};

export default Lifecycle;

const All = styled.div`
  padding: 20px;
`;
