import { Container, Stack, Typography } from '@mui/material'
import './App.css'
import { JavaScriptLogo } from './JavaScriptLogo'
import { Start } from './Start'
import { useQuestionsStore } from './store/questions'

function App () {
  const questions = useQuestionsStore(state => state.questions)
  console.log(questions)
  return (
    <>
  <main>
    <Container maxWidth="sm" component="h1">
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        <JavaScriptLogo />
        <Typography variant="h2" component="h1">JavaScript Quizz</Typography>
</Stack>
<Start />
    </Container>
  </main>
    </>
  )
}

export default App
