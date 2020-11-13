import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #f1b71c url('../../assets/bg1.png') no-repeat right;
  background-size: cover;

  .modal-container {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;

    background-color: #00000080;

    .modal {
      width: 400px;
      padding: 20px;
      display: flex;
      background-color: #fff;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 4px;

      h3 {
        color: #333;
        margin-bottom: 10px;
      }

      span {
        margin-top: 30px;
        color: #f1b71c;
      }
    }
  }

  form {
    width: 450px;

    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: #f7fafc;
    border-radius: 10px;
    padding: 30px;

    p {
      margin: 35px 0px;
      color: #727272;
    }

    span.error {
      margin-bottom: 20px;
      width: 100%;
      height: 15px;
      font-size: 14px;
      padding: 3px 0;
      color: #ff6969;
    }

    .form-input {
      height: 47px;
      width: 100%;
      display: flex;
      background-color: #fff;
      align-items: center;
      padding-left: 10px;
      border-radius: 4px;
      box-shadow: 0 3px 5px -2px #35353542;

      input {
        height: 100%;
        width: 90%;
        padding-left: 10px;
        font-size: 15px;
        border: 0;
        border-radius: 0 4px 4px 0px;

        &::placeholder {
          color: rgb(153, 153, 153);
        }

        &::-ms-reveal,
        &::-ms-clear {
          display: none;
        }
      }
    }

    button {
      height: 47px;
      width: 100px;
      border-radius: 5px;

      background-color: #f1b71c;

      color: #fff;
      cursor: pointer;
      font-size: 14px;

      transition: all 0.3s;

      &:hover {
        background-color: #cf9e17;
      }
    }
  }
`;
