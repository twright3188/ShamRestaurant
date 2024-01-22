import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  blockStyles: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    paddingHorizontal: 15, 
    paddingVertical: 16, 
    borderBottomColor: Colors.textInputBorderColor,
    borderBottomWidth: 1,
  },
  datePickerStyles: {
    width: 175, 
    height: 24, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});

export default styles;