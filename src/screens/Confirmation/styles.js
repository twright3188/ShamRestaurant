import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  pageStyles: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    backgroundColor: Colors.confirmationBackgroundColor
  },
  messageStyles: {
    width: '100%',
    backgroundColor: Colors.confirmationMessageBackgroundColor,
    borderRadius: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowColor: Colors.shadowColor,
    shadowOpacity: 1,
    elevation: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 72,
    marginTop: 80
  },
  textStyles: {
    marginTop: 16
  },
  buttonStyles: {
    height: 56,
  }
});

export default styles;