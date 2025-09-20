import styled from '@emotion/native';
import { Animated } from 'react-native';
import { theme } from '../../../theme.helpers';

const AnimatedHeader = styled(Animated.View)<{
  height?: number;
  translateY?: any;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ height }) => height || 220}px;
  background-color: ${theme.color('secondary')};
  justify-content: center;
  align-items: center;
  z-index: 1;
  border-bottom-left-radius: ${theme.borderRadius('lg')};
  border-bottom-right-radius: ${theme.borderRadius('lg')};
`;

const AnimatedScrollView = styled(Animated.ScrollView)`
  background-color: ${theme.color('background')};
`;

export const Styled = {
  AnimatedHeader,
  AnimatedScrollView,
};
