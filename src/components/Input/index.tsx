import { InputHTMLAttributes } from 'react';
import { Container } from './styles';
import React from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasBorder?: boolean;
}

export function Input({ hasBorder, ...rest }: InputProps) {
  return (
    <Container hasBorder={hasBorder}>
      <input {...rest} />
    </Container>
  );
};