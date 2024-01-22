import React from 'react';
import renderer from 'react-test-renderer';
import { CatalogSkeletonItem } from '../index';

it('skeleton catalog item renders correctly', () => {
    const tree = renderer.create(<CatalogSkeletonItem />).toJSON();
    expect(tree).toMatchSnapshot();
});