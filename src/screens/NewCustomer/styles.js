import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  pageStyles: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.cartBackgroundColor,
  },
  headerStyles: {
    paddingHorizontal: 15,
    marginBottom: 24,
    width: '100%',
  },
  inputsBlockStyles: {
    width: '100%'
  },
  infoStyles: {
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 16
  },
  textColor: {
    color: Colors.attributeTextColor
  },
  bottomButtonBlockStyles: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: -1
  },
  buyButtonStyles: {
    width: '100%',
    backgroundColor: Colors.coloredButtonBackgroundColor,
    height: 56,
    borderRadius: 0
  }

});

export default styles;