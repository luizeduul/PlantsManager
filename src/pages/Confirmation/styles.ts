import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const TitleText = styled.Text`
  font-size: 22px;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.heading};
  line-height: 38px;
  margin-top: 15px;
`;

export const SubTitleText = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  text-align: center;
  color: ${colors.heading};
  line-height: 38px;
  padding: 0 2.5px;
`;

export const ViewFooter = styled.View`
  width: 100%;
  padding: 0 25px;
  margin-top: 20px;
`;
