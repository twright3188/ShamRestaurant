import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  paragraphStyles: {
    fontFamily: Colors.FontBaseRegular,
    fontWeight: '400',
    flexWrap: 'wrap',
  }
});

function Paragraph(props) {
  const { children, fontSize, color, style } = props;

  return (
    <Text numberOfLines={2} style={[styles.paragraphStyles, { fontSize , color , lineHeight: fontSize * 1.5 }, style]}>
      {children}
    </Text>
  );
}

Paragraph.defaultProps = {
  fontSize: 16,
  children: '',
  color: Colors.text,
  style: {}
};

Paragraph.propTypes = {
  fontSize: PropTypes.number,
  children: PropTypes.node,
  color: PropTypes.string,
  style: PropTypes.shape({ root: PropTypes.string })
};

export default Paragraph;