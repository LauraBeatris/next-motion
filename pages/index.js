import Link from "next/link";
import { motion } from 'framer-motion'
import fetch from "isomorphic-unfetch";

import fadeInUp from '../animations/fadeInUp'
import stagger from '../animations/stagger'

/* 
  === 3 Important Props ===
  animate => Defines animation. example => x: 0
  initial => Defines the initial state of a animation or starting point. example => x: 60
  exit => Defines animation when component exists/unmount
*/

/* 
  Variants => Allow us to write our animations in variables
  and also define unique names to them
*/

const Index = props => (
  /* Fadein effect */
  <motion.div exit={{opacity: 0}} initial="initial" animate="animate">
    <div className='container center'>
      <div className='title'>
        <h1>Select a protein</h1>
      </div>
      <motion.div variants={stagger(0.3)} className='product-row'>
        {props.products.map(product => (
          <Link
            key={product.id}
            href='/products/[id]'
            as={`/products/${product.id}`}>
            <motion.div variants={fadeInUp} className='card'>
              <span className='category'>Protein</span>
              <motion.img initial={{x: 60, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 0.2}} key={product.image} src={product.image} width={250} />
              <div className='product-info'>
                <h4>{product.name}</h4>
                <span>{product.price}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  </motion.div>
);

Index.getInitialProps = async function() {
  const res = await fetch(
    "http://my-json-server.typicode.com/wrongakram/demo/products"
  );
  const data = await res.json();
  return {
    products: data
  };
};

export default Index;
