import React from 'react';
import { FlatList } from 'react-native';
import useAuthorized from '../../hooks/useAuthorized';
import ReviewItemWithActions from './ReviewItemWithActions';
import ItemSeparator from '../ItemSeparator';

function MyReviews() {
  const { data, fetchMore } = useAuthorized(true);
  if (!data) {
    return null;
  }

  const reviewNodes = data.reviews.edges.map(edge => edge.node);

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItemWithActions {...item}/>}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
    />
  );
}

export default MyReviews;
