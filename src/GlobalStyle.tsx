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

.leaflet-container {
  height: 400px;
}

textarea {
    width: 100%;
    height: 100px;
    font-size: 1rem;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  padding-right: 30px;
}

p {
  color: #343434;
}
`

export default GlobalStyle