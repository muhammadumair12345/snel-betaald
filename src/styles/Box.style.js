import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => (props.gap ? props.gap : "1rem")};
  flex-wrap: ${(props) => props.wrap};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex: ${(props) => props.flex};
`;
