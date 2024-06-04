import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from './Hero.module.css';
import Bounded from "@/components/Bounded";


const components: JSXMapSerializer = {
  heading1: ({children})=>(
    <h1 className={styles.heading}>{children}</h1>
  ),
  paragraph: ({children})=>(
    <p className={styles.paragraph}>{children}</p>
  ),
}


/**
 * Props for `Hero`.
 */

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

      <PrismicRichText 
      field={slice.primary.heading} 
      components={components}
      />

      <PrismicRichText 
      field={slice.primary.body} 
      components={components}
      />

      <PrismicNextImage field={slice.primary.image} className={styles.image}/>

    </Bounded>
  );
};

export default Hero;
