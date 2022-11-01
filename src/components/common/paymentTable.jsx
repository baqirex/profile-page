import { useState } from "react";
import Table from "./table";

const PaymentTable = () => {
  const [columns, setCoulmns] = useState([
    { path: "title", label: "Title" },
    { path: "ordernumber", label: "Order Number" },
    { path: "payment", label: "Payment" },
    { path: "status", label: "Status" },
  ]);
  const [products, setProducts] = useState([
    { title: "title", ordernumber: "order 1", payment: "200", status: "paid" },
    {
      title: "title 2",
      ordernumber: "order 2",
      payment: "400",
      status: "pending",
    },
    {
      title: "title 3",
      ordernumber: "order 3",
      payment: "600",
      status: "paid",
    },
    {
      title: "title 4 ",
      ordernumber: "order 4",
      payment: "800",
      status: "paid",
    },
  ]);

  return (
    <div>
      <Table columns={columns} data={products} />
    </div>
  );
};

export default PaymentTable;
