import "./App.css";

// function Product({productName, price}) {
//   console.log(productName,price) ;

//   return (
//     <div>
//       <div>
//         <h3>Urun Bilgileri</h3>
//         <p>Adi: {productName}</p>
//         <p>Price: {price}</p>
//       </div>
//     </div>
//   );
// }

// function Product(props) {
//   // desctruckting
//   const {productName , price} = props
//   console.log(props);

//   return (
//     <div>
//       <div>
//         <h3>Urun Bilgileri</h3>
//         <p>Adi: {productName}</p>
//         <p>Price: {price}</p>
//       </div>
//     </div>
//   );
// }

function Product({productName,price}) {


  return (

    <div>
      <div>
        <h3>Urun Bilgileri</h3>
        <p>Adi: {productName}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
}

export default Product;
