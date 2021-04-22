import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  container : {
    backgroundColor: colors.shape,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: 40,
    width: 76,
    marginHorizontal: 5
  },

  containerActive: {
    backgroundColor: colors.green_light,
  },

  buttonText : {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  buttonTextActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading
  }
})

export default styles;
