import css from './Header.module.css';
import Icon from '../Icon/Icon';
import { Link } from 'react-router';

export default function Header() {
  const mail = 'bovt.anastasia.ux@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(mail).catch(err => {
      console.error('Помилка копіювання:', err);
    });
  };
  return (
    <div className={css.header}>
      <Link className={css.auteur} to={'/'}>
        BOVT
      </Link>
      <div className={css.mailContainer} onClick={handleCopy}>
        <Icon className={css.iconCopy} id="copy" />
        <p className={css.mail}>bovt.anastasia.ux@gmail.com</p>
      </div>
    </div>
  );
}
