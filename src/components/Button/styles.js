import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding:  20px;
    border: 1px solid #000000;
    background-color:  #676767;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;

    &:hover {
        opacity: 0.6;
    }

    &.active {
    opacity: 0.6;
}
`