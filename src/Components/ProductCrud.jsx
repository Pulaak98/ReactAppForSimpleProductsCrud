import axios from "axios";
import { useEffect, useState } from "react";


function ProductCrud() {
  const [productId, setId] = useState("");
  const [productName, setName] = useState("");
  const [quatity, setQauntity] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get(
      "https://localhost:7275/api/Products/ViewProducts"
    );
    setProducts(result.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7275/api/Products/AddProduct", {
        productName: productName,
        price: price,
        quatity: quatity,
      });
      alert("Product Added Successfully");
      setId("");
      setName("");
      setPrice("");
      setQauntity("");

      Load();
    } catch (err) {
      alert(err);
    }
  }

  async function editProduct(products) {
    setName(products.ProductName);
    setPrice(products.Price);
    setQauntity(products.quatity);

    setId(products.productId);
  }

  async function DeleteProduct(productId) {
    await axios.post("https://localhost:7275/api/Products/Delete/" + productId);
    alert("product deleted Successfully");
    setId("");
    setName("");
    setPrice("");
    setQauntity("");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.post(
        "https://localhost:7275/api/Products/UpdateProduct/" +
          products.find((u) => u.productId === productId).productId ||
          productId,
        {
          productId: productId,
          productName: productName,
          price: price,
          quatity: quatity,
        }
      );
      alert("Registation Updateddddd");
      setId("");
      setName("");
      setPrice("");
      setQauntity("");

      Load();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <h1>Products Details</h1>
      <div ClassName="container mt-4">
        <form className="form">
          <div ClassName="form-group f-group">
            <input
              type="text"
              ClassName="form-control"
              id="id"
              hidden
              value={productId}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />

            <label>Product Name</label>
            <input
              type="text"
              ClassName="form-control"
              id="name"
              value={productName}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div ClassName="form-group">
            <label>Price</label>
            <input
              type="text"
              ClassName="form-control"
              id="price"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div ClassName="form-group">
            <label>Quantity</label>
            <input
              type="text"
              ClassName="form-control"
              id="quantity"
              value={quatity}
              onChange={(event) => {
                setQauntity(event.target.value);
              }}
            />
          </div>
          <div>
            <button
              ClassName="btn btn-primary mt-4"
              onClick={save}>
              Add
            </button>
            <button
              ClassName="btn btn-warning mt-4"
              onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>

      <table
        ClassName="table table-dark"
        align="center">
        <thead>
          <tr>
            <th scope="col">Product Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">price</th>
            <th scope="col">Quantity</th>

            <th scope="col">Option</th>
          </tr>
        </thead>
        {products.map(function fn(product) {
          return (
            <tbody>
              <tr>
                <th scope="row">{product.productId} </th>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.quatity}</td>

                <td>
                  <button
                    type="button"
                    ClassName="btn btn-warning"
                    onClick={() => editProduct(product)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    ClassName="btn btn-danger"
                    onClick={() => DeleteProduct(product.productId)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default ProductCrud;
