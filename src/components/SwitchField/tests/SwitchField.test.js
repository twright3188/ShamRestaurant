import React from 'react';
import renderer from 'react-test-renderer';
import { SwitchField } from '../index';

it('switch field render', () => {
    const tree = renderer.create(<SwitchField  text='test' value={false} onChange={() => {}}/>).toJSON();
    expect(tree).toMatchSnapshot();
});