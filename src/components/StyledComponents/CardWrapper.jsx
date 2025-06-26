import styled from 'styled-components'

export const CardWrapper = styled.div((props) => ({
    display: "flex",
    backgroundColor: "#9a9a9a",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight:"200px",
    height: "100%",
    width: "50%",
    borderRadius: "16px",
    fontSize: "28px",
    "@media (max-width: 1200px)": {
        width: "100%",
        fontSize: "24px",
    }
}));