import css from './ProjectList.module.css';
import { Link } from 'react-router';

export default function ProjectList() {
  const projects = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section className={css.listContsiner}>
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
        {projects.map((project, index) => (
          <li key={index} className={css.listItem}>
            <Link to="/project/:id">Dashboard</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

//    <Link className={css.link} to={route} style={{ width: width }}>
//      {text}
//    </Link>;
