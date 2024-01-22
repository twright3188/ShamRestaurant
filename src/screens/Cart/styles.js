import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../theme';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  pageStyles: {
    position: 'relative',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.background,
    padding: 15,
    zIndex: 1,
  },
  cartPageStyles: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.background,
  },
  headerStyles: {
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    marginBottom: 80
  },
  cartHeaderStyles: {
   
  },
  headerTitleStyles: {
    flex: 1,
  },
  imageBlockStyles: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textBlockStyles: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 16
  },
  buttonBlockStyles: {
    position: 'absolute',
    width: '100%',
    bottom: 24,
    paddingHorizontal: 15,
    zIndex: 2
  },
  buttonStyles: {
    width: '100%',
    backgroundColor: Colors.coloredButtonBackgroundColor,
    height: 56,
  },
  wrapper: {
    flex: 1
  },
  carouselContainer: {
    height: 'auto',
    width,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 24
  },
  captionHeaderStyles: {
    padding: 15, 
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 9
  },
  defaultHeaderStyles: {
    width: 'auto'
  },
  cartListItemText: {
    width: 100,
    color: Colors.totalFieldColor, 
    fontWeight: 'bold'
  },
  promocodeStyles: {
    marginBottom: 28 
  },
  recommendsBlockStyles: {
    width: '100%', 
    padding: 15, 
    marginTop: 9
  },
  bottomButtonBlockStyles: {
    width: '100%', 
    paddingHorizontal: 15, 
    marginBottom: 20
  },
  textInputStyles: {
    width: '60%',
    color: Colors.attributeTextColor, 
    fontSize: 14
  },
  promocodeFieldStyles: {
    fontWeight: 'bold'
  },
  totalFieldStyles: {
    color: Colors.totalFieldColor
  }
});

export default styles;