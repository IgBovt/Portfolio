import css from './Welcome.module.css';
export default function Welcome() {
  return (
    <section className={css.container}>
      <div className={css.header}>
        <p className={css.auteur}>BOVT</p>
        <div className={css.mailContainer}>
          <p className={css.mail}>bovt.anastasia.ux@gmail.com</p>
        </div>
      </div>
      <div className={css.textContainer}>
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
    </section>
  );
}
