import css from './ProjectList.module.css';
import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router';
import { projects } from '../../helpers/projects';
import ProjectItem from '../ProjectItem/ProjectItem';

export default function ProjectList({ onScrollBottomChange }) {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleWheel = e => {
      if (!isActive && e.deltaY > 0) setIsActive(true);
      if (isActive && sectionRef.current.scrollTop === 0 && e.deltaY < 0) {
        setIsActive(false);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isActive]);

  useEffect(() => {
    const handleWheel = e => {
      const scrollDown = e.deltaY > 0;

      if (!scrollDown) {
        onScrollBottomChange(false);
      } else {
        const el = sectionRef.current;
        if (!el) return;
        const atBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 5;
        if (atBottom) onScrollBottomChange(true);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [onScrollBottomChange]);

  return (
    <section
      ref={sectionRef}
      className={clsx(css.listContainer, isActive && css.active)}
    >
      <div className={css.textContainer}>
        <h1 className={css.title}>
          <span className={css.span}>Selected</span> Projects
        </h1>
        <p className={css.text}>
          Tutors can create detailed profiles showcasing their expertise...
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
