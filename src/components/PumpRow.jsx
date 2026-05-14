export default function PumpRow() {
  return (
    <div className="pump-row grid grid-cols-12">
      {[1,2,3,4,5,6,7,8].map(n => (
        <div key={n} className="pump">
          <div style={{backgroundColor:"white", width:"100%", height:"50%"}}></div>
          Pump {n}
        </div>
      ))}
      <div className="col-span-3"></div>
      <div className="stop-all">
        STOP<br/>All<br/>Pumps
      </div>
    </div>
  );
}
