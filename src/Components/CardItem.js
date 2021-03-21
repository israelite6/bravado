import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import HighlightText from '@sanar/react-native-highlight-text';
import FastImage from 'react-native-fast-image';

/**
 *
 * @param {string} email
 * @param {string} address
 * @param {string} name
 * @param {string} title
 * @param {string} avatar
 * @param {string} searchKeyword
 * @returns
 */

export default class CardItem extends React.PureComponent {
  render() {
    const {name, email, address, title, avatar, searchKeyword} = this.props;

    return (
      <View style={styles.root}>
        <View>
          <HighlightText
            style={styles.headerStyle}
            highlightStyle={styles.highlightStyle}
            searchWords={[searchKeyword || '']}
            textToHighlight={name}
          />
          <HighlightText
            style={styles.textStyle}
            highlightStyle={{backgroundColor: 'yellow'}}
            searchWords={[searchKeyword || '']}
            textToHighlight={email}
          />
          <HighlightText
            style={styles.textStyle}
            highlightStyle={{backgroundColor: 'yellow'}}
            searchWords={[searchKeyword || '']}
            textToHighlight={title}
          />
          <HighlightText
            style={styles.textStyle}
            highlightStyle={{backgroundColor: 'yellow'}}
            searchWords={[searchKeyword || '']}
            textToHighlight={address}
          />
        </View>
        <FastImage source={{uri: avatar}} style={styles.avatar} />
      </View>
    );
  }
}

CardItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  searchKeyword: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 7,
    marginTop: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  },
  highlightStyle: {
    backgroundColor: '#FFFA86',
  },
  headerStyle: {
    fontWeight: '600',
    fontSize: 18,
  },
  textStyle: {
    fontWeight: '600',
    fontSize: 13,
    paddingTop: 5,
  },
  avatar: {
    backgroundColor: '#C4C4C4',
    borderRadius: 4,
    height: 68,
    width: 68,
    resizeMode: 'cover',
  },
});
