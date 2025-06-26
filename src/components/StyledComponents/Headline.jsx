import styled from "styled-components";

const Headline = styled.h1((props) => ({
    fontSize: props.$headlinetype === "h1" ? "30px" : "20px",
    fontStyle: props.$headlinetype === "h1" ? "normal" : "italic",
    fontWeight: "bold"
}));

export default Headline; 