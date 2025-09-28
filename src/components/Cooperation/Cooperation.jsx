import css from './Cooperation.module.css';
import Icon from '../../shared/Icon/Icon';

export default function Cooperation() {
  const mail = 'bovt.anastasia.ux@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(mail).catch(err => {
      console.error('Помилка копіювання:', err);
    });
  };

  return (
    <div className={css.container}>
      <h4 className={css.text}>
        <span className={css.span}>Let's talk</span> about
        <br /> our cooperation
      </h4>
      <div className={css.mailContainer} onClick={handleCopy}>
        <p className={css.mail}>bovt.anastasia.ux@gmail.com</p>
        <Icon className={css.iconCopy} id="copy" />
      </div>
    </div>
  );
}
