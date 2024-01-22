import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
    catalogCardsItemStyles: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 150,
        height:170,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 1,
        shadowOpacity: 0.2,
        shadowColor: Colors.skeletShadowColor,
        borderRadius: 16,
        backgroundColor: '#fff',
        marginBottom: 16,
        elevation: 1,
        marginTop:10,
        marginRight:10
      },
      gridCatalogCardsItemStyles: {
        flex: 1,
        // position: 'relative',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minWidth: '40%',
        maxWidth: '50%',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 1,
        shadowOpacity: 0.2,
        shadowColor: Colors.skeletShadowColor,
        borderRadius: 16,
        backgroundColor: '#fff',
        marginBottom: 16,
        elevation: 1,
        flexWrap: 'wrap',
        marginHorizontal: 5,
      },
      catalogCardsItemImageBlockStyles: {
        width: '100%',
        height: 100,
        borderTopRightRadius: 16, 
        borderTopLeftRadius: 16, 
        overflow: 'hidden'
      },
      gridCatalogCardsItemImageBlockStyles: {
        width: '100%',
        height: 168,
        borderTopRightRadius: 16, 
        borderTopLeftRadius: 16, 
        overflow: 'hidden'
      },
      catalogCardsItemInfoBlockStyles: {
        padding: 16,
        maxWidth: '100%',
      },
      gridCatalogCardsItemInfoBlockStyles: {
        padding: 16,
        maxWidth: '100%',
      }
});

export default styles;