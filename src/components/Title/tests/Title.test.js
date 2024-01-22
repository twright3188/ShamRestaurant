import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../index';

it('title render', () => {
    const tree = renderer.create(<Title>test</Title>).toJSON();
    expect(tree).toMatchSnapshot();
});