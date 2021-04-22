import React from 'react';

import imgProfile from '../../assets/imageProfile.png';

import { Container, ViewName, UserNameText, ProfileImage, GreetingText } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <ViewName>
        <GreetingText>Olá,</GreetingText>
        <UserNameText>Luiz Edu</UserNameText>
      </ViewName>
      <ProfileImage source={{uri: 'https://avatars.githubusercontent.com/u/7030943?v=4'}} />
    </Container>
  )
}

export default Header;
