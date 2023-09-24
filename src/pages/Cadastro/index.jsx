import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
// import { Badge } from '../../components/Badge';
import { Card } from '../../components/Card';
// import { ChatButton } from '../../components/ChatButton';
// import { HelpButton } from '../../components/HelpButton';
import { Input } from '../../components/Input';

export const Cadastro = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Card color={'#FFFFCC'}>
          <>
            <h1 className="title">Cadastro</h1>

            <div className="inputs">
              <Input name="Nome" type="text" />
              <Input name="Email" type="text" />
              <Input name="Senha" type="password" />
              {/* <Input name="Confirmar Senha" type="password" /> */}
            </div>

            <div className="buttons">
              <button className="cadastrar-button">
                Cadastrar
                {/* <Badge text="1" /> */}
              </button>
              <button className="voltar-button" onClick={() => navigate('/')}>
                Voltar
                {/* <Badge text="2" /> */}
              </button>
            </div>
          </>
        </Card>
      </Container>

      {/* <HelpButton />
      <ChatButton /> */}
    </>
  );
};
