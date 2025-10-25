import css from './Cooperation.module.css';

export default function Cooperation() {
  return (
    <div className={css.bgc}>
      <div className={css.container}>
        <h4 className={css.text}>
          <span className={css.span}>Let's talk</span> about
          <br /> our cooperation
        </h4>
        <div className={css.mailContainer}>
          <p className={css.mail}>bovt.anastasia.ux@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
