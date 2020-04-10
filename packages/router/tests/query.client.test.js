import { getQueryParam, setQueryParams } from '../src/query';

test('getQueryParam helper returns undefined when no search string is provided', () => {
  expect(getQueryParam()).toBeUndefined();
});

test('getQueryParam helper parses a querystring', () => {
  expect(getQueryParam('?foo=bar', 'foo')).toEqual('bar');
});

test('getQueryParam helper does not return duplicate values for the same key', () => {
  expect(getQueryParam('?foo=bar&foo=baz', 'foo')).toEqual('bar');
});

test('getQueryParam returns all params if no lookup key is given', () => {
  expect(getQueryParam('?foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
});

test('getQueryParam returns undefined if given search param is not present in search', () => {
  expect(getQueryParam('?foo=bar', 'baz')).toBeUndefined();
});

test('getQueryParam returns null if given search param is present but no value is given', () => {
  expect(getQueryParam('?foo', 'foo')).toBeNull();
});

test('setQueryParams sets a query string in a url', () => {
  window.history.pushState = jest.fn();
  setQueryParams('?foo=bar', { foo: 'bazz', foo2: 'bazz2' });
  expect(window.history.pushState).toHaveBeenCalledWith({ path: '/?foo=bazz&foo2=bazz2' }, '', '/?foo=bazz&foo2=bazz2');
});
