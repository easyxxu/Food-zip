import React from "react";
import ProfileForm from "../../components/Profile/ProfileForm";
import styled from "styled-components";
import Button from "../../components/Button";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 12px;
`;
const Title = styled.h1`
  font-size: 24px;
`;
const SubText = styled.p`
  font-size: 14px;
  color: #767676;
`;
export default function ProfileSetting() {
  return (
    <Container>
      <Title>프로필 설정</Title>
      <SubText>나중에 언제든지 변경할 수 있습니다.</SubText>
      <ProfileForm />
      <Button />
    </Container>
  );
}
