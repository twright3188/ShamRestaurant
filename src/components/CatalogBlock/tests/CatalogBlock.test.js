import React from 'react';
import renderer from 'react-test-renderer';
import CatalogBlock from '../index';

it('catalog block renders correctly', () => {
    const tree = renderer.create(<CatalogBlock icon last onPress={() => {}}>Spring</CatalogBlock>).toJSON();
    expect(tree).toMatchSnapshot();
});