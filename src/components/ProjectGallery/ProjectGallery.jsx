import css from './ProjectGallery.module.css';
import getProject from '../../helpers/getProject';

export default function ProjectGallery() {
  const currentProject = getProject();

  return (
    <div className={css.container}>
      {currentProject.gallery.length === 1 && (
        <img
          src={`/${currentProject.gallery[0]}.png`}
          srcSet={`/${currentProject.gallery[0]}.png 1x, /${currentProject.gallery[0]}@2x.png 2x`}
          alt={currentProject.gallery[0]}
        />
      )}
      {currentProject.gallery.length === 3 && (
        <div className={css.container3}>
          <div className={css.coupleContainer}>
            <img
              className={css.img}
              src={`/${currentProject.gallery[0]}.png`}
              srcSet={`/${currentProject.gallery[0]}.png 1x, /${currentProject.gallery[0]}@2x.png 2x`}
              alt={`/${currentProject.gallery[0] + '1'}`}
            />
            <img
              className={css.img}
              src={`/${currentProject.gallery[1]}.png`}
              srcSet={`/${currentProject.gallery[1]}.png 1x, /${currentProject.gallery[1]}@2x.png 2x`}
              alt={`/${currentProject.gallery[0]}` + ' 2'}
            />
          </div>

          <img
            className={css.img}
            src={`/${currentProject.gallery[2]}.png`}
            srcSet={`/${currentProject.gallery[2]}.png 1x, /${currentProject.gallery[2]}@2x.png 2x`}
            alt={`/${currentProject.gallery[0]}` + ' 3'}
          />
        </div>
      )}
      {currentProject.gallery.length === 4 && (
        <div className={css.container4}>
          <div className={css.coupleContainer}>
            <img
              className={css.img}
              src={`/${currentProject.gallery[0]}.png`}
              srcSet={`/${currentProject.gallery[0]}.png 1x, /${currentProject.gallery[0]}@2x.png 2x`}
              alt={`/${currentProject.gallery[0] + '1'}`}
            />
            <img
              className={css.img}
              src={`/${currentProject.gallery[1]}.png`}
              srcSet={`/${currentProject.gallery[1]}.png 1x, /${currentProject.gallery[1]}@2x.png 2x`}
              alt={`/${currentProject.gallery[0]}` + ' 2'}
            />
          </div>
          <div className={css.coupleContainer}>
            <img
              className={css.img}
              src={`/${currentProject.gallery[2]}.png`}
              srcSet={`/${currentProject.gallery[2]}.png 1x, /${currentProject.gallery[2]}@2x.png 2x`}
              alt={`/${currentProject.gallery[0]}` + ' 3'}
            />
            <img
              className={css.img}
              src={`/${currentProject.gallery[3]}.png`}
              srcSet={`/${currentProject.gallery[3]}.png 1x, /${currentProject.gallery[3]}@2x.png 2x`}
              alt={`/${currentProject.gallery[0]}` + ' 3'}
            />
          </div>
        </div>
      )}
    </div>
  );
}
