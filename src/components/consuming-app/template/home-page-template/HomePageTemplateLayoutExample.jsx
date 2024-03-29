import React from 'react';
import {AspectRatio} from '@radix-ui/react-aspect-ratio';
import styles from "./HomePageTemplate.module.scss";
import { HomePageHero } from './HomePageHero';


// Content on this page is for demonstration purposes only.
// The sizes and colors of the sections are only to demonstrate the layout of the page in the template
// and are not intended to be used in the final product.
export const HomePageTemplateLayoutExample = ({children}) => {
  // const {heroSection,findYourT5Section, communitySection, reviewsSection} = children;
  // const {heroImage} = heroSection;
  return(
    <>
      <section className={styles.HeroSection} style={{ backgroundColor: "yellowgreen"}}>
        <HomePageHero />
      </section>
      <section style={{height: "20rem",backgroundColor: "lightgray"}}>
        {/*<h4>Find Your T5 Section</h4>*/}
        {/*<div>*/}
        {/*  <p>The current window class is: <strong style={{fontWeight: "900"}}>{windowClassData.windowClass}</strong></p>*/}
        {/*  <p>The user's device is a touch device: {isTouchDevice}</p>*/}
        {/*</div>*/}
      </section>
      <section style={{height: "20rem",backgroundColor: "mediumpurple"}}>
        {/*<h4>Community Section</h4>*/}
        {/*<div>*/}
        
        {/*</div>*/}
      </section>
      <section style={{height: "20rem",backgroundColor: "dimgray"}}>
        {/*<h4>Reviews Section</h4>*/}
        {/*<div>*/}
        
        {/*</div>*/}
      </section>
    </>
  )
}
