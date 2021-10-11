import { GetStaticProps } from "next";

function Custom404() {
  return null
}

export const getStaticProps: GetStaticProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: true
    }
  } 
}

export default Custom404; 
