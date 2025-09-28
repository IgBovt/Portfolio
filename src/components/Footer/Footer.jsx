import css from './Footer.module.css';

import Icon from '../../shared/Icon/Icon';
import { clsx } from 'clsx';

export default function Footer({ isActive }) {
  return (
    <footer className={clsx(css.container, isActive && css.active)}>
      <div className={css.contentContainer}>
        <h1 className={css.title}>Bovt Anastasia</h1>
        <p className={css.text}>
          Designer with 5+ years of experience in end-to-end product design for
          startups and enterprises. Skilled in UX research, product strategy,
          design systems, and business analysis, with a strong focus on
          requirements definition and aligning design with business goals.
        </p>
        <a className={css.cvLink} href="/example.pdf" download="CV">
          Download CV
        </a>
        <div className={css.mailContainer}>
          <p className={css.mail}>bovt.anastasia.ux@gmail.com</p>
          <Icon className={css.iconArrow} id={'up'} />
        </div>
      </div>
    </footer>
  );
}
