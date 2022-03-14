import styled from "styled-components";
import { FROM_TABLET } from "utils/sizes";
import { Colors } from "styled-components/GlobalStyles";
import { Flip2 } from "@styled-icons/evaicons-solid/Flip2";


export const Wrapper = styled.article<{isConvertedAmountVisible: (boolean)}>`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${Colors.WHITE};
  height: 100%;
  max-height: ${(props) => (props.isConvertedAmountVisible ? 2000 : 500)}px;
  ${FROM_TABLET} {
    max-height: ${(props) => (props.isConvertedAmountVisible ? 1500 : 262)}px;
  }
  transition: all 1s ease-in-out;
  overflow: hidden;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
`;

export const InputContainer = styled.div`
  display: grid;
  gap: 2rem;
  ${FROM_TABLET} {
    display: flex;
    align-items: flex-end;
  }
`;

export const ConvertedAmountContainer = styled.div`
  display: grid;
  gap: 2rem;
  ${FROM_TABLET} {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const ConvertedAmountTitle = styled.div`
    display: flex;
    margin: auto;
    align-items: flex-end;
    gap: .5rem;
    ${FROM_TABLET} {
      margin: 0;
    }
    > p {
      font-size: 2.5rem;
      font-weight: 700;
    }
`;

export const FlipIcon = styled(Flip2)`
  color: ${Colors.DARKPURPLE};
  height: 25px;
  margin: auto;
`;