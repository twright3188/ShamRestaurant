import React from 'react';
import renderer from 'react-test-renderer';
import GreenTitle  from '../index';

it ('green title renders correctly', () => {
    const tree = renderer.create(<GreenTitle>test</GreenTitle>).toJSON();
    expect(tree).toMatchSnapshot();
});