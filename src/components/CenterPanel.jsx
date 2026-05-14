import {
  FaGasPump,
  FaRegCreditCard,
  FaMoneyBillWave,
  FaCreditCard,
  FaBolt,
  FaTicketAlt,
  FaArrowLeft,
  FaArrowRight,
  FaReply,
  FaMobile,
  FaQrcode
} from "react-icons/fa";
import bills from '../assets/istockphoto-1404476556-612x612-removebg-preview.png';
import visa from '../assets/visa.png';
import mastercard from '../assets/mastercard.png';
import amex from '../assets/amex.png';
import bundle from '../assets/360_F.png';

export default function CenterPanel() {
  return (
    <div style={{width:"100%"}}>
      <div className="grid grid-cols-4">
        <div>
          <div className="stop-button">
            <p>Stop</p> 
            <p>Pump</p>
          </div>
        </div>
        <div>
          <div className="pay-button active" style={{position:"relative"}}>
            <img src={bundle} alt="Bundle" style={{position: "absolute", bottom: "0%",width:"40%"}}/>
            <FaReply style={{position: "absolute", bottom: "30%",width:"50%"}}/>
            <div style={{position: "absolute", top: "0%", width: "100%", textAlign: "center"}}>PrePay</div>
          </div>
          <div className="big-button">Discount Sales</div>
          <div className="big-button">Non Discount Sales</div>
          <div className="big-button">Tax</div>
        </div>
        <div>
          <div className="pay-button disabled" style={{position:"relative"}}>
            <img src={bundle} alt="Bundle" style={{position: "absolute", bottom: "0%",width:"40%"}}/>
            <div style={{position: "absolute", top: "0%", width: "100%", textAlign: "center"}}>Pay</div>
          </div>
        </div>
        <div>
          <div className="pay-button disabled" style={{position:"relative"}}>
            <img src={bundle} alt="Bundle" style={{position: "absolute", bottom: "0%",width:"40%"}}/>
            <div style={{position: "absolute", top: "0%", width: "100%", textAlign: "center"}}>Pay</div>
          </div>
          <div className="big-button yellow-button">Fuel Correction</div>
          <div style={{height:"6rem"}}></div>
          <div className="big-button dark-green">Manual Air Miles</div>
        </div>
        
        
        
      </div>
      <div className="grid grid-cols-9">
          <div className="pay-tall bg-emerald-600 py-1">
            <FaArrowLeft color="lime" size="90%" className="fa-lg"/>
          </div>
          <div className="pay-tall green col-span-2">
            Cash
            <img src={bills} alt="Bills" style={{width:"60%"}} />
          </div>

          <div className="pay-tall blue col-span-2">
            Credit Debit
            <img src={mastercard} alt="Mastercard" style={{width:"30%", position:"absolute", top:"10%", right:"10%"}} />
            <img src={visa} alt="Visa" style={{width:"30%", position:"absolute", top:"35%", right:"15%"}} />
            <img src={amex} alt="American Express" style={{width:"30%", position:"absolute", top:"60%", right:"3%"}} />
          </div>

          <div className="pay-tall purple col-span-2">
            <div style={{position:"absolute", left: "0px"}}>Shell EasyPay</div>
            
            <FaMobile size="80" style={{position:"absolute", right: "-5%"}}/>
            <FaQrcode  size="50" style={{position:"absolute", right: "3%", color:"black"}}/>
          </div>

          <div className="pay-tall gray col-span-2">
            Lottery Winner
          </div>
      </div>
    </div>
  );
}
