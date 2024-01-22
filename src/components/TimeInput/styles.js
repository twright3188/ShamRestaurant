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
  intervalStyles: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-end'
  },
  timePickerStyles: {
    width: 65, 
    height: 24, 
    justifyContent: 'center', 
    alignItems: 'center',
    overflow: 'visible',
  }
});

export default styles;