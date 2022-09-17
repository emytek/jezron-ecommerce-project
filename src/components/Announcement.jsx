import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px
`

const Announcement = () => {
  return (
    <Container>
        Super Deal!..Get your free shipping on Orders over $50...😊cool
    </Container>
  )
}

export default Announcement