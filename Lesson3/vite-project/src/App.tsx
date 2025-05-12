import './App.css';
import Product from './components/product/Product'; // correct the path if needed
import Student from './components/student/Student';

function App() {
  const products = [
    { name: "jeans", price: 30 },
    { name: "blouse", price: 50 },
    { name: "t-shirt", price: 100 },
    { name: "skirt", price: 120 },
    { name: "jeans", price: 30 },
    { name: "blouse", price: 50 },
    { name: "t-shirt", price: 100 },
    { name: "skirt", price: 120 },
    { name: "jeans", price: 30 }
  ];
  return (
    <>
      {/* <h1>This is my first react component</h1>
      <p>My first React app</p>
      <Product /> */}

      {products.map((product, index) => (
        <Product key={index} name={product.name} price={product.price} />
      ))}
</>
  );
}

export default App;
