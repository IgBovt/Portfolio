import css from './Modal.module.css';
import Icon from '../Icon/Icon';
import clsx from 'clsx';

export default function Welcome({ isOpen }) {
  return (
    <div className={clsx(css.container, isOpen ? css.open : css.close)}>
      <img src="/check-circle.png" />
      <p>Email successfully copied</p>
    </div>
  );
}
