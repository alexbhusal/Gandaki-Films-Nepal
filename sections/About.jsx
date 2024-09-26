'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="# Gandaki Films Nepal" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
         हाम्रो गतिशील फोटो स्टुडियोमा जानुहोस्, जहाँ रचनात्मकताले अविस्मरणीय छविहरू र मनमोहक भिडियोहरूमा दर्शनहरूलाई रूपान्तरण गर्न प्राविधिक उत्कृष्टता पूरा गर्दछ। पोर्ट्रेट, छोटो चलचित्र र संगीत भिडियोहरूमा विशेषज्ञता प्राप्त गर्दै, हामी अत्याधुनिक प्रविधिको साथमा अतुलनीय परिशुद्धता र भावनाका साथ पलहरूलाई अमर बनाउने सिनेमेटिक कथाहरू शिल्प गर्न कलात्मक स्वभावलाई मिसाउँछौं। पोर्ट्रेटको घनिष्टतादेखि चलचित्र र संगीत भिडियोहरूको भव्यतासम्म, प्रत्येक परियोजनालाई समयहीन र मनमोहक परिणाम सुनिश्चित गर्न सावधानीपूर्वक कार्यान्वयन गरिन्छ। हाम्रो स्टुडियोमा दृश्यहरू मार्फत कथा कथनको जादूको अनुभव लिनुहोस्, जहाँ प्रत्येक फ्रेम अनावरण हुनको लागि पर्खिरहेको उत्कृष्ट कृति हो।{' '}
        {/* <span className="font-extrabold text-white"> </span>{' '} */}
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
