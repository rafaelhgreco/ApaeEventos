import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

type AdminOverviewListProps = {
  items: Array<{
    label: string;
    value: string | number;
  }>;
  loading?: boolean;
  error?: string;
};

export const AdminOverviewList: React.FC<AdminOverviewListProps> = ({
  items,
  loading,
  error,
}) => {
  if (loading) return <ActivityIndicator />;
  if (error) return <Text style={{ color: 'red' }}>{error}</Text>;

  return (
    <View>
      {items.map(item => (
        <View key={item.label} style={{ marginBottom: 8 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.label}:</Text>
          <Text>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};
