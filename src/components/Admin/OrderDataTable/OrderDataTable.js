import React from 'react';

const OrderDataTable = ({orderlist}) => {
    return (
        <div className="container-fluid row">
            <div className="col-md-3">
            </div>
            <div className="col-md-9 my-5">
            </div>
            <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Service Name</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Phone</th>
            <th className="text-secondary" scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {
              orderlist.map((order, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{order.name}</td>
                    <td>{order.phone}</td>
                    <td>{order.email}</td>
                </tr>
                )
            }
        </tbody>
    </table>
        </div>
        
    );
};

export default OrderDataTable;