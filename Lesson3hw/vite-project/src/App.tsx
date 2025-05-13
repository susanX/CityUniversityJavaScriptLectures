import './App.css'
import Student from './components/student/index';
import Product from './components/student/product';

function App() {
  const products = [
    {  name: 'James', lang: 'Pascal' },
    {  name: 'Peter', lang: 'HTML' },
    {  name: 'James', lang: 'CSS' },
    {  name: 'Rick', lang: 'Python' }
  ]
  return (
    <>
    <h2>JavaScript Students</h2>
      <Student />
{products.map((product, index) => (
  <Product key={index} name={product.name} lang={product.lang} />
))}
    </>
  )
}

export default App
