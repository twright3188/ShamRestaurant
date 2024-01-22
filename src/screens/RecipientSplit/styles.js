import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  pageStyles: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.cartBackgroundColor,
    paddingHorizontal: 15,
  },
  headerBlockStyles: {
    width: '100%', 
    height: 112,
  },
  headerStyles: {
    marginBottom: 64,
  },
  buttonStyles: {
    height: 56,
    marginBottom: 32
  }
});

export default styles;