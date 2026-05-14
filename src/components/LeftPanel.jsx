import {
  FaGasPump,
  FaRegCreditCard,
  FaMoneyBillWave,
  FaCreditCard,
  FaBolt,
  FaTicketAlt,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa";
export default function LeftPanel() {
  return (
    <div>
      Radiant Systems Model: RPOS CC 06-100
      <div className="grid grid-cols-4">

        <div className="col-span-3">
          
          <div className="transaction-box"></div>
          <div style={{width:"100%", height:"4rem", backgroundColor:"#0E1E51", marginTop:"4rem"}}></div>
          <div className="grid grid-cols-3 text-center ">
            <div className="px-4" style={{backgroundColor:"#97B3BE"}}><FaArrowUp color="#B8392B" size="90%"/></div>
            <div className="text-2xl" style={{backgroundColor:"#97B3BE", color:"#0E1E51"}}>
              Print Receipt
            </div>
            <div className="px-4" style={{backgroundColor:"#97B3BE"}}><FaArrowDown color="#B8392B" size="90%"/></div>
          </div>
        </div>
        

        <div className="col-span-1">
          <div className="left-button">Other Funct.</div>
          <div className="left-button">Enter UPC/PLU</div>
          <div className="left-button">Price Check</div>
          <div className="left-button">Change Quantity</div>
          <div className="left-button">Void Item</div>
          <div className="left-button">Price Override</div>
        </div>
        
      </div>
    </div>
  );
}
