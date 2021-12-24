import { CartList } from "./CartList";
import "./index.css";

export default function App() {
  const priceCartList = [
    {
     plan : "FREE",
     amount : "$0",
     usable : ["Single User", "5GB Storage", "Unlimited Public Projects","Community Access"],
     notUsable: ["Unlimted Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Report"]
    },
    {
      plan : "PLUS",
      amount : "$9",
      usable : ["5 Users","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain"],
      notUsable: ["Monthly Status Report"]
     },
     {
      plan : "PRO",
      amount : "$49",
      usable : ["Unlimited Users", "150 GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Unlimited Free Subdomains","Monthly Status Reports"],
      notUsable: []
     }
    ]
  return (
    <div className="App">
      <PriceCart cart={priceCartList}/>
    </div>
  );
}

function PriceCart({cart}){
  return (
    <div className="main-container">
      {cart.map(({plan, amount, usable, notUsable})=>
       <CartList plan={plan} amount={amount} usable={usable} notUsable={notUsable}/>)}
    </div>
  )
}

