import PropTypes from 'prop-types'

ProfileCard.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    onClick: PropTypes.func,
}


export default function ProfileCard({ children, className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
