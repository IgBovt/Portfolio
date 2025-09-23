import css from './ProjectHero.module.css';
import getProject from '../../helpers/getProject';

export default function ProjectHero() {
  const currentProject = getProject();

  return (
    <div className={css.container}>
      {currentProject.hero.length === 1 && (
        <img
          src={`/${currentProject.hero[0]}.png`}
          srcSet={`/${currentProject.hero[0]}.png 1x, /${currentProject.hero[0]}@2x.png 2x`}
          alt={currentProject.name}
        />
      )}
      {currentProject.hero.length === 2 && (
        <div className={css.flexContainer}>
          <img
            className={css.img}
            src={`/${currentProject.hero[0]}.png`}
            srcSet={`/${currentProject.hero[0]}.png 1x, /${currentProject.hero[0]}@2x.png 2x`}
            alt={`/${currentProject.hero[0] + '1'}`}
          />
          <img
            className={css.img}
            src={`/${currentProject.hero[1]}.png`}
            srcSet={`/${currentProject.hero[1]}.png 1x, /${currentProject.hero[1]}@2x.png 2x`}
            alt={`/${currentProject.hero[0]}` + ' 2'}
          />
        </div>
      )}
    </div>
  );
}
