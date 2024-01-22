import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Paragraph from '../Paragraph';
import styles from './styles';
import Colors from '../../theme';

export const ZoomBlock = (props) => {
    const { onPress, isPressed, value } = props;

    return (
        <TouchableOpacity style={isPressed ? [styles.enlargeValueStyles, styles.pressedButton] : styles.enlargeValueStyles} onPress={onPress}>
            <Paragraph fontSize={11} color={isPressed ? Colors.coloredButtonText : Colors.greenText}>{value}</Paragraph>
        </TouchableOpacity>
    );
};

ZoomBlock.propTypes = {
    onPress: PropTypes.func,
    isPressed: PropTypes.bool,
    value: PropTypes.string,
};

ZoomBlock.defaultProps = {
    onPress: null,
    isPressed: false,
    value: '',
};
