import PropTypes from 'prop-types';


DesignCard.propTypes = {
card: PropTypes.object,
className: PropTypes.string,
onClick: PropTypes.func
}

export default function DesignCard({card, className, onClick}) {
  return (
    <div onClick={onClick} className={className}>{card}</div>
  )
}

 