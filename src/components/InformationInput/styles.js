import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  inputBlockStyles: {
    width: '100%',
    minHeight: 80,
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 16,
    backgroundColor: Colors.textInputBackgroundColor,
    borderBottomColor: Colors.textInputBorderColor,
    borderBottomWidth: 1,
    color: Colors.attributeTextColor,
    fontSize: 20,
  },
  inputStyles: {
    color: Colors.attributeTextColor,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'normal',
    paddingTop: 0,
  },
  inputMultilineStyles: {
    paddingTop: 28
  },
  switcherInputStyles: {
    paddingTop: 8,
    flexDirection: 'column'
  },
  switcherSelectorStyles: {
    borderWidth: 1, 
    borderColor: Colors.switcherSelectorColor, 
    borderRadius: 5,
  },
  labelPlaceholderBlockStyles: {
    flexDirection: 'column', 
    width: '80%'
  },
  placeholderStyles: {
    position: 'absolute',
    left: 0,
    top:  0,
    fontSize: 20,
    color: Colors.attributeTextColor,
  },
  labelStyle: {
    position: 'absolute',
    left: 0,
    top: -24,
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
  },
  touchableOpacityBlockStyles: {
    position: 'relative',
    width: 30, 
    height: 30, 
    justifyContent: 'center'
  },
  iconBlockStyles: {
    position: 'relative',
    justifyContent: 'center'
  },
  iconStyles: {
    position: 'absolute',
    alignItems: 'center',
    right: 0,
  }
});

export default styles;