import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loding = () => {
    return (
        <div>
             <div className="d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="danger" />
    </div>
        </div>
    );
};

export default Loding;