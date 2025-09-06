import css from './Footer.module.css';

import Icon from '../../shared/Icon/Icon';
import { clsx } from 'clsx';

export default function Footer({ isActive }) {
  return (
    <footer className={clsx(css.container, isActive && css.active)}>
      <div className={css.contentContainer}>
        <h1 className={css.title}>Bovt Anastasia</h1>
        <p className={css.text}>
          Lorem ipsum dolor sit amet consectetur. Porttitor pulvinar felis ut
          morbi convallis mauris placerat. Eu tristique ac id nam. Tincidunt
          interdum magna volutpat mi odio dolor a facilisis duis. Massa id
          sagittis imperdiet tellus nisl in mi.
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
