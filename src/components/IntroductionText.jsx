import PropTypes from 'prop-types'


IntroductionText.propTypes = {
    className: PropTypes.string,
    text: PropTypes.object
}

function IntroductionText({className, text}) {
  return (
    <div className={className}>{text}</div>
  )
}

export default IntroductionText