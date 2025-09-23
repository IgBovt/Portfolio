import css from './ProjectText.module.css';
import getProject from '../../helpers/getProject';

export default function ProjectText() {
  const currentProject = getProject();

  return (
    <div className={css.container}>
      <h3 className={css.title}>{currentProject.title}</h3>
      <div>
        <ul></ul>
        <div>
          <p></p>
          <div>
            <div>
              <p></p>
              <ul></ul>
            </div>
            <div>
              <p></p>
              <ul></ul>
            </div>
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
}
