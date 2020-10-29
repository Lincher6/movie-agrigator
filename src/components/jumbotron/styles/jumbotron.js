import styled from 'styled-components/macro'

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  overflow: hidden;
  padding: 50px 5%;
  color: grey;
`

export const Inner = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction };
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  margin: auto;
  
  @media (max-width: 1000px) {
     flex-direction: column;
  }
`

export const Container = styled.div``

export const Pane = styled.div`
  width: 50%;
  
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  padding-bottom: 8px;
  
  @media (max-width: 600px) {
    font-size: 35px;
  }
`

export const SubTitle = styled.h2`
  font-size: 24px;
  line-height: normal;
  font-weight: normal;
  
  @media (max-width: 600px) {
    font-size: 18px;
  }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;

`
