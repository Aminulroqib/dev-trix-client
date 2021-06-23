import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar'

const Admin = () => {
    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-md-9 my-5">
            </div>
            
        </div>
    );
};

export default Admin;