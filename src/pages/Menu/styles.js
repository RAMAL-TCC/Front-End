import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: rgb(255, 204, 179);
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .microphone-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 5rem;
    color: #000;
    width: 100%;
    height: 20vh;
  }

  .title {
    font-size: 5rem;
    color: #000;
  }

  .orange-button {
    position: relative;
    border: none;
    padding: 0.6rem 2rem;
    height: 100%;
    font-size: 3rem;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: rgb(219, 127, 29);
  }

  .orange-button:hover {
    background-color: rgb(150, 80, 20);
  }

  .orange-button:active {
    background-color: rgb(100, 50, 10);
  }

  .blue-button {
    position: relative;
    border: none;
    padding: 0.6rem 2rem;
    height: 100%;
    font-size: 3rem;
    font-weight: 700;
    border-radius: 4px;
    color: #fff;
    background-color: rgb(51, 173, 255);
  }

  .blue-button:hover {
    background-color: rgb(25, 87, 128);
  }

  .blue-button:active {
    background-color: rgb(12, 43, 64);
  }

  .buttons {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 50%;
    gap: 1rem;

    span {
      padding: 0.5rem 1rem;
      font-size: 1.5rem;
      top: -16px;
      left: -16px;
      width: 3rem;
    }
  }
`;

export const TranscriptContainer = styled.div`
  position: fixed;
  bottom: 20px;
  width: 70%;
  height: 3.5rem;
  padding: 0 0.5rem;
  border-radius: 4px;
  background: rgb(255, 245, 240);
  display: flex;
  align-items: center;

  p {
    color: #000;
    font-size: 1.5rem;
  }
`;
