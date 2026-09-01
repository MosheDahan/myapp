
import SignupForm from './components/SignupForm'
import Exe1Form from './components/Exe1Form'
// import Exe2Form from './components/Exe2Form'
import TodoAdder from './components/TodoAdder'
import StudentList from './components/StudentList'
import ProductList from './components/ProductList'

function App() {
   
  return (
    <>
    <StudentList />
    <ProductList />
      {/* <h1>SignUpForm</h1>
      <SignupForm />

      <h1>Exe1</h1>
      <Exe1Form />


      <h1>Exe2</h1>
      {/* <Exe2Form /> */}

      {/* <h1>TodoAdder</h1>
      <TodoAdder /> */}
    </>
  )
}

export default App