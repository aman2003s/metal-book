import styled from "styled-components";

const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    gap: "8px",
    flexGrow: 1,
    "@media (max-width: 1200px)": {
        padding: "0",
        marginBottom: "16px"
    }
});

export default Wrapper; 