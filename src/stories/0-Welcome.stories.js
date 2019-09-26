// eslint-disable-next-line no-unused-vars
import React from 'react';
import {linkTo, } from '@storybook/addon-links';

// eslint-disable-next-line no-unused-vars
import {Welcome, } from '@storybook/react/demo';

export default {
    title: 'Welcome',
};

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;

toStorybook.story = {
    name: 'to Storybook',
};
