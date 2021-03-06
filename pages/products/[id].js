import fetch from "isomorphic-unfetch";
import { motion } from 'framer-motion'
import Link from "next/link";
import Head from 'next/head'

import fadeInUp from '../../animations/fadeInUp'
import stagger from '../../animations/stagger'

const Product = props => (
  <>
  <Head>
    <title> Starbucks Drinks | {props.product.name} </title>
  </Head>
  <motion.div exit={{opacity: 0}} initial="initial" animate="animate">
    <div className='fullscreen'>
      <div className='product'>
        <motion.div 
          className='img'
          initial={{opacity: 0}}
          exit={{opacity: 0}}
          animate={{opacity: 1}}
        >
          <motion.img 
            initial={{x: 200, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{delay: 0.2}}
            key={props.product.image} 
            src={props.product.image}
          />
        </motion.div>
        <motion.div 
          variants={stagger(0.08)} 
          className='product-details'
        >
          <div className='inner'>
            <Link href='/'>
              <motion.div whileHover={{x: 5}} whiteTap={{x: 0}} variants={fadeInUp}>
                <a className='go-back' style={{color: '#f1f3f5;', marginTop: '100px'}}>&lt; Back to products</a>
              </motion.div>
            </Link>
            <motion.h1 variants={fadeInUp}>{props.product.name}</motion.h1>
            <motion.p variants={fadeInUp}>{props.product.details}</motion.p>
            <motion.div variants={fadeInUp} className='additonals'>
              <span>Soy Free</span>
              <span>Gluten Free</span>
            </motion.div>
            <motion.div variants={fadeInUp} className='qty-price'>
              <div className='qty'>
                <div className='minus'>-</div>
                <div className='amount'>1</div>
                <div className='add'>+</div>
              </div>
              <span className='price'>{props.product.price}</span>
            </motion.div>
            <motion.div variants={fadeInUp} className='btn-row'>
              <motion.button whileHover={{y: -5}} whileTap={{y: 0}} className='add-to-cart'> Add to cart</motion.button>
              <motion.button whileHover={{y: -5}} whileTap={{y: 0}} className='subscribe'> Subscribe</motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
  </>
);

Product.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://my-json-server.typicode.com/LauraBeatris/starbucks-server/drinks/${id}`
  );
  const product = await res.json();
  return { product };
};

export default Product;
