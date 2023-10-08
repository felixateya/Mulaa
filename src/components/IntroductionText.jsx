
function IntroductionText({className, text}) {
  return (
    <div className={className} data-aos="fade-left"
    data-aos-easing="linear"
    data-aos-duration="500">{text}</div>
  )
}

export default IntroductionText