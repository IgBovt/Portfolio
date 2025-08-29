export default function Icon({ className, id }) {
  return (
    <svg className={className}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
}
