import css from './ProjectTitle.module.css';
import getProject from '../../helpers/getProject';

export default function ProjectTitle() {
  const currentProject = getProject();

  return (
    <div className={css.container}>
      <h1 className={css.title}>{currentProject.name}</h1>
      <div className={css.line}></div>
      <p className={css.type}>{currentProject.type}</p>
    </div>
  );
}
