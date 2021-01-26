import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: #CE1E20;
  }

  body, a {
    font-family: 'Rubik', sans-serif;
  }

  h1,
  h2,
  h3,
  p.popup.title,
  a.popup {
    font-family: 'Calistoga', cursive;
  }

  h2 {
    font-size: 40px;
  }

  h2.hero-text {
    margin-top: 250px;
  }

  h3 {
    font-size: 30px;
    margin: 16px 0;
  }

  p {
    margin: 16px 0;
  }

  a {
    text-decoration: none;
    color: #CE1E20;
  }

  .business-tile-image {
    object-fit: cover;
    width: 284px;
    height: 284px;
    border-radius: 10px;
  }

  div.header-links {
    margin: auto;
    display: flex;
  }

  div.header-top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 16px 0;
  }

  img.logo {
    width: 200px;
    margin: auto;
    display: inline-block;
  }

  img.tile {
    width: 400px;
    position: absolute;
  }

  img.tile.left {
    left: 0;
  }

  img.tile.right {
    right: 0;
  }

  img.hero-image {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }

  img.map-pin {
    position: relative;
    top: 5px;
  }

  div.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
  }

  div.hero-text {
    background-color: #FCDFDD;
    text-align: center;
    height: 600px;
  }

  div.map-header {
    text-align: center;
    padding: 20px 0;
  }

  img.business-page {
    object-fit: cover;
    width: 100%;
    border-radius: 0.4rem;
  }

  .business-page {
    display: flex;
  }

  h1.business-page {
    margin: 0;
  }

  .column {
    flex: 50%;
    padding: 2rem;
  }

  .mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip {
    border-top-color: #CE1E20;
    margin-bottom: 2.4rem;
  }

  .mapboxgl-ctrl-group:not(:empty) {
    right: 0;
    margin: 1rem;
  }

  .mapboxgl-ctrl.mapboxgl-ctrl-attrib {
    display: none;
  }

  div.mapboxgl-popup-content {
    padding: 16px;
    font-size: 16px;
    border-radius: 5px;
    background-color: #CE1E20;
    color: white;
  }

  a.popup {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
  }

  a.popup:hover {
    opacity: 0.5;
  }

  .popup {
    margin: 0.4rem 0;
  }

  ul {
    margin-left: 0;
    padding-left: 0;
  }

  ul li:last-child {
    border: none;
  }

  .mapboxgl-ctrl.mapboxgl-ctrl-attrib {
    display: none;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 2.4rem;
      margin: 16px 0;
    }

    h2.hero-text {
    margin-top: 0;
  }

    h3 {
      font-size: 20px;
    }

    img.tile {
      left: unset;
      width: 100px;
      top: 7%;
    }

    img.logo {
      width: 140px;
      margin: auto;
    }

    img.hero-image {
      height: 320px;
    }

    div.grid {
      display: grid;
      grid-template-columns: unset;
    }

    div.hero-text {
      height: unset;
      padding: 90px 30px;
    }

    .mapboxgl-ctrl-group:not(:empty) {
      display: none;
    }

    .business-page {
      display: block;
      padding: 2rem 0 4rem 0;
    }

    .column {
      padding: 0;
    }

    .business-tile-image {
      width: 100%;
    }
  }
`

export default GlobalStyle
