// eslint-disable-next-line no-unused-vars
import React from 'react';
import {action, } from '@storybook/addon-actions';
// eslint-disable-next-line no-unused-vars
import {Button, } from '@storybook/react/demo';

export default {
    title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>
    Hello Button
</Button>;

export const emoji = () => (
    <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
      😀 😎 👍 💯
        </span>
    </Button>
);
