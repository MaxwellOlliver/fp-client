import styled from 'styled-components';

export const Container = styled.div`
  height: 47px;
  width: 100%;
  display: flex;
  background-color: #fff;
  align-items: center;
  padding-left: 10px;
  border-radius: 4px;
  box-shadow: 0 3px 5px -2px #35353542;
  opacity: ${(props) => (props.disabled ? '0.6' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s;

  input {
    height: 100%;
    width: 90%;
    padding-left: 10px;
    font-size: 15px;
    border: 0;
    border-radius: 0 4px 4px 0px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};

    &::placeholder {
      color: rgb(153, 153, 153);
    }

    &::-ms-reveal,
    &::-ms-clear {
      display: none;
    }
  }
`;

export const Error = styled.span`
  margin-bottom: 20px;
  width: 100%;
  height: 15px;
  font-size: 14px;
  padding: 3px 0;
  color: #ff6969;
`;
