import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Docco } from "../index"

describe('My Component', () => {
  it('displays the url', async () => {
    render(<Docco url="https://api.docco.io/openapi.json" />);
    const content = screen.findByText('https://api.docco.io/openapi.json');
    expect(content).toBeTruthy();
  });

  it('displays the default theme', async () => {
    render(<Docco url="https://api.docco.io/openapi.json" />);
    const content = screen.findByText("light");
    expect(content).toBeTruthy();
  });
});
