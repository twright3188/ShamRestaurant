import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../index';

it ('header renders correctly', () => {
    const tree = renderer.create(<Header>test</Header>).toJSON();
    expect(tree).toMatchSnapshot();
});