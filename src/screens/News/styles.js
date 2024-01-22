import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  pageStyles: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    paddingTop: 8,
    backgroundColor: Colors.background
  },

  menueStyles: {
    flex: 1,
    width: '100%',
    height: '100%',
    
  },
  gridSkeletonPageStyles: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.background
  },  
  gridPageStyles: {
    flexDirection: 'row',
  },
  headerStyles: {
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    
  },  

  titleBlockStyles: {
    width: 'auto', 
    height: 'auto', 
    flexWrap: 'wrap'
  },
  headerTitleStyles: {
    flex: 4,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  chatIconStyles: {
    marginLeft: 24,
  },
  headerIconsBlockStyles: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  priceBlockStyles: {
    flexDirection: 'row', 
    alignItems: 'flex-end',
    marginBottom: 16
  },
  gridPriceBlockStyles: {
    width: '100%',
    flexDirection: 'column', 
  },
  buttonStyles: {
    flexDirection: 'row', 
    alignItems: 'flex-end'
  },
  listView: {
    flex: 1, 
    flexDirection: 'column'
  },
  gridView: {
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },
  modalStyles: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(34, 38, 36, 0.4)',
  },
  modalBlockStyles: {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    bottom: 0
  },
  settingsBlockStyles: {
    width: '100%', 
    minHeight: 56, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 15, 
    paddingVertical: 16, 
  borderBottomColor: Colors.textInputBorderColor, borderBottomWidth: 1,
  },
  settingsParagraphStyles: {
    fontWeight: 'bold'
  },
  settingsCancelStyles: {
    color: Colors.modalCancelColor
  },
  modalBottomStyles: {
    height: 70, 
    backgroundColor: '#fff'
  },
 
  titleStyles: {
    marginTop: 16,
    marginBottom: 8,
  },

  titleStylesRight: {
    marginTop: 22,
    marginBottom: 8,
    flexWrap: 'wrap',
    width: 'auto',
    marginRight:230
  },

});

export default styles;