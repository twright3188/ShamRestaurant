import React from 'react';
import renderer from 'react-test-renderer';
import { CatalogSkeletonCardsItem } from '../index';

it('', () => {
    const tree = renderer.create(<CatalogSkeletonCardsItem />).toJSON();
    expect(tree).toMatchSnapshot();
});