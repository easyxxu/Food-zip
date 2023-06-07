import React from "react";
import styled from "styled-components";
const ButtonStyle = styled.button`
  background-color: #629678;
  border-radius: 44px;
  width: 322px;
  padding: 13px 108px;
  color: #ffffff;
`;

export default function Button() {
  return <ButtonStyle>감귤마켓 시작하기</ButtonStyle>;
}
