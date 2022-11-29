import insta from '../img/ins.svg';
import twitter from '../img/twi.svg';
import face from '../img/fb.svg';
import whats from '../img/whats.svg';

function Footer() {
    return (
        <div id='footer'>
            <div>
                <img src={insta} alt="logo insta" id='imgfooter' />
                <a href='/' className='linkFooter'>@magazine90</a>
            </div>
            <div>
                <img src={twitter} alt="logo twitter" id='imgfooter' />
                <a href='/' className='linkFooter'>@magazine90</a>
            </div>
            <div>
                <img src={face} alt="logo facebook" id='imgfooter' />
                <a href='/' className='linkFooter'>@magazine90</a>
            </div>
            <div>
                <img src={whats} alt="logo whatsapp" id='imgfooter' />
                <a href='/' className='linkFooter'>+55 (11) 99999-9999</a>
            </div>
        </div>
    )
}

export default Footer;