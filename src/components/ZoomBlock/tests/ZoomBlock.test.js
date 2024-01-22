import React from 'react';
import renderer from 'react-test-renderer';
import { ZoomBlock } from '../index';

it('zoom block render', () => {
    const tree = renderer.create(<ZoomBlock isPressed={false} onPress={() => {}} value='test' />).toJSON();
    expect(tree).toMatchSnapshot();
});