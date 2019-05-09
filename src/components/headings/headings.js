import React, { Fragment } from "react"
import styled from 'styled-components'

// Dropping a h1 here as our default, but it will be overridden each time it's used, like so:
// <Heading headingElement={ 'h2' } headingClass={ 'h3' } headingContent={ 'A Heading' }/>
const HeadingElement = styled.h1``

const Heading = ({ headingElement, headingClass, headingContent, styledComp }) => (
  <Fragment>
    <HeadingElement as={ headingElement } className={ headingClass } styledComp={ styledComp }>
      { headingContent }
    </HeadingElement>
  </Fragment>
)

export default Heading
