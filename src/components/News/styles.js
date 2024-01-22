import { StyleSheet } from 'react-native';
import Colors from '../../theme';

const Styles = StyleSheet.create({
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
    // overflow: 'hidden',
    marginBottom: 16,
    elevation: 1,
  },
  skeletonStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    shadowOpacity: 0.2,
    shadowColor: Colors.skeletShadowColor,
    borderRadius: 16,
    backgroundColor: '#fff',
    padding: 15,
    // overflow: 'hidden',
    marginBottom: 16,
  },
  skeletonTitle: {
    backgroundColor: Colors.skeletonBackgroundColor,
    width: '100%',
    height: 24,
    marginBottom: 8
  },
  skeletonText: {
    backgroundColor: Colors.skeletonBackgroundColor,
    width: '100%',
    height: 120,
    marginBottom: 16
  },
  newsItemImageBlockStyles: {
    width: '100%',
    height: 300,
    borderTopRightRadius: 16, 
    borderTopLeftRadius: 16, 
    overflow: 'hidden'
  },
  newsItemInfoBlockStyles: {
    padding: 15,
    paddingTop: 0,
    maxWidth: '100%'
  },
  newsItemSkeletonImageBlockStyles: {
    alignItems: 'center', 
    justifyContent: 'center', 
    borderBottomColor: Colors.skeletonBorderBottomColor
  },
  newsItemSkeletonImageStyles: {
    width: 50, 
    height: 50, 
  }
});

export default Styles;