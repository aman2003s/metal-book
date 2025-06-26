import styled from "styled-components";

export const Dialog = styled.div({
  background: '#fff',
  borderRadius: 18,
  padding: '32px 32px 24px 32px',
  minWidth: 340,
  boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
  display: 'flex',
  margin: '0 16px',
  flexDirection: 'column',
  gap: 18,
  "@media (max-width: 1200px)": {
    overflowX: 'auto',
  } 
})