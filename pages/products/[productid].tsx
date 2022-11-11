import React from 'react';
import { useRouter } from 'next/router';

const Product = () => {
    const router = useRouter();
    const  productId  = router.query.productid;
    console.log(productId);
 
  return (
    
    <div>this is the product {productId}</div>
  )
}

export default Product