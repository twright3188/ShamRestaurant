import React from 'react';
import renderer from 'react-test-renderer';
import CatalogCard from '../index';

const createTestProps = (props) => ({
    navigation: {
        navigate: jest.fn(),
        state: {
            params: {
                name: '',
            }
        },
    },
    ...props
});

it('category list renders correctly', () => {
    const props = createTestProps({});
    const tree = renderer.create(<CatalogCard {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
});