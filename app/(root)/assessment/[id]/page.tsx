import AssessmentClient from "@/app/components/ui/Assessment/AssessmentClient";




interface Question {
  id: number
  question: string
  options: { id: string; text: string }[]
  correctAnswerId: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: [
      { id: "optionA", text: "Berlin" },
      { id: "optionB", text: "Madrid" },
      { id: "optionC", text: "Paris" },
      { id: "optionD", text: "Rome" },
    ],
    correctAnswerId: "optionC",
  },
  {
    id: 2,
    question: "What is the volume of a cube with side length 4?",
    options: [
      { id: "optionA", text: "16" },
      { id: "optionB", text: "64" },
      { id: "optionC", text: "48" },
      { id: "optionD", text: "12" },
    ],
    correctAnswerId: "optionB",
  },
  {
    id: 3,
    question: "Which planet is known as the Red Planet?",
    options: [
      { id: "optionA", text: "Earth" },
      { id: "optionB", text: "Mars" },
      { id: "optionC", text: "Jupiter" },
      { id: "optionD", text: "Venus" },
    ],
    correctAnswerId: "optionB",
  },
  {
    id: 4,
    question: "What is the chemical symbol for water?",
    options: [
      { id: "optionA", text: "O2" },
      { id: "optionB", text: "H2O" },
      { id: "optionC", text: "CO2" },
      { id: "optionD", text: "NaCl" },
    ],
    correctAnswerId: "optionB",
  },
  {
    id: 5,
    question: "Who painted the Mona Lisa?",
    options: [
      { id: "optionA", text: "Vincent van Gogh" },
      { id: "optionB", text: "Pablo Picasso" },
      { id: "optionC", text: "Leonardo da Vinci" },
      { id: "optionD", text: "Claude Monet" },
    ],
    correctAnswerId: "optionC",
  },
  {
    id: 6,
    question: "What is the largest ocean on Earth?",
    options: [
      { id: "optionA", text: "Atlantic Ocean" },
      { id: "optionB", text: "Indian Ocean" },
      { id: "optionC", text: "Arctic Ocean" },
      { id: "optionD", text: "Pacific Ocean" },
    ],
    correctAnswerId: "optionD",
  },
  {
    id: 7,
    question: "What is the square root of 81?",
    options: [
      { id: "optionA", text: "7" },
      { id: "optionB", text: "8" },
      { id: "optionC", text: "9" },
      { id: "optionD", text: "10" },
    ],
    correctAnswerId: "optionC",
  },
  {
    id: 8,
    question: "Which gas do plants absorb from the atmosphere?",
    options: [
      { id: "optionA", text: "Oxygen" },
      { id: "optionB", text: "Nitrogen" },
      { id: "optionC", text: "Carbon Dioxide" },
      { id: "optionD", text: "Hydrogen" },
    ],
    correctAnswerId: "optionC",
  },
  {
    id: 9,
    question: "What is the highest mountain in Africa?",
    options: [
      { id: "optionA", text: "Mount Everest" },
      { id: "optionB", text: "Mount Kilimanjaro" },
      { id: "optionC", text: "Mount Kenya" },
      { id: "optionD", text: "Mount Elgon" },
    ],
    correctAnswerId: "optionB",
  },
  {
    id: 10,
    question: "How many continents are there in the world?",
    options: [
      { id: "optionA", text: "5" },
      { id: "optionB", text: "6" },
      { id: "optionC", text: "7" },
      { id: "optionD", text: "8" },
    ],
    correctAnswerId: "optionC",
  },
]


export default async function AssessmentPage({ params }: { params: { id:number } }) {
    const { id } = await params; 
return (
    <AssessmentClient
      questions={questions}
      courseId={id}
      courseName="Algebra Assessment" 
    />
)
}
 