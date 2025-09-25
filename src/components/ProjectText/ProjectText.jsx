import css from './ProjectText.module.css';
import getProject from '../../helpers/getProject';

export default function ProjectText() {
  const currentProject = getProject();

  return (
    <div className={css.container}>
      <h3 className={css.title}>{currentProject.title}</h3>
      <div className={css.listContainer}>
        <div className={css.tagsContainer}>
          <ul className={css.tagList}>
            {currentProject.tags.map(tag => (
              <li className={css.tag} key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className={css.skillsLists}>
          <p className={css.text}>{currentProject.text}</p>
          <div className={css.columnContainer}>
            <div className={css.column}>
              <p>Key Challenges</p>
              <ul></ul>
            </div>
            <div className={css.column}>
              <p>Design Approach</p>
              <ul></ul>
            </div>
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
}
