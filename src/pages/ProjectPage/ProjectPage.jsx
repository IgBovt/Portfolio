import Cooperation from '../../components/Cooperation/Cooperation';
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer';
import Header from '../../shared/Header/Header';
import css from '../ProjectPage/ProjectPage.module.css';

export default function ProjectPage() {
  return (
    <div className={css.container}>
      <Header />
      <ProjectContainer />
      <Cooperation />
    </div>
  );
}
