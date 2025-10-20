import ContentWrapper from '../ContentWrapper/ContentWrapper.tsx';
import ContentHeader from '../ContentHeader/ContentHeader.tsx';
import { TestimonialsSectionConstants } from './TestimonialsSection.constants.ts';
import TestimonialCard from './components/TestimonialCard.tsx';
import styles from './TestimonialsSection.module.css';

const TestimonialsSection = () => {
  return (
    <ContentWrapper>
      <ContentHeader
        subTitle={TestimonialsSectionConstants.header.subTitle}
        title={TestimonialsSectionConstants.header.title}
        text={TestimonialsSectionConstants.header.text}
      />
      <ul className={styles.containerCards}>
        {TestimonialsSectionConstants.testimonials.map(
          ({ id, src, alt, cardTitle, cardSubTitle, cardText }) => {
            return (
              <TestimonialCard
                id={id}
                src={src}
                alt={alt}
                cardTitle={cardTitle}
                cardSubTitle={cardSubTitle}
                cardText={cardText}
              />
            );
          },
        )}
      </ul>
    </ContentWrapper>
  );
};

export default TestimonialsSection;
