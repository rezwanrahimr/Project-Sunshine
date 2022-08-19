import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Service = () => {
    const [service,setService] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data));
    })
    
    return (
        <div className=''>
            <h1 className='f-bold mt-5'>Services</h1>
            <div className='row mt-5 '>
           
            {
                service.map(services => 
                    <Card className='p-3 m-3' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={services.image} />
      <Card.Body>
        <Card.Title>{services.titel}</Card.Title>
        <Card.Text>
          {services.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>)
            }
            
            </div>
        </div>
    );
};

export default Service;