import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  pageStyles: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.deliveryBackgroundColor
  },
  titleStyles: {
    paddingHorizontal: 15,
    marginBottom: 16
  },
  switcherBlockStyles: {
    paddingHorizontal: 15, 
    paddingTop: 8, 
    backgroundColor: Colors.textInputBackgroundColor
  },
  switcherStyles: {
    borderWidth: 1, 
    borderColor: Colors.switcherSelectorColor, 
    borderRadius: 5,
  },
  sectionStyles: {
    height: 56,
    width: '100%',
    paddingHorizontal: 15,
    paddingBottom: 8,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  sectionCaptionStyles: {
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
  },
  buttonStyles: {
    width: '100%',
    backgroundColor: Colors.coloredButtonBackgroundColor,
    height: 56,
  },
  bottomButtonBlockStyles: {
    width: '100%', 
    paddingHorizontal: 15, 
    marginVertical: 32
  },
});

export default styles;