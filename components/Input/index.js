import React, { useState } from 'react';
import { FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

import { Container, Error } from './styles';

const Input = React.forwardRef((props, ref) => {
  const [type, setType] = useState('password');

  function setVisibility() {
    if (type === 'text') {
      setType('password');
    } else {
      setType('text');
    }
  }

  return (
    <>
      <Container disabled={props.disabled}>
        <FiLock color="#172B4D" size={22} style={{ width: '10%' }} />
        <input
          type={type}
          placeholder={props.placeholder || 'Nova senha'}
          ref={ref}
          onKeyUp={() => props.validate()}
          disabled={props.disabled}
        />
        {type === 'text' ? (
          <FiEyeOff
            color="#172B4D"
            size={15}
            style={{ width: '15%' }}
            onClick={setVisibility}
          ></FiEyeOff>
        ) : (
          <FiEye
            color="#172B4D"
            size={15}
            style={{ width: '15%' }}
            onClick={setVisibility}
          ></FiEye>
        )}
      </Container>
      <Error>{props.error}</Error>
    </>
  );
});

export default Input;
