
function IntroductionText({className, text}) {
  return (
    <div className={className} data-aos="fade-out"
    data-aos-easing="linear"
    data-aos-duration="5000">{text}</div>
  )
}

export default IntroductionText