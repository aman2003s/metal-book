import styled from "styled-components";

export const ButtonRow = styled.div({
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    "@media (max-width: 1200px)": {
        flexDirection: 'column',
        gap: '8px',
    }
});