import { useState } from 'react'; // Importing useState
import Card from '../Card/Card';
import './style.scss';
import cardData from './../../data/data.json';
import Link from '../Link/Link';

function Main() {


    
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(prevState => !prevState);
    };

    console.log(cardData);

    return (
        <main>
            <div className="container">
                <div className="main__display">
                    <div className="main__display-item">
                        <div className="main__btn-wrapper">
                            <button className="main__display-btn">
                                <Link text="Display total price" />
                            </button>
                            <button className="main__display-btn">
                                <Link text="Includes all fees, before taxes" style="grey" />
                            </button>
                        </div>
                        <div className="main__toggle-wrapper">
                            <label className="switch">
                                <input type="checkbox" checked={isToggled} onChange={handleToggle} />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="main__cards">
                    {cardData.map((item, index) => (
                        <Card data={item} key={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Main;
