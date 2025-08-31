import css from './ProjectList.module.css';
import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router';
import { projects } from '../../helpers/projects';
import ProjectItem from '../ProjectItem/ProjectItem';

export default function ProjectList() {
  const [isActive, setIsActive] = useState(false);
  const listRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleWindowWheel = e => {
      if (!isActive && e.deltaY > 0) setIsActive(true);
    };
    window.addEventListener('wheel', handleWindowWheel);
    return () => window.removeEventListener('wheel', handleWindowWheel);
  }, [isActive]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const findScrollContainer = node => {
      let cur = node;
      while (cur && cur !== document.body) {
        const style = getComputedStyle(cur);
        const oy = style.overflowY;
        if (
          (oy === 'auto' || oy === 'scroll') &&
          cur.scrollHeight > cur.clientHeight
        ) {
          return cur;
        }
        cur = cur.parentElement;
      }
      return document.scrollingElement || document.documentElement;
    };

    const scrollContainer = findScrollContainer(el);
    scrollContainerRef.current = scrollContainer;

    const THRESHOLD = 10;

    const getScrollTop = () => {
      if (
        scrollContainer === document.scrollingElement ||
        scrollContainer === document.documentElement
      ) {
        return (
          document.scrollingElement?.scrollTop ||
          document.documentElement.scrollTop
        );
      }
      return scrollContainer.scrollTop;
    };

    const handleWheel = e => {
      const st = getScrollTop();
      const atTop = st <= 1;

      if (isActive && atTop && e.deltaY < -THRESHOLD) {
        setIsActive(false);
        e.stopPropagation();
        e.preventDefault();
        return;
      }

      if (!isActive && e.deltaY > THRESHOLD) {
        setIsActive(true);
      }
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
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
      <ul ref={listRef} className={css.list}>
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
