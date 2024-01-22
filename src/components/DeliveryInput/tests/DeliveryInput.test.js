import React from 'react';
import renderer from 'react-test-renderer';
import { DeliveryInput } from '../index';

it ('delivery input renders correctly', () => {
    const tree = renderer.create(<DeliveryInput attributeName='name' value='test' />).toJSON();
    expect(tree).toMatchSnapshot();
});