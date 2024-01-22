import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  blockStyles: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.cartItemBackgroundColor,
    borderBottomColor: 'rgba(34, 38, 36, 0.15)',
    borderBottomWidth: 1
  },
  infoBlockStyles: {
    flexDirection: 'column', 
    flex: 1,
  },
  titleBlockStyles: {
    flexDirection: 'row', 
  },
  titleStyles: {
    flexWrap: 'wrap',
    marginBottom: 7,
  },
  sizeStyles: {
    color: Colors.attributeTextColor,
    marginBottom: 7,
  },
  amountTextStyles: {
    width: 40, 
    textAlign: 'center'
  },
  priceTextStyles: {
    fontWeight: 'bold'
  },
  amountIconsBlock: {
    justifyContent: 'flex-end',
  },
  amountIconsStyles: {
    paddingTop: 13,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  sizePriceBlock: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between'
  },
  sizePriceBlockStyles: {
    flexDirection: 'column'
  },
  imageStyles: {
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    marginRight: 17
  }
});

export default styles;