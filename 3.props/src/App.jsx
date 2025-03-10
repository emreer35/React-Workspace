import "./App.css";
import Container from "./Container";
import Product from "./Product";

// function App() {
//   return (
//     <>
//       <Product productName="Ayakkabi" price={3500} />
//       <Product />
//     </>
//   );
// }

function App() {
  return (
    <>
      <Container>
        <Product productName="ayakkabi" price={3000} />
      </Container>
    </>
  );
}

export default App;
