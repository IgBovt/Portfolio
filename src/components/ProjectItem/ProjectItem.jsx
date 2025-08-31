import css from './ProjectItem.module.css';

export default function ProjectItem({ name }) {
  return (
    <img
      className={css.img}
      src={`.desktop/${name}.png`}
      srcSet={`
        /desktop/${name}@2x.png 2x,`}
      alt="project icon"
    />
  );
}
