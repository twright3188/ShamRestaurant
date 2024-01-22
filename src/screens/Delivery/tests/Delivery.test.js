import React from 'react';
import renderer from 'react-test-renderer';
import Delivery from '../index';

const createTestProps = (props) => ({
    navigation: {
        navigate: jest.fn(),
        state: {
            params: {
                name: '',
                discountPrice: '',
            }
        },
    },
    ...props
});

it('delivery screen renders correctly', () => {
    const props = createTestProps({});
    const tree = renderer.create(<Delivery {...props} />).toJSON();
    expect(tree).toMatchSnapshot(); 
});

