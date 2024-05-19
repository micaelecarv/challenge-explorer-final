import React from "react";
import * as Styled from './styles'
import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { api } from '../../../services/api';
import { Link, useNavigate } from "react-router-dom";
import { Input } from '../../../components/Input';
import { Button } from "../../../components/Button";
import logoFood from '../../../assets/logo.svg'

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Por favor, preencha todos os campos!')
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
  }

  return (
    <Styled.Container>
      <div>
        <img src={logoFood} alt="" />
      </div>

      <Styled.Form>
        <h2>Crie sua conta</h2>
        
        <label htmlFor="name">Seu nome</label>
        <Input
          placeholder="Exemplo: Maria da Silva"
          type="name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <Input
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          value={""}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <Input
          placeholder="No mínimo 6 caracteres"
          type="password"
          value={password}
          onClick={() => console.log('')}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          title="Criar conta"
          onClick={handleSignUp}
        />
        <Link to="/login">Já tenho uma conta</Link>
      </Styled.Form>
    </Styled.Container>
  );
}