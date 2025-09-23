import Header from '../../shared/Header/Header';
import { Link } from 'react-router';

import css from './ProjectContainer.module.css';
import Icon from '../../shared/Icon/Icon';
import ProjectTitle from '../ProjectTitle/ProjectTitle';
import ProjectHero from '../ProjectHeroContainer/ProjectHero';

export default function ProjectContainer() {
  return (
    <div className={css.container}>
      <Header />
      <Link className={css.link} to={`/`}>
        <Icon className={css.iconBack} id="arrow" />
        <p className={css.text}>Back to projects</p>
      </Link>
      <ProjectTitle />
      <ProjectHero />
    </div>
  );
}
