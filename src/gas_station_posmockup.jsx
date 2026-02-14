import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';

export default function GasStationPOSMockup() {
  const pumps = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-blue-600 p-4">
      {/* Top Pump Row */}
      <div className="grid grid-cols-9 gap-3 mb-4">
        {pumps.map((pump) => (
          <Card key={pump} className="rounded-2xl shadow-lg bg-blue-900 text-white">
            <CardContent className="p-3 text-center">
              <div className="text-sm">Pump</div>
              <div className="text-xl font-bold">{pump}</div>
            </CardContent>
          </Card>
        ))}
        <Button className="rounded-2xl shadow-lg bg-red-600 hover:bg-red-700 text-white text-lg">
          STOP ALL
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {/* Left Panel */}
        <Card className="col-span-2 rounded-2xl shadow-xl bg-blue-900 text-white">
          <CardContent className="p-4 space-y-3 bg-blue-700 ">
            <div className="text-white">Radiant Systems Model:RPOS CC 06-100</div>
            <div className="grid grid-cols-2">
              
              <div>
                <div className="h-70 rounded-2xl bg-white" />
                  <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="bg-white">
                  <img width={"100%"} src="https://media.istockphoto.com/id/2203509220/vector/simple-upward-red-arrow-illustration.jpg?s=612x612&w=0&k=20&c=J9If748KA-Zan05bPcpHOE3HHEnOsjNPliRCzIbltfQ=" alt="" />
                </div>
                
                <Button className="rounded-2xl">Print Receipt</Button>
                <div className="bg-white">
                  <img width={"100%"} src="https://images.freeimages.com/clg/images/29/296330/red-down-arrow_f?h=350" alt="" />
                
                </div>
              </div>
              </div>
              

              <div className="gap-2">
                
                  <div className="m-1 col bg-white w-21"><Button className="rounded-2xl indigo-50">Other Funct.</Button></div>
                
                  <div className="m-1 bg-green-500 w-21"><Button className="rounded-2xl">Enter UPC/PLU</Button></div>
                  <div className="m-1 bg-green-500 w-21"><Button className="rounded-2xl">Price Check</Button></div>
                  <div className="m-1 bg-green-500 w-21"><Button className="rounded-2xl">Change Quantity</Button></div>
                  <div className="m-1 bg-green-500 w-21"><Button className="rounded-2xl bg-red-500 hover:bg-red-600">Void Item</Button></div>
                  <div className="m-1 bg-green-500 w-21"><Button className="rounded-2xl">Price Override</Button></div>
                
              </div>
            </div>
            

            
          </CardContent>
        </Card>

        {/* Center Panel */}
        <Card className="col-span-2 rounded-2xl shadow-xl bg-blue-900 text-white">
          <CardContent className="p-6 grid grid-cols-2 gap-6">
            <div className="w-35 h-25 bg-lime-400 hover:bg-green-600 text-xl">
              <Button >
                Discount Sales
              </Button>
            </div>
              
            <div className="w-35 h-25 bg-yellow-300 hover:bg-yellow-600 text-xl">
              <Button>
                Fuel Correction
              </Button>
            </div>
              
            <div className="w-35 h-25 bg-lime-400 hover:bg-green-600 text-xl">
              <Button>
                Non-Discount Sales
              </Button>
            </div>
            <div className="w-35 h-25">
            
            </div>
              
            <div className="w-35 h-25 bg-lime-400 hover:bg-green-600 text-xl">
              <Button >
                Tax
              </Button>
            </div>
            <div className="bg-green-800 w-35 h-25">
              <Button >
                Manual Air Miles
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Right Panel */}
        <Card className="col-span-1 rounded-2xl shadow-xl bg-blue-900 text-white">
          <CardContent className="p-4 space-y-4">
            <Button className="w-full h-16 rounded-2xl bg-blue-700">PrePay</Button>
            <Button className="w-full h-16 rounded-2xl bg-blue-700">Pay</Button>
            <Button className="w-full h-16 rounded-2xl bg-green-600 hover:bg-green-700">Cash</Button>
            <Button className="w-full h-16 rounded-2xl bg-indigo-600 hover:bg-indigo-700">Credit/Debit</Button>
            <Button className="w-full h-16 rounded-2xl bg-gray-700">Lottery Winner</Button>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Status Bar */}
      <div className="mt-4 bg-yellow-600 text-black text-center py-3 rounded-2xl shadow-lg font-semibold">
        Configuration Update Required – Touch to apply and restart.
      </div>
    </div>
  );
}
