import styled from "@emotion/styled";

export const ButtonsBox = styled.div`
  display: flex;
  gap: 0.4rem;
  min-height: 3.5rem;
  width: 20rem;
  padding: 4px;
  position: absolute;
  bottom: -25px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  button {
    flex: 1;
  }
  @media only screen and (max-width: 550px) {
  }
`;
