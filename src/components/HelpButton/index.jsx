import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Modal } from './Modal';
import { Container } from './styles';
import { Badge } from '../Badge';

export const HelpButton = ({ list }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Container>
      <button
        id="helpButton"
        className="button"
        onClick={() => setIsOpenModal(true)}
      >
        Ajuda <Badge text="A" />
      </button>

      {isOpenModal && <Modal setIsOpen={setIsOpenModal} list={list} />}
    </Container>
  );
};

HelpButton.propTypes = {
  list: PropTypes.array,
};
