import type React from 'react';
import { Container } from '../../components/container';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';

type MainTempleteProps = {
  children: React.ReactNode;
};

export function MainTemplete({ children }: MainTempleteProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
