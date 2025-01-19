import './style.scss'

const Link = ({ text, style, icon }) => {

    return (
        <a href='#' className={`link ${style === 'grey' ? 'link--grey' : ''}`}>
            {icon && <img src={icon} alt="" />}
            {text}
        </a>
    );
}
 
export default Link;