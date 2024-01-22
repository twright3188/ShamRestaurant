import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  blockStyles: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 16,
    backgroundColor: Colors.textInputBackgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.textInputBorderColor,
    borderBottomWidth: 1,
  },
  textStyles: {
    width: '80%'
  },
  switcherStyles: {
    borderColor: Colors.switchBorderColor, 
    borderWidth: 1.5
  }
});

export default styles;