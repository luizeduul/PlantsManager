import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const KeyboardAdvoid = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const ViewHeader = styled.View`
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const ViewForm = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 27px;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${colors.gray};
  color: ${colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;

`;

export const TextTitle = styled.Text`
  font-size: 32px;
  text-align: center;
  line-height: 42px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin-top: 20px;
`;

export const ViewFooter = styled.View`
  margin-top: 40px;
  width: 100%;
  padding: 0 10px;
`;
