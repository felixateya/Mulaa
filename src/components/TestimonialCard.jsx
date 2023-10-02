import PropTypes from 'prop-types'
TestimonialCard.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
  }
  
  function TestimonialCard ({children, className}){
    return (
      <div className={className}>{children}</div>
    )
  }

export default TestimonialCard