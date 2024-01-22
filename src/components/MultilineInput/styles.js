import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  blockStyles: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 14,
    backgroundColor: Colors.textInputBackgroundColor,
    flexWrap: 'wrap',
    borderBottomColor: Colors.textInputBorderColor,
    borderBottomWidth: 1,
  },
  labelIconBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default styles;