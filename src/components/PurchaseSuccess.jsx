import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PurchaseSuccess = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 4500);

  if(!id) navigate("/");

  return (
    <div className='container'>
      <div className="card">
        <div className="card-checkmark">
          <i className="checkmark">✓</i>
        </div>
        <h1>Purchase success</h1> 
        <p>We received your purchase request. We'll be in touch shortly <br/> Order number: {id}</p>
      </div>
    </div>
  )
}

export default PurchaseSuccess