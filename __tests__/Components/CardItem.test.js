/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CardItem from '../../src/Components/CardItem';

it('Avatar component renders correctly', () => {
  const tree = renderer
    .create(
      <CardItem
        name="name"
        email="email"
        address="address"
        title="title"
        avatar="avatar"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
