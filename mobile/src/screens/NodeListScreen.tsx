import React from 'react';
import { FlatList, Text } from 'react-native';

/**
 * Screen component displaying a list of registered relay nodes with their status information.
 *
 * @returns {React.JSX.Element} The rendered node list screen
 */
// TODO: list paired/registered nodes with battery/signal/last-seen status.
export function NodeListScreen(): React.JSX.Element {
  return <FlatList data={[]} renderItem={() => <Text />} />;
}
