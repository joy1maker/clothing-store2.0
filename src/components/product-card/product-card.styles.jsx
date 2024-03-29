import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 23vw;
  min-width: 25%;
  display: flex;
  flex-direction: column;
  height: 60vh;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    bottom: 50px;
    display: none;
    @media screen and (max-width:800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }

  }
  @media screen and (max-width:800px) {
    width: 100%;
    margin-bottom: 20px;
    &:hover {
    img {
      opacity: unset;
    }
    button {
      opacity: unset;
      display: flex;
    }
  }
}
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  @media screen and (max-width:800px) {
    width: 90%;
    font-size: 14px;
  }
`;

export const Name = styled.span`
  width: 90%;
`;

export const Price = styled.span`
  width: 10%;
  @media screen and (max-width:800px) {
    width: 20%;
  }
`;