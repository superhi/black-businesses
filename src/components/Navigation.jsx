import styled from 'styled-components'

const Navigation = styled.header`
  background: linear-gradient(180deg, rgba(251,237,241,1) 50%, rgba(251,237,241,0) 100%);
  top: 0;
  height: 7rem;
  margin: auto;
  padding: 1rem 3rem 0;

  @media only screen and (max-width: 700px) {
    height: auto;
    padding: 0.4rem 2rem;
    background-color: transparent;
  }
`

export default Navigation