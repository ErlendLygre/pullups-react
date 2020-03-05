import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

h1, h2, h3, h4 {
  color: #E85F41;
}

body {
  margin: 0;
  color: white;
  background-color: #112133;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

label {
    margin: 15px 0 5px 0;
}

.smaller-map {
  height: 200px;
}

.leaflet-container {
  height:480px;
}

textarea {
    min-width: 350px;
    height: 100px;
    font-size: 1rem;
    width: 100%;
}

a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
  padding-right: 30px;
}

p {
  color: #343434;
}
`

export default GlobalStyle