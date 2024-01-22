import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from '../index';

it('paragraph render', () => {
    const tree = renderer.create(<Paragraph>test</Paragraph>).toJSON();
    expect(tree).toMatchSnapshot();
});


