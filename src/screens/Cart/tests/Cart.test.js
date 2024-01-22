import React from 'react';
import renderer from 'react-test-renderer';
import CartContainer from '../index';
import EmptyCart from '../EmptyCart';

const createTestProps = (props) => ({
    navigation: {
        navigate: jest.fn()
    },
    ...props
});

describe('cart snapshots', () => {
    it('cart container renders correctly', () => {
        const props = createTestProps({});
        const tree = renderer.create(<CartContainer {...props} />).toJSON();
        expect(tree).toMatchSnapshot(); 
    });
    it('empty cart renders correctly', () => {
        const props = createTestProps({});
        const tree = renderer.create(<EmptyCart {...props} />).toJSON();
        expect(tree).toMatchSnapshot(); 
    });
});
