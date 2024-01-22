import React from 'react';
import renderer from 'react-test-renderer';
import CategoryListContainer from '../index';
import CatalogSkeleton from '../CatalogSkeleton';

describe('catalog tests', () => {
    it('catalog screen renders correctly', () => {
        const tree = renderer.create(<CategoryListContainer />).toJSON();
        expect(tree).toMatchSnapshot(); 
    });
    it('catalog loader renders correctly', () => {
        const tree = renderer.create(<CatalogSkeleton />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});