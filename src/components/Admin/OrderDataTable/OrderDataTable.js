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
            <th className="text-secondary" scope="col">Description</th>
            </tr>
        </thead>
        <tbody>
            {
              orderlist.map((order, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{order.name}</td>
                    <td>{order.description}</td>
                </tr>
                )
            }
        </tbody>
    </table>
        </div>
        
    );
};

export default OrderDataTable;