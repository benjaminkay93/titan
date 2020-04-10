import React from 'react';
import { render } from 'test-utils';
import ScrollToTopOnMount from '../src/scroll-to-top-on-mount';

const component = (
  <ScrollToTopOnMount>
    <div data-testid="test-child" />
  </ScrollToTopOnMount>
);

test('can scroll to the top on mount', () => {
  const { rerender, getByTestId } = render(component);

  rerender(component);

  expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  expect(getByTestId('test-child')).toBeInTheDocument();
});

test('can retain page scroll position if url contains fragment', () => {
  window.location.hash = 'test-hash';

  const { rerender, getByTestId } = render(component);

  rerender(component);

  expect(window.scrollTo).not.toHaveBeenCalled();
  expect(getByTestId('test-child')).toBeInTheDocument();
});
