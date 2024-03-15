import React, { useEffect } from "react";
import Navbar from "./Navbar";
import InputBox from "./InputBox";
import Dropdown from "./Dropdown";

function CreateOrder() {
  return (
    <div>
      <Navbar />
      <div className="grid gap-y-6">
        <div>
          <div className="flex font-medium">Order Details</div>
          <div className="grid grid-cols-3 grid-flow-row gap-x-8">
            <InputBox type="date" title="Received Date*" />
            <Dropdown title="Order Location*" />
            <InputBox type="text" title="Order Note*" className="col-span-3" />
          </div>
        </div>

        <div>
          <div className="flex font-medium">Poduct Details</div>
          <div className="grid grid-cols-3 grid-flow-row gap-x-8">
            <InputBox type="text" title="Name*" />
            <InputBox type="text" title="Code*" />
            <InputBox type="number" title="Quantity*" />
            <InputBox type="number" title="Price*" />
          </div>
        </div>

        <div>
          <div className="flex font-medium">Customer Details</div>
          <div className="grid grid-cols-3 grid-flow-row gap-x-8">
            <InputBox type="text" title="Custome Name*" />
            <InputBox type="email" title="Email*" />
            <InputBox type="number" title="Mobile Number*" />
            <InputBox
              type="text"
              title="Address Line*"
              className="col-span-2"
            />
            <InputBox type="number" title="Zip/Postal Code*" />
            <InputBox type="text" title="City*" />
            <InputBox type="text" title="State*" />
            <InputBox type="text" title="Country*" />
          </div>
        </div>

        <div>
          <div className="flex font-medium">Payment Details</div>
          <div className="grid grid-cols-3 grid-flow-row gap-x-8">
            <Dropdown title="Payment Method*" />
            <InputBox type="number" title="Card No*" />
            <InputBox type="text" title="Card Holder's Name*" />
            <Dropdown title="Payment Status*" />
            <InputBox type="date" title="Payment Date*" />
            <InputBox type="number" title="Amount*" />
            <InputBox type="text" title="Address*" className="col-span-2" />
            <InputBox type="number" title="Zip/Postal Code*" />
            <InputBox type="text" title="City*" />
            <InputBox type="text" title="State*" />
            <InputBox type="text" title="Country*" />
          </div>
        </div>

        <div>
          <div className="flex font-medium">Shipment Details</div>
          <div className="grid grid-cols-3 grid-flow-row gap-x-8">
            <InputBox type="date" title="Delivery Date*" />
            <InputBox type="text" title="Address Line*" className="col-span-2" />
            <InputBox type="number" title="Zip/Postal Code*" />
            <InputBox type="text" title="City*" />
            <InputBox type="text" title="State*" />
            <InputBox type="text" title="Country*" />
          </div>
        </div>

      </div>
    </div>
  );
}
export default CreateOrder;
