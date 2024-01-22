import React from 'react';
import renderer from 'react-test-renderer';
import { SettingsPersonalInfoItem, SettingsAppInfoItem, SettingsDeleteInfoItem } from '../index';

describe('settings items render', () => {
    it('personal info item render', () => {
        const tree = renderer.create(<SettingsPersonalInfoItem />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it ('app info item render', () => {
        const tree = renderer.create(<SettingsAppInfoItem />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it ('delete info item render', () => {
        const tree = renderer.create(<SettingsDeleteInfoItem />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

