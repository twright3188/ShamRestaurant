import { StyleSheet } from 'react-native';
import Colors from './theme';

const styles = StyleSheet.create({
    headerBlockStyles: {
        flexDirection: 'row',
    },
    iosBackImageStyles: {
        marginLeft: 18, 
        marginRight: 7
    },
    androidBackImageStyles: {
        marginTop: 2, 
        marginLeft: 18, 
        marginRight: 8
    },
    headerTextStyles: {
        color: Colors.greenText, 
        fontSize: 16
    }
});

export default styles;