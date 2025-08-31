import css from './ProjectItem.module.css';

export default function ProjectItem({ name }) {
  return (
    <img
      className={css.img}
      src={`/public/desktop/${name}.png`}
      alt="project icon"
    />
  );
}
