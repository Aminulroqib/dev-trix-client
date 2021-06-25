import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderDataTable from '../OrderDataTable/OrderDataTable'
const OrderList = () => {
    const [orderlist, setOrderlist] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-coast-56902.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setOrderlist(data))
    }, [])
    return (
        <div className="container-fluid row" >
           <Sidebar></Sidebar>
        <div className="col-md-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Order List</h5>
            <OrderDataTable orderlist={orderlist}></OrderDataTable>
        </div>
    </div>
    );
};

export default OrderList;