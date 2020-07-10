import React from "react";
import App, {Container} from "next/app";
import '../static/styles/styles.scss';


class Myapp extends App {
  render(){
    const { Component,pageProps} = this.props;
        return(
            <Container>
              <Component {...pageProps} />
            </Container>
        )
  }
}

export default  Myapp;