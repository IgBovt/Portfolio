import css from './ProjectList.module.css';
import { Link } from 'react-router';
import { projects } from '../../helpers/projects';

export default function ProjectList() {
  return (
    <section className={css.listContainer}>
      <div className={css.textContainer}>
        <h1 className={css.title}>
          <span className={css.span}>Selected</span> Projects
        </h1>
        <p className={css.text}>
          Tutors can create detailed profiles showcasing their expertise, build
          and manage courses, set availability, conduct video lessons, assign
          homework, and track financial results, including earnings, balance,
          and withdrawals.
        </p>
      </div>
      <ul className={css.list}>
        {projects.map(({ name, id }) => (
          <li key={id} className={css.listItem}>
            <Link to={`/project/${name}`}>
              <img
                className={css.img}
                src={`/public/desktop/${name}.png`}
                alt="project icon"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

//    <Link className={css.link} to={route} style={{ width: width }}>
//      {text}
//    </Link>;
