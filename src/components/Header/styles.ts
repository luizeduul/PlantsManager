import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  flex-direction: row;
  margin-top: 20px;
`;

export const ViewName = styled.View``;

export const GreetingText = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const UserNameText = styled.Text`
  font-size: 32px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  line-height: 40px;
`

export const ProfileImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;
