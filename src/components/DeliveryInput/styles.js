import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  blockStyles: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 16,
    backgroundColor: Colors.textInputBackgroundColor,
    borderBottomColor: Colors.textInputBorderColor,
    borderBottomWidth: 1,
  },
  valueStyles: {
    color: Colors.attributeTextColor
  }
});

export default styles;