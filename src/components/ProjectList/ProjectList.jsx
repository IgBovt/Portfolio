import css from './ProjectList.module.css';
import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router';
import { projects } from '../../helpers/projects';
import ProjectItem from '../ProjectItem/ProjectItem';
import Icon from '../../shared/Icon/Icon';
import cursorPng from '../../assets/cursor.png';

export default function ProjectList({ onScrollFooter }) {
  const [isList, setIsList] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null);
  const [activeId, setActiveId] = useState(null);

  // ======================================

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

  // ======================================

  useEffect(() => {
    const handleWheel = e => {
      const scrollDown = e.deltaY > 0;
      const scrollUp = e.deltaY < 0;

      if (isActive && scrollDown && e.target.closest(`.${css.listContainer}`)) {
        setIsList(true);
      }

      if (
        isActive &&
        scrollUp &&
        e.target.closest(`.${css.listContainer}`) &&
        sectionRef.current.scrollTop === 0
      ) {
        setIsList(false);
      }

      if (!scrollDown) {
        onScrollFooter(false);
      } else {
        const el = sectionRef.current;
        if (!el) return;
        const atBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 5;
        if (atBottom) onScrollFooter(true);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [onScrollFooter, isActive]);

  // ======================================

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleScroll = () => {
      const items = el.querySelectorAll(`.${css.listItem}`);
      const center = el.scrollTop + el.clientHeight / 2;

      let newActiveId = null;

      items.forEach(item => {
        const itemCenter = item.offsetTop + item.clientHeight / 2;
        if (Math.abs(center - itemCenter) < item.clientHeight / 2) {
          item.classList.add(css.active);
          newActiveId = item.dataset.id;
        } else {
          item.classList.remove(css.active);
        }
      });

      if (newActiveId !== activeId) setActiveId(newActiveId);
      if (isActive === false) setActiveId(0);
    };

    el.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => el.removeEventListener('scroll', handleScroll);
  }, [activeId, isActive]);

  // ==================================
  const getColorsById = id => {
    switch (id) {
      case '1':
        return '#8237E57A';
      case '2':
        return '#0B55E98C';
      case '3':
        return '#45A17B7A';
      case '4':
        return '#153DA59E';
      case '5':
        return '#96867A91';
      case '6':
        return '#1248B8AD';
      case '7':
        return '#FC644682';
      default:
        return '0c0d0e';
    }
  };

  return (
    <section
      className={clsx(css.listContainer, isActive && css.active)}
      style={{
        '--color': getColorsById(activeId),
      }}
    >
      <h1 className={css.title}>
        <span className={css.span}>Selected</span> Projects
      </h1>
      <p className={css.text}>
        I have designed digital products across healthcare, education, finance,
        and travel industries — from internal business systems and analytics
        platforms to mobile apps for healthcare and sports. My work covers the
        full cycle: research, user flows, UX/UI design, and collaboration with
        stakeholders and development teams.
      </p>
      <ul ref={sectionRef} className={clsx(css.list, isList && css.listActive)}>
        {projects.map(({ name, id }) => (
          <li
            key={id}
            className={css.listItem}
            data-id={id}
            style={{
              cursor: `url(${cursorPng}) 16 16, auto`,
            }}
          >
            <Link className={css.link} to={`/${name}`}>
              <ProjectItem name={name} />
            </Link>
          </li>
        ))}
      </ul>
      <Icon className={css.iconArrow} id="down" />
    </section>
  );
}
