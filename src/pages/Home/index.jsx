import React, {useState, useEffect} from 'react'
import Layout from '../../Components/Layout/index';
import Card from '../../Components/Card/index';
function Home() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if(!response.ok){
          throw new Error('Network response was not ok');
        }else{
          return response.json();
        } 
      })
      .then(data => setProducts(data))
      .catch(error => {
        console.log(error);
      })
  }, [])
  
  return (
    <Layout>
      Home
      <div className='grid grid-cols-4 gap-4'>
        {
          products?.map((product) => {
            return <Card key={product.id} product={product}/>
          })
        }
      </div>
      
    </Layout>
  )
}

export default Home