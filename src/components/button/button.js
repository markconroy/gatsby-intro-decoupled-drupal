import React, { Fragment } from "react"
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: #333;
  border-radius: 3px;
  border: 2px solid #333;
  color: #eee020;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: #eee020;
    color: #333;
  `}
`;

const Container = styled.div`
  text-align: center;
`

const ButtonComponent = (props) => (
  <Container>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </Container>
)

export default ButtonComponent

