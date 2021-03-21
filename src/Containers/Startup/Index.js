import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Platform,
  Linking,
} from 'react-native';
import {CardItem, Search} from '../../Components';

export default function Startup({...props}) {
  const [state, setState] = useState({
    data: [],
    users: [],
    searchKeyword: '',
  });

  const handleSetState = useCallback(
    data => setState(prev => ({...prev, ...data})),
    [],
  );

  const renderItem = useCallback(
    ({item}) => {
      return <CardItem {...item} searchKeyword={state.searchKeyword} />;
    },
    [state.searchKeyword],
  );

  const handleSearch = useCallback(
    searchKeyword => {
      if (searchKeyword.length == 0) {
        handleSetState({data: state.users, searchKeyword});
        return;
      }

      let keyword = searchKeyword.toLowerCase();
      const result = (keyword.includes(state.searchKeyword.toLocaleLowerCase())
        ? [...state.data]
        : [...state.users]
      ).filter(
        user =>
          user.name.toLowerCase().includes(keyword) ||
          user.title.toLowerCase().includes(keyword) ||
          user.email.toLowerCase().includes(keyword) ||
          user.address.toLowerCase().includes(keyword),
      );

      handleSetState({data: result, searchKeyword});
    },
    [state.users, state.data, state.searchKeyword],
  );

  const listenToDeepLink = useCallback(() => {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        handleDeepLinkEvent(url);
      });
    } else {
      Linking.addEventListener('url', ({url}) => handleDeepLinkEvent(url));
    }
  }, []);

  const handleDeepLinkEvent = useCallback(
    url => {
      try {
        const searchKeyword = url.split('://')[1].split('/')[1];

        if (state.users.length > 0) {
          handleSearch(searchKeyword);
        } else {
          handleSetState({searchKeyword});
        }
      } catch (e) {}
    },
    [state.user],
  );

  useEffect(() => {
    listenToDeepLink();

    const getUsers = async () => {
      const response = await fetch(
        'https://gist.githubusercontent.com/allaud/093aa499998b7843bb10b44ea6ea02dc/raw/c400744999bf4b308f67807729a6635ced0c8644/users.json',
      );
      const users = await response.json();
      handleSetState({users, data: users});
    };

    getUsers();
  }, []);

  useEffect(() => {
    if (state.users.length > 0 && state.searchKeyword.length > 0) {
      handleSearch(state.searchKeyword);
    }
  }, [state.users]);
  return (
    <View style={styles.root}>
      <Search defaultValue={state.searchKeyword} onChange={handleSearch} />

      <FlatList
        keyExtractor={item => item.email}
        data={state.data}
        style={styles.listContainer}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    flex: 1,
  },
  listContainer: {
    flex: 1,
    marginTop: 5,
  },
});
