import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "./table";

const ProductTable = () => {
  const [columns, setCoulmns] = useState([
    {
      path: "name",
      label: "Name",
      content: (product) => (
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      ),
    },
    { path: "description", label: "Description" },
    { path: "price", label: "Price" },
    { path: "image", label: "Image" },
  ]);
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "name",
      description: "Name4",
      price: "200",
      image: "image",
    },
    {
      id: "2",
      name: "name2",
      description: "Name5",
      price: "200",
      image: "image",
    },
    {
      id: "3",
      name: "name3",
      description: "Name6",
      price: "200",
      image: "image",
    },
    {
      id: "4",
      name: "name4",
      description: "Name7",
      price: "200",
      image: "image",
    },
  ]);

  return (
    <div>
      <Table columns={columns} data={products} />
    </div>
  );
};

export default ProductTable;
