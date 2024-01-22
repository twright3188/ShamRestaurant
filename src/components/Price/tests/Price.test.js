import React from 'react';
import renderer from 'react-test-renderer';
import { ActivePrice, OldPrice } from '../index';

describe('price items render', () => {
    it('active price render', () => {
        const tree = renderer.create(<ActivePrice price='$40' />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it ('old price render', () => {
        const tree = renderer.create(<OldPrice price='$50' />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

