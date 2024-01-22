import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  blockStyles: {
    width: '100%',
    flexDirection: 'row', 
    paddingHorizontal: 15, 
    paddingVertical: 16,
    backgroundColor: Colors.cartItemBackgroundColor,
    borderBottomColor: Colors.textInputBorderColor,
    borderBottomWidth: 1,
  },
  imageStyles: {
    width: 80, 
    height: 80, 
    borderRadius: 40,
    marginRight: 16
  },
  textBlockStyles: {
    justifyContent: 'center'
  },
  attributeStyles: {
    color: Colors.totalFieldColor,
    fontWeight: 'bold'
  },
  resultStyles: {
    fontWeight: 'bold'
  }
});

export default styles;