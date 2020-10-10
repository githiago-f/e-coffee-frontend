import React from 'react';
import { Title } from 'components/Typography/Title';
import Card from 'components/Card';

const Home = () => {
  return (
    <>
      <div className="container">
        <Title>Bem vindo, {'{ user.name }'}</Title>
        <div>
          <p>
            Este template foi criado para encurtar o esforço de desenvolvimento utilizando a ferramenta
            create-react-app. <br/>
            Ele estabelece um projeto base que pode ser utilizado para inumeras funções, com um exemplo
            base de testes unitários encontrado na pasta &quot;src/__test__&quot;. 
          </p>
          <p>
            Edite o conteúdo da pasta &quot;src&quot; para começar
          </p>
        </div>
        <div className="row">
          <div className="col">
            <Card card={{title: 'Titulo do card'}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
