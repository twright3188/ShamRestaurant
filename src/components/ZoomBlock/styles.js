import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
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