import React from 'react';
import renderer from 'react-test-renderer';
import { NewsItem, SkeletonNewsItem } from '../index';

describe('news item render', () => {
    it('news item render', () => {
        const tree = renderer.create(<NewsItem image='image'>children</NewsItem>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it ('skeleton news item render', () => {
        const tree = renderer.create(<SkeletonNewsItem buttonText='test' />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

