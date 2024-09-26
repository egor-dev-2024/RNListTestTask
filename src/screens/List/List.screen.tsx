import {Text, FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {getListOfUsers} from '../../api/List';
import {ListItemComponent} from './components/ListItem/ListItem.component';
import {useAppDispatch} from '../../redux/hooks/defaultHooks';
import {saveListOfUsers} from '../../redux/slices/listSlice';
import {ITEMS_PER_PAGE} from '../../constants/pagination';
import {styles} from './List.styles';

export const ListScreen = () => {
  const dispatch = useAppDispatch();

  const {isError, data, refetch} = useQuery({
    queryKey: ['listData'],
    queryFn: getListOfUsers,
  });

  const [usersPerPage, setUsersPerPage] = useState(
    data?.slice(0, ITEMS_PER_PAGE),
  );
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // function, that simulates loading next page
  const loadMoreData = useCallback(() => {
    // Ensure there is more data to load
    if (!loading && usersPerPage.length < data.length && data) {
      setLoading(true);

      // Simulate loading data (or delay for better UX)
      setTimeout(() => {
        const newPage = page + 1;
        const newData = data.slice(0, newPage * ITEMS_PER_PAGE);

        setUsersPerPage(newData);
        setPage(newPage);
        setLoading(false);
      }, 1000); // Optional delay to show loading spinner
    }
  }, [data, page, usersPerPage]);

  // handler for list refresh
  const handleOnListRefresh = useCallback(() => {
    refetch();
    setUsersPerPage(data.slice(0, ITEMS_PER_PAGE));
    setPage(1);
  }, [data]);

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator />;
  };

  // saving data to redux store
  useEffect(() => {
    if (data) {
      setUsersPerPage(data.slice(0, ITEMS_PER_PAGE));
    }
    dispatch(saveListOfUsers(data));
  }, [data]);

  //logic for resfreshing every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleOnListRefresh();
    }, 30000);

    return () => {
      clearInterval(interval); // clear interval when pull-to-resfresh is trigered or component is unmounted
    };
  }, [handleOnListRefresh]); // this dependency is needed to check if pull-to-refresh/refresh is triggered

  return (
    <SafeAreaView style={styles.container}>
      <Text>List Of Registered User</Text>
      {usersPerPage?.length && !isError ? (
        <FlatList
          ListFooterComponent={renderFooter}
          contentContainerStyle={{width: 300}}
          data={usersPerPage}
          keyExtractor={item => item.id.toString()}
          refreshing={false}
          onRefresh={handleOnListRefresh}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.1}
          renderItem={({item}) => <ListItemComponent user={item} />}
        />
      ) : (
        <Text>There is no data, check later</Text>
      )}
    </SafeAreaView>
  );
};
