import flutter from '../assets/SVGIcons/flutter.svg'
import python from '../assets/SVGIcons/python.svg'
import adobephotoshop from '../assets/SVGIcons/adobe-photoshop.svg'
import django from '../assets/SVGIcons/django.ico'
import adobepremierpro from  '../assets/SVGIcons/adobe-premiere-pro.svg'
import html5 from  '../assets/SVGIcons/html-5.svg'
import figma from  '../assets/SVGIcons/figma.svg'
import css3 from  '../assets/SVGIcons/css3.svg'
import javascript from  '../assets/SVGIcons/javascript.svg'
import adobeIllustrator from  '../assets/SVGIcons/adobe-illustrator.svg'
import dart from  '../assets/SVGIcons/dart.svg'
import PostgresSQL from  '../assets/SVGIcons/PostgreSQL-Dark.svg'
import MySQL from  '../assets/SVGIcons/MySQL-Dark.svg'
import Firebase from  '../assets/SVGIcons/Firebase-Dark.svg'
import Github from  '../assets/SVGIcons/Github-Dark.svg'


function Circle() {
  return (
    <div className='circle'>
         <span style={{ "--i": 1 }}><img src={flutter} alt='flutter'/></span>
         <span style={{ "--i": 2 }}><img src={python} alt='python'/></span>
         <span style={{ "--i": 3 }}><img src={adobephotoshop} alt='adobephotoshop'/></span>
         <span style={{ "--i": 4 }}><img src={django} alt='django'/></span>
         <span style={{ "--i": 5 }}><img src={adobepremierpro} alt='adobepremierpro'/></span>
         <span style={{ "--i": 6 }}><img src={html5} alt='html5'/></span>
         <span style={{ "--i": 7 }}><img src={figma} alt='figma'/></span>
         <span style={{ "--i": 8 }}><img src={css3} alt='css3'/></span>
         <span style={{ "--i": 9 }}><img src={javascript} alt='javascript'/></span>
         <span style={{ "--i": 10 }}><img src={adobeIllustrator} alt='adobeIllustrator'/></span>
         <span style={{ "--i": 11 }}><img src={dart} alt='dart'/></span>
         <span style={{ "--i": 12 }}><img src={PostgresSQL} alt='PostgresSQL'/></span>
         <span style={{ "--i": 13 }}><img src={MySQL} alt='MySQL'/></span>
         <span style={{ "--i": 14 }}><img src={Firebase} alt='Firebase'/></span>
         <span style={{ "--i": 15 }}><img src={Github} alt='Github'/></span>
         
    </div>
  )
}

export default Circle