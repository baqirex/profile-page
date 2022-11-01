import { useState } from "react";
import ProfileSection from "./profileSection";
import ProfileContent from "./common/profileContent";
import ProductTable from "./common/productTable";
import { Routes, Route } from "react-router-dom";
import PaymentTable from "./common/paymentTable";

const Profile = () => {
  const [header, setHeader] = useState([
    "Product Name",
    "description",
    "price",
    "stock",
  ]);
  const [data, setData] = useState([
    "this name",
    "this description",
    "0000",
    "50",
  ]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 col-12">
          <ProfileSection />
        </div>
        <div className="col-md-8 col">
          <div className="container table-container">
            <ProfileContent />
            <Routes>
              <Route path="/payment" element={<PaymentTable />} />
              <Route path="/products" element={<ProductTable />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
