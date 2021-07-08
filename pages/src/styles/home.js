import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 12pt;
  font-family: 'Open Sans';
  font-weight: 300;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`


export const Wrapper = styled.div`
  width: 100%;
  max-width: 310px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  > svg {
    width: 250px;
    margin-top: 30px;
  }
`

export const Medias = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: center;

  > a {
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 12px;
    transition: linear color 0.5s;

    &:hover {
      color: #333
      
    }
  }


  >span {
    font-size: 9pt;
    font-family: 'Open Sans';
    font-weight: 200;
    color: ${({ theme }) => theme.colors.primary};
    
  }
  `;