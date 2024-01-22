import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  blockStyles: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
    width: '100%',
    backgroundColor: Colors.settingsListItemColor,
    paddingVertical: 16,
    paddingLeft: 15,
    paddingRight: 18,
    borderTopColor: Colors.settingsItemBorderColor,
    borderBottomColor: Colors.settingsItemBorderColor,
    borderTopWidth: 1,
    borderBottomWidth: 0,
  },
  itemNameStyles: {
    width: '50%',
    maxWidth: '100%',
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    flexWrap: 'wrap'
  },
  valueBlockStyles: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',  
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'right',
    paddingRight: 10
  },
  valueStyles: {
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    color: Colors.settingsValueColor,
    fontSize: 16
  },
  appBlockStyles: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
    width: '100%',
    backgroundColor: Colors.settingsListItemColor,
    paddingVertical: 16,
    paddingLeft: 15,
    paddingRight: 18,
    borderTopColor: Colors.settingsItemBorderColor,
    borderBottomColor: Colors.settingsItemBorderColor,
    borderTopWidth: 1,
    borderBottomWidth: 0,
    justifyContent: 'space-between',
   
  },
  appItemsStyles: {
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    width: 'auto',
  },
  deleteBlockStyles: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
    width: '100%',
    backgroundColor: Colors.settingsListItemColor,
    paddingVertical: 16,
    paddingLeft: 15,
    paddingRight: 18,
    borderTopColor: Colors.settingsItemBorderColor,
    borderBottomColor: Colors.settingsItemBorderColor,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  deleteItemsStyles: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.deleteInfoColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;