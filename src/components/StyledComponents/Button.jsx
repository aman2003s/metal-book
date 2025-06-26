import styled from "styled-components";

export const Button = styled.button((props)=>({
  background: props.type==="primary" ? '#ff9800' : '#ececec',
    color: props.type==="primary" ? '#fff' : '#232323',
    border: 'none',
    borderRadius: 8,
    padding: '10px 24px',
    fontSize: '1em',
    fontWeight: 'bold',
    textWrap: 'nowrap',
    cursor: 'pointer',
    flex: 1,
    transition: 'background 0.2s',
    '&:hover': { background: props.type==="primary" ? '#ffb347' : '#e0e0e0' },
}));