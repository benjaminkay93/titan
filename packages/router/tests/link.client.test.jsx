import React from 'react';
import { StaticRouter } from 'react-router';
import { render } from 'test-utils';
import { Link, RouteProvider } from '../src';

jest.mock('react-router-dom', () => ({
  Link: ({ children, ...props }) => <mock-react-router-link {...props}>{children}</mock-react-router-link>
}));

test('can render a relative link that matches a route exactly', () => {
  const { element, getByTestId } = render(
    <StaticRouter context={{}}>
      <RouteProvider routes={[{ path: '/foo', allowClientSideLink: true }]}>
        <Link url="/foo">
          <span data-testid="test-child" />
        </Link>
      </RouteProvider>
    </StaticRouter>
  );

  expect(element.tagName).toBe('MOCK-REACT-ROUTER-LINK');
  expect(element).toHaveAttribute('to', '/foo');
  expect(getByTestId('test-child')).toBeInTheDocument();
});

test('can render a relative link that matches a route with path parameters', () => {
  const { element, getByTestId } = render(
    <StaticRouter context={{}}>
      <RouteProvider routes={[{ path: '/foo/:id', allowClientSideLink: true }]}>
        <Link url="/foo/123">
          <span data-testid="test-child" />
        </Link>
      </RouteProvider>
    </StaticRouter>
  );

  expect(element.tagName).toBe('MOCK-REACT-ROUTER-LINK');
  expect(element).toHaveAttribute('to', '/foo/123');
  expect(getByTestId('test-child')).toBeInTheDocument();
});

test('can render a relative link that matches a route ignoring the query string', () => {
  const { element, getByTestId } = render(
    <StaticRouter context={{}}>
      <RouteProvider routes={[{ path: '/foo', allowClientSideLink: true }]}>
        <Link url="/foo?bar=456">
          <span data-testid="test-child" />
        </Link>
      </RouteProvider>
    </StaticRouter>
  );

  expect(element.tagName).toBe('MOCK-REACT-ROUTER-LINK');
  expect(element).toHaveAttribute('to', '/foo?bar=456');
  expect(getByTestId('test-child')).toBeInTheDocument();
});

test('can render a relative link that does not match a route', () => {
  const { element, getByTestId } = render(
    <RouteProvider routes={[{ path: '/foo', allowClientSideLink: true }]}>
      <Link url="/bar">
        <span data-testid="test-child" />
      </Link>
    </RouteProvider>
  );

  expect(element.tagName).toBe('A');
  expect(element).toLinkTo('/bar');
  expect(getByTestId('test-child')).toBeInTheDocument();
});

test('can handle multiple wildcard routes', () => {
  const { element, getByTestId } = render(
    <RouteProvider
      routes={[
        {
          path: '/foo/:id',
          allowClientSideLink: true
        },
        {
          path: '/bar/:id',
          allowClientSideLink: true
        }
      ]}
    >
      <Link url="/bar/123">
        <span data-testid="test-child" />
      </Link>
    </RouteProvider>
  );

  expect(element.tagName).toBe('MOCK-REACT-ROUTER-LINK');
  expect(element).toHaveAttribute('to', '/bar/123');
  expect(getByTestId('test-child')).toBeInTheDocument();
});

test('can render a relative link that does not match a supported route', () => {
  const { element, getByTestId } = render(
    <RouteProvider routes={[{ path: '/foo' }]}>
      <Link url="/foo">
        <span data-testid="test-child" />
      </Link>
    </RouteProvider>
  );

  expect(element.tagName).toBe('A');
  expect(element).toLinkTo('/foo');
  expect(getByTestId('test-child')).toBeInTheDocument();
});
