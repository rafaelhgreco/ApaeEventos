import styled from '@emotion/native';
import { theme } from '../../../theme.helpers';

const Total = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${theme.color('foregroundLight')};
  margin-bottom: ${theme.spacing('md')};
  text-align: center;
`;

const StatusRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 0 ${theme.spacing('sm')};
`;

const StatusItem = styled.View`
  align-items: center;
  justify-content: flex-start;
  width: 33.33%;
  margin-bottom: ${theme.spacing('md')};
  min-height: 60px;
`;

const StatusValue = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.color('foregroundDefault')};
`;

const StatusLabel = styled.Text`
  font-size: 14px;
  color: ${theme.color('foregroundLight')};
  margin-top: 2px;
  text-align: center;
`;

export const Styled = {
  Total,
  StatusRow,
  StatusItem,
  StatusValue,
  StatusLabel,
};
