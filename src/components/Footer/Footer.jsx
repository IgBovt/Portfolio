import css from './Footer.module.css';
import { useState } from 'react';
import Icon from '../../shared/Icon/Icon';
import { clsx } from 'clsx';
import Modal from '../../shared/Modal/Modal';

export default function Footer({ isActive }) {
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
    <footer className={clsx(css.container, isActive && css.active)}>
      <div className={css.contentContainer}>
        <h1 className={css.title}>Bovt Anastasia</h1>
        <p className={css.text}>
          Designer with 5+ years of experience in end-to-end product design for
          startups and enterprises. Skilled in UX research, product strategy,
          design systems, and business analysis, with a strong focus on
          requirements definition and aligning design with business goals.
        </p>
        <a className={css.cvLink} href="/example.pdf" download="CV-Bovt">
          Download CV
        </a>
        <div className={css.mailContainer}>
          <div className={css.contacts}>
            <p className={css.mail} onClick={handleCopy}>
              bovt.anastasia.ux@gmail.com
            </p>
            <a
              className={css.link}
              href="https://www.linkedin.com/in/bovt-anastasia/"
              target="_blank"
            >
              Linkidin
            </a>
          </div>

          <Icon className={css.iconArrow} id={'up'} />
        </div>
      </div>
      <Modal isOpen={isOpen} />
    </footer>
  );
}
