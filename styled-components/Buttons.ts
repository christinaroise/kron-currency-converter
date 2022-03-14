import styled from "styled-components";
import { FROM_TABLET } from "utils/sizes";
import { Colors } from "./GlobalStyles";

enum scale {
    NORMAL = 0.98,
}

export const PrimaryButton = styled.button`
  background-color: ${Colors.PURPLE};
  color: ${Colors.WHITE};
  border: none;
  padding: 1rem 2rem;
  border-radius: 100px;
  transition: transform 0.25 ease-in;
  width: 100%;
  :active {
    transform: scale(scale.NORMAL);
  }
  :hover {
    background-color: ${Colors.DARKPURPLE};
  }
  :disabled {
    background-color: ${Colors.GRAY};
    color: ${Colors.PURPLE};
    cursor: not-allowed;
  }
  ${FROM_TABLET}{
    width: fit-content;
  }
`;

export const SecondaryButton = styled.button`
  background-color: ${Colors.WHITE};
  color: ${Colors.PURPLE};
  border: 2px solid ${Colors.LIGHTPURPLE};;
  padding: 1rem 2rem;
  border-radius: 100px;
  width: 100%;
  transition: transform 0.25 ease-in;
  :active {
    transform: scale(${scale.NORMAL});
  }
  :hover {
    background-color: ${Colors.LIGHTPURPLE};
    color: ${Colors.PURPLE};
  }
    ${FROM_TABLET}{
    width: fit-content;
  }
`;

export const IconButton = styled.button`
  height: fit-content;
  background-color: ${Colors.WHITE};
  color: ${Colors.DARKPURPLE};
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0.8rem 1.5rem;
  border-radius: 100px;
  transition: transform 0.25 ease-in;
  :hover {
    background-color: ${Colors.LIGHTPURPLE};
  }
  :active {
    transform: scale(${scale.NORMAL});
  }
`;