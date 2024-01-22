import React from 'react';
import renderer from 'react-test-renderer';
import CatalogCard from '../index';


const createTestProps = (props) => ({
    navigation: {
        navigate: jest.fn(),
        state: {
            params: {
                name: 'asd',
                discountPrice: 'ads',
            }
        },
        getParam: jest.fn(),
        stringify: jest.fn(),
        image: 'asdfghjk'
    },
    ...props
});

it ('catalog card renderes correctly', () => {
    const props = createTestProps({});
    const tree = renderer.create(<CatalogCard image='asdrftgyhjkm' {...props} />).toJSON();
    expect(tree).toMatchSnapshot(); 
});
