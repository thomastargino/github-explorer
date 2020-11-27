import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQF9HBdxe905xQ/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=sJKGm6o5y2tYy4EH2dsmrNMTHf5bO0xldd_vwOJkjJc"
            alt="Thomás Targino"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQF9HBdxe905xQ/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=sJKGm6o5y2tYy4EH2dsmrNMTHf5bO0xldd_vwOJkjJc"
            alt="Thomás Targino"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQF9HBdxe905xQ/profile-displayphoto-shrink_200_200/0?e=1611792000&v=beta&t=sJKGm6o5y2tYy4EH2dsmrNMTHf5bO0xldd_vwOJkjJc"
            alt="Thomás Targino"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
