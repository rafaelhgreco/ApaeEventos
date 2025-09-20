import styled from '@emotion/native';

// Container

type FlexProps = {
  column?: boolean;
  row?: boolean;
  gap?: number;
  padding?: number;
  marginTop?: number;
  margin?: number;
  spaceBetween?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
};

const Flex = styled.View<FlexProps>(
  ({
    column,
    row,
    gap,
    padding,
    marginTop,
    margin,
    spaceBetween,
    center,
    left,
    right,
  }) => ({
    flexDirection: column ? 'column' : row ? 'row' : 'column',
    gap,
    ...(typeof padding === 'number' ? { padding } : {}),
    ...(typeof marginTop === 'number' ? { marginTop } : {}),
    ...(typeof margin === 'number' ? { margin } : {}),
    justifyContent: spaceBetween
      ? 'space-between'
      : center
      ? 'center'
      : left
      ? 'flex-start'
      : right
      ? 'flex-end'
      : undefined,
    alignItems: center
      ? 'center'
      : left
      ? 'flex-start'
      : right
      ? 'flex-end'
      : undefined,
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
