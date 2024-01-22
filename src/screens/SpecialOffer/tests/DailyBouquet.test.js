import React from 'react';
import renderer from 'react-test-renderer';
import SpecialOfferContainer from '../index';

it('special offer screen renders correctly', () => {
    const tree = renderer.create(<SpecialOfferContainer />).toJSON();
    expect(tree).toMatchSnapshot(); 
});

