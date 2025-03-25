import {Routes , Route} from 'react-router-dom'
import { Button } from './components/ui/button'
import Navbar from './page/Navbar/Navbar';
import Home from "./page/Home/Home";
import AssetTable from './page/Home/AssetTable';
import Portfolio from "./page/Portfolio/Portfolio";
import Activity from "./page/Activity/Activity";
import Wallet from "./page/Wallet/Wallet";
import Withdrawal from "./page/Withdrawal/Withdrawal";
import PaymentDetails from "./page/PaymentDetails/PaymentDetails";



function App() {

  return (
    <>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home/> }/>
          <Route path = "/portfolio" element = {<Portfolio/> }/>
          <Route path = "/activity" element = {<Activity/> }/>
          <Route path = "/wallet" element = {<Wallet/> }/> 
          <Route path = "/withdrawal" element = {<Withdrawal/> }/>
          <Route path = "/payment-details" element = {<PaymentDetails/> }/>
        </Routes> 
        
    </>
  )
}

export default App
