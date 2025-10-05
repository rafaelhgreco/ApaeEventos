import React from 'react';
import { Card } from '../../../shared/components/layout/card.component';
import { Container, Typography } from '../../../base';
import { Styled } from './info-card.component.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export interface DashboardInfoCardProps {
  text: string;
  onButtonPress: () => void;
}

const InfoCard: React.FC<DashboardInfoCardProps> = ({
  text,
  onButtonPress,
}) => (
  <Card backgroundColor="light" size="small">
    <Container.Flex direction="row" justifyContent="flex-end">
      <Styled.Button onPress={onButtonPress} activeOpacity={0.7}>
        <Icon name="open-in-new" size={24} color="white" />
      </Styled.Button>
    </Container.Flex>
    <Container.Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
      marginTop={16}
    >
      <Typography.Text color="text">{text}</Typography.Text>
    </Container.Flex>
  </Card>
);

export { InfoCard };
