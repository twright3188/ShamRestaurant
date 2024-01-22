import React from 'react';
import renderer from 'react-test-renderer';
import { ButtonIcon } from '../index';
import Colors from '../../../theme';

it('icon renders correctly', () => {
    const tree = renderer.create(<ButtonIcon name='ios-person' size={30} color={Colors.activeIcon} />).toJSON();
    expect(tree).toMatchSnapshot();
});