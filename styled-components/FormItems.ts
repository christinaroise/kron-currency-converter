import styled from "styled-components";
import { Colors } from "./GlobalStyles";

export const StyledInput = styled.input`
 color: ${Colors.DARKPURPLE};
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 6px;
  font-size: 1.25rem;
  padding: 0.75rem 1rem;
  :hover {
    background-color: ${Colors.LIGHTPURPLE};
  }
  :active, :focus {
    outline: 2px solid ${Colors.YELLOW};
    background-color: ${Colors.WHITE};
  }
`;


export const Select = styled.select`
  background-color: ${Colors.WHITE};
  color: ${Colors.DARKPURPLE};
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 6px;
  font-size: 1.25rem;
  padding: 0.75rem 1rem;
  :hover {
    background-color: ${Colors.LIGHTPURPLE};
  }
  :active, :focus {
    outline: 2px solid ${Colors.YELLOW};
    background-color: ${Colors.WHITE};
  }
`;