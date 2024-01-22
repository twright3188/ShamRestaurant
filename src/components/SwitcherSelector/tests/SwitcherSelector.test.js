import React from 'react';
import renderer from 'react-test-renderer';
import { SwitcherSelector } from '../index';

it('switcher render', () => {
    const tree = renderer.create(<SwitcherSelector options={[{ label: '1', value: 0 }]} thirdPerson/>).toJSON();
    expect(tree).toMatchSnapshot();
});