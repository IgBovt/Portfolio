import css from './Modal.module.css';
import Icon from '../Icon/Icon';

export default function Welcome() {
  return (
    <div className={css.container}>
      <Icon className={css.icon} id="done" />
      <p>Email successfully copied</p>
    </div>
  );
}
