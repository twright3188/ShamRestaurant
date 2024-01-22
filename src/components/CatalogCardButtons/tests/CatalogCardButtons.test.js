import React from 'react';
import renderer from 'react-test-renderer';
import { BuyButton, DetailsButton } from '../index';

describe('catalog card buttons renders correctly', () => {
    it('buy button renders correctly', () => {
        const tree = renderer.create(<BuyButton text='Buy' />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('details button renders correctly', () => {
        const tree = renderer.create(<DetailsButton text='Details' />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});