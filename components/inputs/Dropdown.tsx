import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Select } from "styled-components/FormItems";
import { RateOptionType } from "types/rates";

const Wrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  min-width: 320px;
`;

interface DropdownProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options?: RateOptionType[];
  errorMessage?: string;
}

const Dropdown = ({
  label,
  id,
  options,
  errorMessage,
  ...rest
}: DropdownProps) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <Select id={id} name="currencies" {...rest}>
        <option label="Select currency" disabled>
          First select
        </option>
        {options?.map(({ value, label }: RateOptionType) => (
          <option value={value} key={label}>
            {label}
          </option>
        ))}
      </Select>
      {errorMessage && <small>{errorMessage}</small>}
    </Wrapper>
  );
};

export default Dropdown;
