import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { StyledInput } from "styled-components/FormItems";

const Wrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  min-width: 320px;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  errorMessage?: string;
}

const Input = ({ label, id, errorMessage, ...rest }: InputProps) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <StyledInput id={id} {...rest} />
      {errorMessage && <small>{errorMessage}</small>}
    </Wrapper>
  );
};

export default Input;
