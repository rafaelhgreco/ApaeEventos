import { Styled } from './card.component.styles';

interface CardProps {
  children: React.ReactNode;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
}

const Card: React.FC<CardProps> = ({ children, backgroundColor, size }) => {
  return (
    <Styled.Content backgroundColor={backgroundColor} size={size}>
      {children}
    </Styled.Content>
  );
};

export { Card };
