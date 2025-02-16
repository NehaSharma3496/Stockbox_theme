import { Routes, Route } from "react-router-dom";

import Dashboard from "../Layout/Users/Dashboard/Dashboard";
import Services from "../Layout/Users/Service/Service";
import Trades from "../Layout/Users/Trades/Trade";   
import Basket from "../Layout/Users/Basket/Basket";    
import BrokerResponse from "../Layout/Users/BrokerResponse/BrokerResponse";       
import PastPerformance from "../Layout/Users/PastPerformance/PastPerformance";  
import ReferEarn from "../Layout/Users/ReferEarn/Refer";
import Coupon from "../Layout/Users/Coupon/Coupon";
import Faq from "../Layout/Users/Faq/Faq";
import PaymentHistory from "../Layout/Users/PaymentHistory/PaymentHistory";
import Subscription from "../Layout/Users/Subscription/Subscription";
import Privacy from "../Layout/Users/Privacy/Privacy";
import Terms from "../Layout/Users/TermsCondition/Terms";
import Profiles from "../Layout/Users/Profile/Profiles";
import Demat from "../Layout/Users/Demat/Demat";
import Cash from "../Layout/Users/PastPerformance/Cash";
import Future from "../Layout/Users/PastPerformance/Future";
import Option from "../Layout/Users/PastPerformance/Option";
import Userkyc from "../Layout/Users/Profile/Kyc";
import HelpDesk from "../Layout/Users/HelpDesk/HelpDesk";
       

export default function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
       <Route path ="/basket" element={<Basket />} />
      <Route path="/trades" element={<Trades />} />
      <Route path="/service" element={<Services />} />
      <Route path="/broker_response" element={ <BrokerResponse/> } />
      <Route path="/past-performance" element={ <PastPerformance/> } />
      <Route path="/refer-earn" element={<ReferEarn />} />
      <Route path="/coupons" element={<Coupon />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/payment-history" element={<PaymentHistory />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms-conditions" element={<Terms />} />
      <Route path="/profile" element={<Profiles />} />
      <Route path="/demat" element={<Demat />} />
      <Route path="/past-performance/cash" element={<Cash />} />
      <Route path="/past-performance/future" element={<Future />} />
      <Route path="/past-performance/option" element={<Option />} />
      <Route path="/kyc" element={<Userkyc />} />
      <Route path="/help-desk" element={<HelpDesk />} />
    </Routes>
  );
}
