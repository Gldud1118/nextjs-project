import React from 'react';
import Home from '../components/Home';
import Layout from '../components/layouts/Layout';



const index = (props) => {
    return (
       <Layout hideAside={false}>
           <Home {...props}/>
       </Layout>
    )
}

export default index
