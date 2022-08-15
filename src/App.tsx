import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme} >
      <h1> CASH FLOW </h1>
    </ThemeProvider>
  )
}

export default App
