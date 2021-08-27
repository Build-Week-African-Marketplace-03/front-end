import styled from "styled-components"

const ButtonStyle = styled.button`
  padding: 6px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: white;

  ${(props) => (props.type === "primary" ? "background: #deedd6" : null)}
  ${(props) => (props.type === "secondary" ? "background: #7bed8d" : null)}
  ${(props) => (props.type === "third" ? "background: #a6f" : null)}
`

export default ButtonStyle
