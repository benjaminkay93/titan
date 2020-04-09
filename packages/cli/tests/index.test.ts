import cli from '../src'

test('if not called with a valid prop, errors', () => {
  expect(() => cli(['someInvalidType'])).toThrowError("Please provide an argument of 'build', 'dev' or 'start'")
})
