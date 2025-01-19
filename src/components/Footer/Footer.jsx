import './style.scss'
import Link from '../Link/Link'

import globIcon from './globe.svg'
import usdIcon from './usd.svg'
import arrowTopIcon from './arrow-top.svg'
import pivacyIcon from './pivacy.svg'

function Footer () {
    return (
        <footer>
            <div className="container">
                <div className="footer__wraper">
                    <div className="footer__information">
                        <p className="footer__information-text">© 2023 Airbnb, Inc.</p>
                        <p className="footer__information-text">Terms</p>
                        <p className="footer__information-text">Sitemap</p>
                        <p className="footer__information-text">Privacy</p>
                        <div className="footer__information-wraper">
                            <p className="footer__information-text">Your Privacy Choices</p>
                            <img src={pivacyIcon} alt="alt" className="footer__information-img" />
                        </div>
                    </div>
                    <div className="footer__menu">
                        <button className="footer__menu-btn">
                            <Link icon={globIcon} text="English (US)"/>
                        </button>
                        <button className="footer__menu-btn">
                            <Link icon={usdIcon} text="USD"/>
                        </button>
                        <button className="footer__menu-btn">
                                <Link icon={arrowTopIcon} text="Support & resources"/>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer