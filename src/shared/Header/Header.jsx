import css from './Header.module.css';
import Icon from '../Icon/Icon';
import { Link } from 'react-router';
import { useState } from 'react';
import Modal from '../Modal/Modal';

export default function Header() {
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
    <>
      <div className={css.header}>
        <div className={css.container}>
          <Link className={css.auteur} to={'/'}>
            BOVT
          </Link>
          <div className={css.mailContainer} onClick={handleCopy}>
            <Icon className={css.iconCopy} id="copy" />
            <p className={css.mail}>bovt.anastasia.ux@gmail.com</p>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} />
    </>
  );
}
