import Head from 'next/head'
import Header from '../components/header'

import  '../styles/404.css'

function Custom404() {
  return (
    <div className='container'>
      <Head>
        <title>@joaovitorzv • 404 Not Found</title>
      </Head>
      <Header />
      <main className='content'>
        <h2>404</h2>
        <p>Sorry, page not found!</p>
      </main>
    </div>
  ) 
}

export default Custom404; 
