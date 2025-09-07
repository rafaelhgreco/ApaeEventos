import React, { useRef } from 'react';
import {
  Animated,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Styled } from './parallax-scroll.view.styles';
import { Container, Typography } from '../../../base';

interface ParallaxProps {
  children?: React.ReactNode;
}

const HEADER_HEIGHT = 500;

const Parallax: React.FC<ParallaxProps> = ({ children }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT / 2],
    extrapolate: 'clamp',
  });

  return (
    <Container.Main>
      <Styled.AnimatedHeader
        height={HEADER_HEIGHT}
        translateY={headerTranslate}
      >
        {/* <Image
          source={require('../../../assets/logo.png')}
          style={{ width: 120, height: 120 }}
          resizeMode="contain"
        /> */}
        <Typography.Title color="#333">Sua imagem aqui!</Typography.Title>
      </Styled.AnimatedHeader>
      <Styled.AnimatedScrollView
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT, padding: 20 }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      >
        {children}
      </Styled.AnimatedScrollView>
    </Container.Main>
  );
};

export { Parallax };
