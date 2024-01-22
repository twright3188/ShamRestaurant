import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  pageStyles: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 15,
    backgroundColor: Colors.specialOfferBackgroundColor,
  },
  headerStyles: {
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  titleBlockStyles: {
    width: 'auto', 
    height: 'auto', 
    flexWrap: 'wrap'
  },
  titleStyles: {
    marginBottom: 8,
  },
  headerTitleStyles: {
    flex: 1,
  },
  headerIconsBlockStyles: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  chatsIconStyle: {
    marginLeft: 24,
  },
  priceBlockStyles: {
    flexDirection: 'row', 
    alignItems: 'flex-end',
    marginBottom: 16
  },
  buttonStyles: {
    flexDirection: 'row', 
    alignItems: 'flex-end'
  }
});

export default styles;