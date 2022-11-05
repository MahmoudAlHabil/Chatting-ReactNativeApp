import {StyleSheet} from 'react-native';
import typography from '../../utils/typography';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#EEEE',
  },
  headerContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImgHeader: {
    width: 45,
    height: 45,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  txtHeader: {
    marginHorizontal: '32%',
    fontSize: typography.L.semibold.fontSize,
    fontFamily: typography.XL.bold.fontFamily,
    color: colors.common.black,
  },
});
export default styles;
