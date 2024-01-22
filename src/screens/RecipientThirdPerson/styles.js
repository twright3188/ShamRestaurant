import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  pageStyles: {
    flex: 1,
    backgroundColor: Colors.recipientDetailsBackgroundColor
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
  infoStyles: {
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 16,
    paddingBottom: 14
  },
  textColor: {
    color: Colors.attributeTextColor
  },
  bottomButtonBlockStyles: {
    marginTop: 10,
    position: 'absolute',
    width: '100%',
    bottom: 20,
    paddingHorizontal: 15,
    zIndex: -1
  },
  buttonStyles: {
    width: '100%',
    backgroundColor: Colors.coloredButtonBackgroundColor,
    height: 56,
  },
});

export default styles;