import React, { useState } from "react";
import * as Styled from './styles'
import { useAuth } from '../../../hooks/auth'
import { Link } from 'react-router-dom';
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import logoFood from '../../../assets/logo.svg'

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth() as { signIn: (data: { email: string, password: string }) => void };

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Styled.Container>

      <div>
        <img src={logoFood} alt="" />
      </div>
      <Styled.Form>
        <h2>Faça login</h2>
        <label htmlFor="email">Email</label>
        <Input
          hasBorder={true}
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Senha</label>
        <Input
          hasBorder={true}
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register"> Criar Conta </Link>
      </Styled.Form>

    </Styled.Container>
  );
}