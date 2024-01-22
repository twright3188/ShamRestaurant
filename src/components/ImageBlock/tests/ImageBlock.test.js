import React from 'react';
import renderer from 'react-test-renderer';
import { DeliveryImageBlock } from '../index';

it ('image block renders correctly', () => {
    const tree = renderer.create(<DeliveryImageBlock image='image' title='title' result={40} />).toJSON();
    expect(tree).toMatchSnapshot();
});