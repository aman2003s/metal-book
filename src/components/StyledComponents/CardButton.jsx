import styled from 'styled-components'

export const CardButton = styled.button((props) => ({
    background: props.$type === "wallet" ? "linear-gradient(90deg,rgba(179, 219, 81, 1) 0%, rgba(137, 224, 71, 1) 100%)" : "linear-gradient(90deg,rgba(254, 147, 147, 1) 0%, rgba(254, 62, 62, 1) 100%)",
    outline: "none",
    border: "none",
    padding: "10px 28px",
    margin: "16px",
    borderRadius: "12px",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
}));