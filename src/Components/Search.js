import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDebouncedCallback} from 'use-debounce';

/**
 *
 * @param {string} defaultValue
 * @param {*} onChange - callback function for search
 * @returns
 */
export default function Search({defaultValue, onChange, ...props}) {
  const debounced = useDebouncedCallback(
    // function
    value => {
      onChange(value);
    },
    // delay in ms
    300,
  );
  return (
    <View style={styles.root}>
      <Icon name="search1" size={12} style={styles.icon} />
      <TextInput
        style={styles.textInput}
        defaultValue={defaultValue}
        onChangeText={debounced}
      />
    </View>
  );
}

Search.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  icon: {
    color: '#B3B3B3',
    paddingRight: 9,
  },
  textInput: {
    flexGrow: 1,
    fontSize: 14,
    paddingVertical: 0,
  },
});
