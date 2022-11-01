import Profile from "./components/profile";
import EditProfile from './components/editProfile';
import { Routes,Route } from 'react-router-dom';
import PaymentTable from './components/common/paymentTable';
import ProductTable from './components/common/productTable';
import ProductDetail from "./components/common/productDetail";
import NoMatch from "./components/noMatch";


function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />}>
            <Route index element={<PaymentTable />} />
            <Route path="payment" element={<PaymentTable />} />
            <Route path="products" element={<ProductTable />} />
        </Route>
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="edit-profile" element={<EditProfile/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
