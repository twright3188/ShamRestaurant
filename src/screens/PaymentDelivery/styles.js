import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
    pageStyles: {
        flex: 1,
        backgroundColor: Colors.settingBackgroundColor,
        paddingHorizontal: 15,

      },
      headerStyles: {
        paddingBottom: 0,
        marginBottom: 24,
      },
      ticketStyles: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 1,
        shadowOpacity: 0.2,
        shadowColor: Colors.skeletShadowColor,
        borderRadius: 16,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 48,
        elevation: 1,
        marginBottom: 24
      },
      textBlockStyles: {
        marginBottom: 24
      },
      captionBlockStyles: {
          marginBottom: 16
      },
      titleStyles: {
          marginBottom: 8
      },
      paragraphStyles: {
        marginBottom: 16
      }
});

export default styles;