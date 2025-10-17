import { Link } from 'react-router';
import Icon from '../../shared/Icon/Icon';
import css from './Welcome.module.css';
import Modal from '../../shared/Modal/Modal';
import { useState } from 'react';

export default function Welcome() {
  const [isOpen, setIsOpen] = useState(false);

  const mail = 'bovt.anastasia.ux@gmail.com';

  const handleCopy = () => {
    navigator.clipboard
      .writeText(mail)
      .then(() => {
        setIsOpen(true);
        setTimeout(() => setIsOpen(false), 2000);
      })
      .catch(err => {
        console.error('Помилка копіювання:', err);
      });
  };

  return (
    <section className={css.container}>
      <div className={css.header}>
        <Link to={'/'} className={css.auteur}>
          BOVT
        </Link>
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
            Designer with 5+ years of experience in end-to-end product design
            for startups and enterprises. Skilled in UX research, product
            strategy, design systems, and business analysis, with a strong focus
            on requirements definition and aligning design with business goals.
          </p>
        </div>

        <Icon className={css.iconArrow} id="down" />
      </div>
      {isOpen && <Modal />}
    </section>
  );
}
