import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background};
`;

export const ViewHeader = styled.View`
  padding: 0 30px;
`;

export const TitleText = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const SubtitleText = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  color: ${colors.heading};
  line-height: 20px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: "small",
  color: colors.green,
})`
  margin: 30px 0;
`;

export const styles = StyleSheet.create({
  environmentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
  plants: {
    flex: 1,
  },
});
