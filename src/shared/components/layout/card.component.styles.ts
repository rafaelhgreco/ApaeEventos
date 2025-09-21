import { theme } from './../../../theme.helpers';
import styled from '@emotion/native';
import { Container } from '../../../base';
import { formatSize } from '../../../utils/format-size.utils';

export type Size = 'small' | 'medium' | 'large';

const sizeWidth = {
  small: 200,
  medium: 380,
  large: 380,
};

const sizeHeight = {
  small: 100,
  medium: 120,
  large: 200,
};

const sizePadding = {
  small: theme.spacing('sm'),
  medium: theme.spacing('md'),
  large: theme.spacing('lg'),
};

interface ContentProps {
  backgroundColor?: string;
  size?: Size;
  width?: string | number;
  height?: string | number;
}

const Content = styled(Container.Flex)<ContentProps>`
  border-radius: ${theme.borderRadius('md')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor === 'foregroundBlack'
      ? theme.color('foregroundBlack')
      : theme.color('light')};
  padding: ${({ size = 'medium' }) => sizePadding[size]};

  width: ${({ size = 'medium', width }) =>
    width ? formatSize(width) : `${sizeWidth[size]}px`};

  height: ${({ size = 'medium', height }) =>
    height ? formatSize(height) : `${sizeHeight[size]}px`};
  max-width: 400px;
  max-height: 500px;
  box-shadow: 0px 4px 6px #181818;
  elevation: 3;
`;

export const Styled = {
  Content,
};
