/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../../src/Components/Search';

it('Avatar component renders correctly', () => {
  const tree = renderer.create(<Search onChange={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
