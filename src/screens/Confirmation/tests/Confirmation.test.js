import React from 'react';
import renderer from 'react-test-renderer';
import Confirmation from '../index';

it('confirmation screen renders correctly', () => {
    const tree = renderer.create(<Confirmation />).toJSON();
    expect(tree).toMatchSnapshot(); 
});

