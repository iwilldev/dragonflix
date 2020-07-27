import styled from 'styled-components';

export const VideoCardContainer = styled.a`

  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  transition: .5s;
  &:hover,
  &:focus {
    opacity: .85
  }

  &:hover p,
  &:focus p {
    display:inline;
  }

`; // fim dos estilos do VideoCardContainer

// Novo componente abaixo (<p>)

export const VideoCardBanner = styled.p`
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: -16px;
  margin-left: -16px;
  display: none;
  transition: 300ms;
  @media (max-width: 800px) {
    display: inline;
  }
`