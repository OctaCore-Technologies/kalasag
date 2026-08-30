import React from 'react';
import { FlatList, Text } from 'react-native';

// TODO: list paired/registered nodes with battery/signal/last-seen status.
export function NodeListScreen(): React.JSX.Element {
  return <FlatList data={[]} renderItem={() => <Text />} />;
}
