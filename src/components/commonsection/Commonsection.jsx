import React from 'react'
import { Container } from 'reactstrap'

const Commonsection = (props) => {
  return (
    <Section className="common_section">
        <Container>
            <h2>{props.title}</h2>
        </Container>
    </Section>
  )
}

export default Commonsection