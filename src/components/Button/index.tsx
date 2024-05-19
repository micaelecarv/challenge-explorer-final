import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";
import React from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  loading?: boolean;
}
export function Button({ title, loading = false, ...rest }: ButtonProps) {

  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >     
    { loading ? "Carregando..." : title }
    </Container>
  );
}