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
              <p className={css.listTitle}>Key Challenges</p>
              <ul>
                {currentProject.KeyChallenges.map(item => (
                  <li className={css.listTextItem} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={css.column}>
              <p className={css.listTitle}>Design Approach</p>
              <ul>
                {currentProject.DesignApproach.map(item => (
                  <li className={css.listTextItem} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
}
