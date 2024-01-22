import React from 'react';
import renderer from 'react-test-renderer';
import { CartListItem } from '../index';

it('cart list item renders correctly', () => {
    const tree = renderer.create(<CartListItem>children</CartListItem>).toJSON();
    expect(tree).toMatchSnapshot();
});