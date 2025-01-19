import { useState } from 'react'

import Logo from '../Logo/Logo'
import Link from '../Link/Link'

import './style.scss'
import './categories.scss'

import CategoriesData from './../../data/categories.json'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import searchIcon from './search.svg'
import globIcon from './globe.svg'
import filterIcon from './filters.svg'
import CategoryItem from '../CategoryItem/Category'

function Header () {

    const [isOpen, setOpen] = useState(false);

    console.log(CategoriesData);

    return (
        <>
        <div className="header-wrapper">
            <header className='header'>
                <div className="container">
                    <div className="header__row">
                        <div className="header__logo">
                            <Logo/>
                        </div>
                        <div className="header__search">
                            <div className="searchbar__btns-wrapper">
                                <button className="seacrhbar__btn">
                                    <Link  text="Anywhere" />
                                </button>
                                <button className="seacrhbar__btn">
                                    <Link  text="Any week" />
                                </button>
                                <button className="seacrhbar__btn">
                                    <Link  text="Add guests" style="grey" />
                                </button>
                            </div>
                            <button className="seacrhbar__btn-search">
                                <img src={searchIcon} alt="Search" />
                            </button>
                        </div>
                        <div className="user__menu">
                            <div className="user__menu-home">
                                <Link  text="Airbnb your home" />
                            </div>
                            <div className="user__menu-lang">
                                <Link icon={globIcon}/>
                            </div>
                            <button className="user__menu-menu" onClick={() => setOpen(!isOpen)}>
                                <button className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={() => setOpen(!isOpen)}>
                                    <span className="menu-toggle__line"></span>
                                    <span className="menu-toggle__line"></span>
                                    <span className="menu-toggle__line"></span>
                                </button>
                                <div className="user__menu-avatar">
                                    <img src="./img/icons/user-avatar.svg" alt="User avatar" />
                                </div>
                            </button>
                        </div>
                        <div className={`menu ${isOpen ? "active" : ""}`}>
                        <nav className="menu__nav">
                            <ul className="menu__nav-list">
                                <a href="" className="menu__nav-link">
                                    <li className="menu__nav-item">
                                        Profile
                                    </li>
                                </a>
                                <a href="" className="menu__nav-link">
                                    <li className="menu__nav-item">
                                        Reserved house
                                    </li>
                                </a>
                                <a href="" className="menu__nav-link">
                                    <li className="menu__nav-item">
                                        Airbnb your home
                                    </li>
                                </a>
                                <a href="" className="menu__nav-link">
                                    <li className="menu__nav-item">
                                        Exit
                                    </li>
                                </a>
                                <a href="" className="menu__nav-link">
                                    <li className="menu__nav-item">
                                        Exit
                                    </li>
                                </a>
                            </ul>
                        </nav>
                    </div>
                    </div>

                </div>
            </header>
            <div className="categories">
                <div className="container">
                    <div className="categories__row">
                        <div className="categories__list">
                            <Swiper
                                slidesPerView={10}
                                spaceBetween={20} 
                                loop={true}
                                navigation={{
                                    nextEl: ".custom-next-button", 
                                    prevEl: null,
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                {CategoriesData.map((cat, index) => (
                                    <SwiperSlide key={index}>
                                        <CategoryItem
                                            title={cat.title}
                                            img={cat.img}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="custom-next-button">
                                <img src="./img/icons/arrow-right.svg" alt="Next" />
                            </div>
                        </div>
                        <div className="categories__filter">
                            <button className="categories__filter-btn">
                                <img src={filterIcon} alt="" />
                                <p className="categories__filter-text">Filters</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

         </div>
        </>

    )
}

export default Header