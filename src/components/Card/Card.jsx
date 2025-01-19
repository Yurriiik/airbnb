import { useState } from 'react'; // Importing useState

import styles from './style.module.scss'
import star from './star.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Modal from '../Modal/Modal';



function Card ({ data }) {

    const {
        location,
        desc,
        rating,
        price_per_night,
        dates_available,
        img,
        img2x
    } = data;


    const [modalInfoIsOpen, setModalInfoOpen] = useState(false);


    return (
        <article className={styles.card}>
            
            <a href="#" className={styles.link} onClick={() => setModalInfoOpen(true)}></a>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                <img className={styles.img} src={img} srcSet={`${img2x} 2x`} alt="Alt" />
                </SwiperSlide>
                <SwiperSlide>
                <img className={styles.img} src={img} srcSet={`${img2x} 2x`} alt="Alt" />
                </SwiperSlide>
                <SwiperSlide>
                <img className={styles.img} src={img} srcSet={`${img2x} 2x`} alt="Alt" />
                </SwiperSlide>
            </Swiper>

            <div className={styles.descWraper}>
                <div className={styles.titleWraper}>
                    <h1 className={styles.title}>{location}</h1>
                    <div className={styles.rating}>
                        <img src={star} alt="" />
                        {rating}
                    </div>
                </div>
                <p className={styles.description}>{desc}</p>
                <p className={styles.date}>{dates_available}</p>
                <p className={styles.price}>
                    <strong>${price_per_night}</strong> night
                     
                </p>
            </div>

            <Modal 
                isOpen={modalInfoIsOpen}
                onClose={() => setModalInfoOpen(false)}
            />

        </article>
    )
}

export default Card