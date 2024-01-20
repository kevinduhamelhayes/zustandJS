export interface Question {
  id: number
  question: string
  code: string
  answer: string[]
  correctAsnwer: number
  userSelectedAnswer?: number
  isCorrectUserAnswer?: boolean
}
