import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity,Image } from 'react-native';
import Colors from '../../theme';
import GreenTitle from '../GreenTitle';
import FastImage from 'react-native-fast-image'

const styles = StyleSheet.create({
  blockStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 75,
    paddingLeft: 23,
    paddingRight: 100,
    borderBottomWidth: 1,
    borderBottomColor: Colors.skeleton
  },
  titleStyles: {
    color: Colors.catalogListItem
  }
});

function CatalogBlock(props) {
  const { children, icon, last, onPress, image } = props;

  return (
    <TouchableOpacity style={[styles.blockStyles, last ? { borderBottomWidth: 0 } : null]} onPress={onPress}>
      <GreenTitle fontSize={20} textColor={Colors.catalogListItem}>
        {children}
        {icon ? ' 🔥' : null}
      </GreenTitle>
     <FastImage style={{height:70,width:70}} source={{uri:image}} resizeMode='contain'/>
    </TouchableOpacity>
  );
}

CatalogBlock.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.bool,
  last: PropTypes.bool,
  onPress: PropTypes.func,
};

CatalogBlock.defaultProps = {
  children: '',
  icon: false,
  last: false,
  onPress: null
};

export default CatalogBlock;