import css from './ProjectItem.module.css';

export default function ProjectItem({ name }) {
  return (
    <img
      className={css.img}
      src={`/${name}.png`}
      srcSet={`
        /${name}@2x.png 2x,`}
      alt="project icon"
    />
  );
}
