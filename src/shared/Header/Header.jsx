import css from './Header.module.css';
import Icon from '../Icon/Icon';

export default function Header() {
  const mail = 'bovt.anastasia.ux@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(mail).catch(err => {
      console.error('Помилка копіювання:', err);
    });
  };
  return (
    <div className={css.header}>
      <p className={css.auteur}>BOVT</p>
      <div className={css.mailContainer} onClick={handleCopy}>
        <Icon className={css.iconCopy} id="copy" />
        <p className={css.mail}>bovt.anastasia.ux@gmail.com</p>
      </div>
    </div>
  );
}
