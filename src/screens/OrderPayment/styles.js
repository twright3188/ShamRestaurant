import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
    pageStyles: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    headerBlockStyles: {
        flexDirection: 'row', 
        backgroundColor: '#fff', 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        height: 'auto'
    },
    titleStyles: {
        width: '80%'
    },
    paypalProfileStyles: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 15
    },
    paypalImage: {
        width: 50, 
        height: 50, 
        borderRadius: 25
    },
    payButtonBlockStyles: {
        width: '100%',
        padding: 15
    },
    payButtonStyles: {
        height: 56
    },
   bottomBlockStyles: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    bottom: 20,
    zIndex: 2,

   }
});

export default styles;