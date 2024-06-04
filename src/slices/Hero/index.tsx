import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from './Hero.module.css';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={{
        heading1: ({children})=>(
          <h1 className={styles.heading}>{children}</h1>
        )
      }}/>

      <PrismicRichText field={slice.primary.body} components={{
        paragraph: ({children})=>(
          <p className={styles.paragraph}>{children}</p>
        )
      }}/>

        <PrismicNextImage field={slice.primary.image} className={styles.image}/>

    </section>
  );
};

export default Hero;
