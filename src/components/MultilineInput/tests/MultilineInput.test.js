import React from 'react';
import renderer from 'react-test-renderer';
import { MultilineInput } from '../index';

it('multiline input render', () => {
    const tree = renderer.create(<MultilineInput />).toJSON();
    expect(tree).toMatchSnapshot();
});
