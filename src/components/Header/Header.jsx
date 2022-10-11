// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { Logo } from 'components';
import s from './Header.module.css';
// import { languageSelection } from 'redux/reducers';

const Header = () => {
    // const [currentLang, setCurrentLang] = useState('ua');
    const lang = useSelector(state => state.lang);
    // const dispatch = useDispatch();
    // const setLang = lang => {
    //     setCurrentLang(lang);
    //     dispatch(languageSelection(lang));
    // };

    return (
        <header className={s.header} id="header">
            <div className={`${s.header_wrapper} sectionWidth`}>
                <NavLink to="/" className={s.wrapper_logo}>
                    <Logo className={s.logoHeader} />
                    <h1 className={s.name}>METALKOM</h1>
                </NavLink>

                <nav className={s.wrapper_nav}>
                    <NavLink to="/" className={s.nav}>
                        {lang.head}
                    </NavLink>
                    <NavLink to="/catalog" className={s.nav}>
                        {lang.catalog}
                    </NavLink>
                    <NavHashLink className={s.nav} to="/#about">
                        {lang.about}
                    </NavHashLink>
                    <NavLink to="/cooperation" className={s.nav}>
                        {lang.cooperation}
                    </NavLink>
                    <a className={s.nav} href="#footer">
                        {lang.contacts}
                    </a>
                </nav>

                {/* <div className={s.localization}>
                <button
                    className={currentLang === 'ua' ? s.active : s.lang}
                    type="button"
                    onClick={() => setLang('ua')}
                >
                    UA
                </button>
                <span> / </span>
                <button
                    className={currentLang === 'ru' ? s.active : s.lang}
                    type="button"
                    onClick={() => setLang('ru')}
                >
                    RU
                </button>
                <span> / </span>
                <button
                    className={currentLang === 'en' ? s.active : s.lang}
                    type="button"
                    onClick={() => setLang('en')}
                >
                    EN
                </button>
            </div> */}
            </div>
        </header>
    );
};

export default Header;
