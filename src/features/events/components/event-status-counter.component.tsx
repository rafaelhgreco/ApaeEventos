import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { Styled } from './event-status-counter.component.styles';
import { Container } from '../../../base';

type EventStatusCounterItem = {
  label: string;
  value: number;
};

type EventStatusCounterProps = {
  total: number;
  items: EventStatusCounterItem[];
  loading?: boolean;
  error?: string;
};

export const EventStatusCounter: React.FC<EventStatusCounterProps> = ({
  total,
  items,
  loading,
  error,
}) => {
  if (loading) return <ActivityIndicator />;
  if (error) return <Text style={{ color: 'red' }}>{error}</Text>;

  return (
    <Container.Flex center marginTop={40}>
      <Styled.Total>Total: {total}</Styled.Total>
      <Styled.StatusRow>
        {items.map(item => (
          <Styled.StatusItem key={item.label}>
            <Styled.StatusValue>{item.value}</Styled.StatusValue>
            <Styled.StatusLabel>{item.label}</Styled.StatusLabel>
          </Styled.StatusItem>
        ))}
      </Styled.StatusRow>
    </Container.Flex>
  );
};
