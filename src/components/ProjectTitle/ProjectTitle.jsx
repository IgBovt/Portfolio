import css from './ProjectTitle.module.css';
import { projects } from '../../helpers/projects';

export default function ProjectTitle() {
  const getProject = () => {
    return window.location.pathname.slice(1);
  };

  const currentProject = projects.find(
    project => project.name === getProject()
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>{currentProject.name}</h1>
      <div></div>
      <p>{currentProject.type}</p>
    </div>
  );
}
