import styled from "@emotion/styled";

export const Form = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  flex-wrap: ${(props) => props.wrap};
  gap: 1rem;
  button {
    width: 12rem;
  }
  @media only screen and (max-width: 550px) {
    button {
      width: 100%;
    }
  }
`;
