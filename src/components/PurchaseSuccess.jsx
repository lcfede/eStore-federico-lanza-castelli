import { Divider } from '@mui/material';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PurchaseSuccess = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  if(!id) navigate("/");

  return (
    <div className='container'>
      <div className="card">
        <div className="card-checkmark">
          <i className="checkmark">✓</i>
        </div>
        <h1>Purchase success</h1> 
        <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>
        <p style={{marginBottom: '15px'}}>We received your purchase request. We'll be in touch shortly.</p>
        <p>Order number: <b>{id}</b></p>
      </div>
    </div>
  )
}

export default PurchaseSuccess