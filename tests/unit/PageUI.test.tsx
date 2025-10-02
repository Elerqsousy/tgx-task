import React from 'react';

import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import PageUI from '../../src/components/ui/PageUI';

describe('PageUI', () => {
  test('renders children correctly', () => {
    const testText = 'Test Content';
    const { container } = render(
      <PageUI>
        <div>{testText}</div>
      </PageUI>
    );

    expect(container.textContent).toBe(testText);
  });

  test('applies correct styling classes', () => {
    const { container } = render(
      <PageUI>
        <div>Content</div>
      </PageUI>
    );

    const pageWrapper = container.firstChild as HTMLElement;
    expect(pageWrapper).toHaveClass(
      'px-[2%]',
      'py-[2vw]',
      'flex-1',
      'overflow-y-auto'
    );
  });
});
