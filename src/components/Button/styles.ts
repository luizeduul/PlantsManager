import {StyleSheet} from "react-native";
import colors from "../../styles/colors";
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginRight: 10,
    height: 56,
    paddingHorizontal: 10
  },
  textButton: {
    color: colors.white,
    fontFamily: fonts.heading,
  }
});

export default styles;
