import React from 'react';
import visa from '../../images/Payment_Icons/visa.png';
import master from '../../images/Payment_Icons/master.png';
import express from '../../images/Payment_Icons/express.png';
import amazon from '../../images/Payment_Icons/amazon.png';
import stripe from '../../images/Payment_Icons/stripe.png';
import paypal from '../../images/Payment_Icons/paypal.png';


const Payment = () => {

 const payment = [

    {
        id: 1,
        img: visa,
    },
    {
        id: 2,
        img: master,
    },
    {
        id: 3,
        img: express,
    },
    {
        id: 4,
        img: amazon,
    },
    {
        id: 5,
        img: stripe,
    },
    {
        id: 6,
        img: paypal,
    },

 ]


    return(
      <div className="payment">
        <div className="payment_icon">
{
    payment.map((item,index)=>{
        return(
            <div className="payment_icon_inner">
                <img src={item.img} alt="payment" className={[`paymants_image paymants_image${index} `]}/>
            </div>
        )
    })
}
        </div>
      </div>
  )
};

export default Payment;
