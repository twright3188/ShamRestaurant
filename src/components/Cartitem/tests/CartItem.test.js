import React from 'react';
import renderer from 'react-test-renderer';
import { CartItem } from '../index';

it('cart item renders correctly', () => {
    const amount = [1];
    const setAmount = () => {};
    const item = {
        id: 0,
        image: 'image',
        title: 'title',
        size: 'size',
        price: 'price'
    };
    const tree = renderer.create(<CartItem image={item.image} title={item.title} id={item.id} amount={amount} size={item.size} price={item.price} setAmount={setAmount} />).toJSON();
    expect(tree).toMatchSnapshot();
});
