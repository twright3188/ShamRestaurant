import React from 'react';
import renderer from 'react-test-renderer';
import { InformationInput } from '../index';

describe('information inputs render', () => {
    it ('information input with icon renders correctly', () => {
        const tree = renderer.create(<InformationInput attributeName='name' iconName='ios-add' phoneIcon />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
