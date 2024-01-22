import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  pageStyles: {
    position: 'relative',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: Colors.catalogBackground,
    zIndex: 1,
  },
  imageStyles: {
    width: '100%',
    height: 375,
    marginBottom: 16
  },
  modalImageStyles: { 
    width: '100%',
    height: 375,
  },
  captionStyles: {
    paddingHorizontal: 15,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 'auto'
  },
  infoBlockStyles: {
    borderTopColor: Colors.catalogCardItemBorderColor,
    borderTopWidth: 1,
    borderBottomColor: Colors.catalogCardItemBorderColor,
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginTop: 16
  },
  infoBlockItemStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3
  },
  leftIconInfoBlockStyles: {
    width: 24,
    height: 24,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textInfoBlockStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    marginLeft: 16,
  },
  rightIconInfoBlockStyles: {
    marginLeft: 13,
  },
  bouquetInfoBlock: {
    paddingVertical: 16,
  },
  attributesBlockStyles: {
    marginBottom: 128
  },
  attributesItemBlockStyles: {
    flexDirection: 'row', 
    alignItems: 'center',

  },
  attributesBouquetStyles: {
    paddingBottom: 8
  },
  attributeNameStyles: {
    fontFamily: 'Helvetica',
    color: Colors.bouquetCardAttribureColor,
    fontWeight: 'bold'
  },
  attributeValueStyles: {
    fontFamily: 'Helvetica',
    color: Colors.bouquetCardAttribureColor,
  },
  zoomBuyBlock: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: 2,
  },
  buyButtonStyles: {
    width: '100%',
    backgroundColor: Colors.coloredButtonBackgroundColor,
    height: 56,
    borderRadius: 0
  },
  enlargeBlockStyles: {
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    alignItems: 'center', 
    height: 48, 
    width: '100%',
    shadowOffset: { width: 0, height: -2 }, 
    shadowRadius: 5,
    shadowOpacity: 1, 
    shadowColor: 'rgba(34, 38, 36, 0.15)',
    elevation: 10,
    paddingHorizontal: 15,
    paddingVertical: 14
  },
  enlargeTextStyles: {
    width: '60%',
  },
  enlargeBlockValueStyles: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    width: '40%', 
    height: 24
  },
  enlargeValueStyles: {
    flexDirection: 'row', 
    alignItems: 'center', 
    borderColor: Colors.greenText, 
    borderRadius: 16, 
    borderWidth: 1, 
    paddingVertical: 4, 
    paddingHorizontal: 8 
  },
  pressedButton: {
    backgroundColor: Colors.coloredButtonBackgroundColor,
  }
});

export default styles;