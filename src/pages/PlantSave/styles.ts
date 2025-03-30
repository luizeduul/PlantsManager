import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Scroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
  },
}))``;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding: 50px 30px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.shape};
`;

export const PlantNameText = styled.Text`
  font-family: ${fonts.heading};
  font-size: 24px;
  color: ${colors.heading};
  margin-top: 15px;
`;

export const PlantAboutText = styled.Text`
  text-align: center;
  font-family: ${fonts.text};
  font-size: 17px;
  color: ${colors.heading};
  margin-top: 10px;
`;

export const Controller = styled.View`
  background-color: ${colors.white};
  padding: 20px 20px 20px 20px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${fonts.text};
  font-size: 17px;
  text-align: justify;
  color: ${colors.blue};
`;

export const AlertLabelText = styled.Text`
  text-align: center;
  font-family: ${fonts.complement};
  font-size: 12px;
  color: ${colors.heading};
  margin-bottom: 5px;
`;

export const ButtonChangeTime = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 40px 0;
`;

export const ButtonChangeTimeText = styled.Text`
  font-family: ${fonts.text};
  font-size: 24px;
  color: ${colors.heading};
`;
