import Counter from './components/Counter'
import Toggle from './components/Toggle'
import UserCard from './components/UserCard'
import ProductCard from './components/ProductCard'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Input from './components/Input'
import ContactForm from './components/ContactForm'
import Exe1Form from './components/Exe1Form'
import Exe1bForm from './components/Exe1bForm'
import TodoAdder from './components/TodoAdder'
import ProductList from './components/ProductList'
import StudentList from './components/StudentList'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '24px',
        alignItems: 'center',
      }}
    >
      <Counter c={5} firstname="Alice" />
      <Toggle />
      <UserCard name="Dana" age={22} city="Tel Aviv" />
      <ProductCard productName="Laptop" productPrice={2500} isAvailable={true} />
      <LoginForm />
      <SignupForm />
      <Input />
      <ContactForm />
      <Exe1Form />
      <Exe1bForm />
      <TodoAdder />
      <StudentList />
      <ProductList />
    </div>
  )
}

export default App