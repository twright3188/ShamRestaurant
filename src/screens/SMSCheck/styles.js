import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  pageStyles: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.smsCheckBackgroundColor,
  },
  bodyStyles: {
    paddingHorizontal: 15 
  },
  titleStyles: {
    marginBottom: 24
  },
  infoTextStyles: {
    color: Colors.attributeTextColor,
    marginBottom: 28
  },
  phoneTextStyles: {
    color: Colors.attributeTextColor
  },
  phoneValueStyles: {
    fontWeight: 'bold'
  },
  phoneBlockStyles: {
    flexDirection: 'row'
  },
  phoneCheckInputsBlockStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24
  },
  inputsMarkup: {
    width: 192,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputStyles: {
    width: 26,
    // height: 44,
    borderBottomColor: 'rgba(34, 38, 36, 0.15)',
    borderBottomWidth: 1,
    fontSize: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  bottomButtonBlockStyles: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 2,
  },
  buyButtonStyles: {
    width: '100%',
    backgroundColor: Colors.coloredButtonBackgroundColor,
    height: 56,
    borderRadius: 0
  },
  changePhoneNumberStyles: {
    marginBottom: 24, 
    color: Colors.activeIcon, 
    fontWeight: '500'
  },
  sendCodeStyles: {
    color: Colors.activeIcon, 
    fontWeight: '500'
  },
  buttonsBlockStyles: {
    alignItems: 'center', 
    marginTop: 40
  }
});

export default styles;