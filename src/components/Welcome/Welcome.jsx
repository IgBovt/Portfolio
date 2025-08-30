import Icon from '../../shared/Icon/Icon';
import { useState } from 'react';
import css from './Welcome.module.css';

export default function Welcome() {
  const mail = 'bovt.anastasia.ux@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(mail).catch(err => {
      console.error('Помилка копіювання:', err);
    });
  };

  return (
    <section className={css.container}>
      <div className={css.header}>
        <p className={css.auteur}>BOVT</p>
        <div className={css.mailContainer} onClick={handleCopy}>
          <Icon className={css.iconCopy} id="copy" />
          <p className={css.mail}>bovt.anastasia.ux@gmail.com</p>
        </div>
      </div>
      <div className={css.textContainer}>
        <div>
          <h1 className={css.title}>
            UI/UX <span className={css.span}>and</span>
            <br /> Product <span className={css.span}>Designer</span>
          </h1>
          <p className={css.text}>
            Lorem ipsum dolor sit amet consectetur. Porttitor pulvinar felis ut
            morbi convallis mauris placerat. Eu tristique ac id nam. Tincidunt
            interdum magna volutpat mi odio dolor a facilisis duis. Massa id
            sagittis imperdiet tellus nisl in mi.
          </p>
        </div>

        <Icon className={css.iconArrow} id="down" />
      </div>
    </section>
  );
}
