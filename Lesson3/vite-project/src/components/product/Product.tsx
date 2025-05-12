interface ProductProps {
  name: string;
  price: string;
  children?: React.ReactNode;
}

const Product = ({ name, price, children}: ProductProps) => {
      return (
    <div className="box1">
        {/* <div className="product"></div> */}
      <h1>{name}</h1>
      <p>This product is a {name} and costs {price} pounds</p>
      <p>{children}</p>
    </div>
  );
}
export default Product;