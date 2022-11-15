import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Docco, Props } from '../';

export default {
  title: 'Docco',
  component: Docco,
} as Meta<typeof Docco>;

const TemplateComponent: StoryFn<typeof Docco> = (args) => <Docco {...args} />;
export const OpenAPI = TemplateComponent.bind({});
OpenAPI.args = {
  url: 'my fancy docs url',
  theme: 'light',
};

const TemplateWebComponent: StoryFn<typeof Docco> = (args) => <x-docco {...args}></x-docco>;
export const WC = TemplateWebComponent.bind({});
WC.args = {
  url: 'my fancy docs url',
  theme: 'light',
};

declare global {
  // eslint-disable-next-line no-unused-vars
  namespace JSX {
    // eslint-disable-next-line no-unused-vars
    interface IntrinsicElements {
      'x-docco': Props;
    }
  }
}
