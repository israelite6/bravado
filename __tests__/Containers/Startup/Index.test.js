/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import IndexStartupContainer from '../../../src/Containers/Startup/index';

it('Startup component renders correctly', () => {
  const tree = renderer.create(<IndexStartupContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
