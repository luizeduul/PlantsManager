import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ViewWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const TitleText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
  line-height: 34px;
`;
export const SubtitleText = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: ${fonts.text};
  padding: 0 10px;
  color: ${colors.heading};
`;

export const Image = styled.Image`
  height: ${Dimensions.get("window").width * 0.7};
`;

export const ButtonNext = styled.TouchableOpacity`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-right: 10px;
  height: 56px;
  width: 56px;
  padding: 0 10px;
`;
