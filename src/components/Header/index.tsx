import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import imgProfile from '../../assets/imageProfile.png';

import { Container, ViewName, UserNameText, ProfileImage, GreetingText } from './styles';

const Header: React.FC = () => {
  const [username, setUsername] = useState<string>();

  const loadStorageUser = useCallback(async() => {
    const user = await AsyncStorage.getItem('@plantmanager:user');
    setUsername(user || '');
  },[]);
  useEffect(() => {
    loadStorageUser();
  }, []);
  return (
    <Container>
      <ViewName>
        <GreetingText>Olá,</GreetingText>
        <UserNameText>{username}</UserNameText>
      </ViewName>
      <ProfileImage source={{uri: 'https://avatars.githubusercontent.com/u/7030943?v=4'}} />
    </Container>
  )
}

export default Header;
