import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../index';

it('button renders correctly', () => {
    const tree = renderer.create(<Button>View bouquets</Button>).toJSON();
    expect(tree).toMatchSnapshot();
});