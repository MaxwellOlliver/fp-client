import { useEffect, useRef, useState } from 'react';
import { Container } from '../styles/styles';
import { FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Input from './components/Input';

export default function Home() {
  const [firstError, setFirstError] = useState('');
  const [secondError, setSecondError] = useState('');
  const [firstDisabled, setFirstDisabled] = useState(false);
  const [secondDisabled, setSecondDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const router = useRouter();

  const newPassRef = useRef(null);
  const confirmNewPassRef = useRef(null);
  const timeout = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!newPassRef.current.value) {
      clearTimeout(timeout.current);
      setFirstError('Por favor, informe sua nova senha.');
      _setTimeout();
      newPassRef.current.focus();
      return;
    }

    if (!confirmNewPassRef.current.value) {
      clearTimeout(timeout.current);
      setSecondError('Por favor, confirme sua nova senha.');
      _setTimeout();
      confirmNewPassRef.current.focus();
      return;
    }

    if (confirmNewPassRef.current.value !== newPassRef.current.value) {
      clearTimeout(timeout.current);
      setSecondError('As senhas não são iguais.');
      _setTimeout();
      return;
    }

    const password = newPassRef.current.value;
    const confirmPassword = confirmNewPassRef.current.value;
    const { userId } = router.query;

    try {
      load();
      fetch(`http://localhost:3333/customer/forgotpass?c=${userId}`, {
        method: 'POST',
        body: JSON.stringify({
          password,
          confirmPassword,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(() => {
        setModal(true);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      enableAll();
    }
  }

  function _setTimeout() {
    timeout.current = setTimeout(() => {
      setFirstError('');
      setSecondError('');
    }, 5000);
  }

  function load() {
    setLoading(true);
    disableAll();
  }

  function enableAll() {
    setFirstDisabled(false);
    setSecondDisabled(false);
  }

  function disableAll() {
    setFirstDisabled(true);
    setSecondDisabled(true);
  }

  function validateNewPass(value) {
    if (value.length < 6) {
      clearTimeout(timeout.current);
      setFirstError('A senha deve ter no mínimo 6 caracteres.');
      _setTimeout();
      setSecondDisabled(true);
    } else {
      setFirstError('');
      setSecondDisabled(false);
    }
  }

  function validateConfirmNewPass(value) {
    if (value !== newPassRef.current.value) {
      clearTimeout(timeout.current);
      setSecondError('As senhas não são iguais.');
      _setTimeout();
    } else {
      setSecondError('');
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <img src="./assets/logo.svg" alt="logo" />
        <p>Informe sua nova senha.</p>
        <Input
          error={firstError}
          ref={newPassRef}
          validate={() => validateNewPass(newPassRef.current.value)}
          disabled={firstDisabled}
        />
        <Input
          placeholder="Confirmar nova senha"
          error={secondError}
          ref={confirmNewPassRef}
          validate={() =>
            validateConfirmNewPass(confirmNewPassRef.current.value)
          }
          disabled={secondDisabled}
        />
        <button type="submit">
          {loading ? (
            <img
              src="./assets/oval.svg"
              alt="loading"
              style={{ width: '20px' }}
            />
          ) : (
            'Entrar'
          )}
        </button>
      </form>

      {modal && (
        <div className="modal-container">
          <div className="modal">
            <h3>Sua senha foi alterada!</h3>
            <span>Você pode fechar essa janela.</span>

            <button onClick={() => window.close()}>Fechar janela</button>
          </div>
        </div>
      )}
    </Container>
  );
}
