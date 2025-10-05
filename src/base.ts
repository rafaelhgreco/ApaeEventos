import styled from '@emotion/native';

// Container

type FlexProps = {
  direction?: 'row' | 'column';
  row?: boolean;
  column?: boolean;
  gap?: number;
  padding?: number;
  marginTop?: number;
  margin?: number;
  width?: number | `${number}%`;
  spaceBetween?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
};

const Flex = styled.View<FlexProps>(
  ({
    direction,
    column,
    row,
    gap,
    padding,
    marginTop,
    margin,
    width,
    spaceBetween,
    center,
    left,
    right,
    alignItems,
    justifyContent,
  }) => ({
    flexDirection: direction
      ? direction
      : column
      ? 'column'
      : row
      ? 'row'
      : 'column',
    gap,
    ...(typeof padding === 'number' ? { padding } : {}),
    ...(typeof marginTop === 'number' ? { marginTop } : {}),
    ...(typeof margin === 'number' ? { margin } : {}),
    ...(typeof width === 'number' ||
    (typeof width === 'string' && /^\d+%$/.test(width))
      ? { width }
      : {}),
    justifyContent:
      justifyContent ??
      (spaceBetween
        ? 'space-between'
        : center
        ? 'center'
        : left
        ? 'flex-start'
        : right
        ? 'flex-end'
        : undefined),
    alignItems:
      alignItems ??
      (center
        ? 'center'
        : left
        ? 'flex-start'
        : right
        ? 'flex-end'
        : undefined),
  }),
);

const Main = styled.View({
  flex: 1,
});

export const Container = {
  Flex,
  Main,
};

// Typography

type TypographyProps = {
  fontSize?: number;
  color?: string;
  center?: boolean;
  left?: boolean;
  right?: boolean;
};

const Title = styled.Text<TypographyProps>(
  ({ fontSize = 24, color = '#2b2d42', center, left, right }) => ({
    fontSize,
    color,
    textAlign: center ? 'center' : left ? 'left' : right ? 'right' : undefined,
    fontWeight: 'bold',
  }),
);

const Text = styled.Text<TypographyProps>(
  ({ fontSize = 16, color = '#2b2d42', center, left, right }) => ({
    fontSize,
    color,
    textAlign: center ? 'center' : left ? 'left' : right ? 'right' : undefined,
  }),
);

const Label = styled.Text<TypographyProps>(
  ({ fontSize = 14, color = '#2b2d42', center, left, right }) => ({
    fontSize,
    color,
    textAlign: center ? 'center' : left ? 'left' : right ? 'right' : undefined,
    opacity: 0.7,
  }),
);

export const Typography = {
  Title,
  Text,
  Label,
};
