import {FaArrowRight} from "react-icons/fa";
export default function BottomBar() {
  return (
    <div className="grid grid-cols-10" style={{background:"#6F8699", height: ""}}>
      <div className="text-center text-2xl" style={{background:"#102E39", height:""}}>Menu Alarms</div>
      <div className="bottom-bar col-span-6 align-middle">
        Configuration Update Required - Touch to apply and restart.
      </div>
      <div></div>
      <div style={{background:"#91ABB0", height:""}}><FaArrowRight color="#8A1B19" size="90"/></div>
    </div>
  );
}
