import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import {OpenAPI} from '../../src/stories/Docco.stories'

OpenAPI.play = async ({ canvasElement }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);
  
    await canvas
      .getAllByText('Docco rocks')
      .forEach((element: HTMLElement) => expect(element).toBeInTheDocument);
  
    const element = canvas.queryByTestId('input-card-title');
  
    // Check if element exist since it can not be null
    if (element) {
      await userEvent.clear(element);
      await userEvent.type(element, 'http://specfile.com');
      await expect(canvas.getAllByText('http://specfile.com')).toBeInTheDocument;
    }
  };