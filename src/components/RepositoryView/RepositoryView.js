import React from 'react';
import { useParams } from 'react-router-native';
import { FlatList } from 'react-native';
import useRepository from '../../hooks/useRepository';
import RepositoryItem from '../RepositoryItem';
import ItemSeparator from '../ItemSeparator';
import ReviewItem from '../ReviewItem';

function RepositoryView() {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository(id);

  if (!repository) {
    return null;
  }

  const reviewNodes = repository.reviews.edges.map(edge => edge.node);

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem {...item} title={item.user.username}/>}
      ListHeaderComponent={() => <RepositoryItem singleView {...repository}/>}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
    />
  );
}

export default RepositoryView;
