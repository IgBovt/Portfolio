import css from './ProjectList.module.css';
import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router';
import { projects } from '../../helpers/projects';
import ProjectItem from '../ProjectItem/ProjectItem';

export default function ProjectList() {
  const [isActive, setIsActive] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    const handleWindowWheel = e => {
      if (!isActive && e.deltaY > 0) {
        setIsActive(true);
      }
    };

    window.addEventListener('wheel', handleWindowWheel);

    return () => {
      window.removeEventListener('wheel', handleWindowWheel);
    };
  }, [isActive]);

  return (
    <section className={clsx(css.listContainer, isActive && css.active)}>
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
              <ProjectItem name={name} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
