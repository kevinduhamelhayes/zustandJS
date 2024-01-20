import { Container, Stack, Typography } from '@mui/material'
import './App.css'

import { JavaScriptLogo } from './JavaScriptLogo'

function App () {
  return (
    <>
  <main>
    <Container maxWidth="sm" component="h1">
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <JavaScriptLogo />
        <Typography variant="h2" component="h1">JavaScript Quizz</Typography>
</Stack>
    </Container>
  </main>
    </>
  )
}

export default App
