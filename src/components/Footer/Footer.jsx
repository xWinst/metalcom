import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Logo } from 'components';
import icons from '../../images/icons';
import s from './Footer.module.css';

const Footer = () => {
    const lang = useSelector(state => state.lang);

    return (
        <footer className={s.footer} id="footer">
            <div className={`${s.footer_wrapper} sectionWidth`}>
            <NavLink to="/" className={s.wrapper_logo}>
                <Logo className={s.logoFooter}/>
                <h3 className={s.name}>METALKOM</h3>
            </NavLink>

            <ul className={s.social}>
                <li className={s.social_item}>
                    <a href="/" className={s.social_link}>
                        <img className={s.link_instagram} src={`${icons.instagram_icon}`} alt="icon_instagram" />
                    </a>
                </li>
                <li className={s.social_item}>
                    <a href="/" className={s.social_link}>
                        <img className={s.link_facebook} src={`${icons.facebook_icon}`} alt="icon_facebook" />
                    </a>
                </li>
                <li className={s.social_item}>
                    <a href="/" className={s.social_link}>
                        <img className={s.link_email} src={`${icons.email_icon}`} alt="icon_email" />{' '}
                    </a>
                </li>
            </ul>

            <ul className={s.about}>
                <li className={s.about_item}>
                    <p className={s.about_text}>{lang.footerInfo}</p>
                </li>
                <li className={s.about_item}>
                    <NavLink to="/catalog" className={s.about_nav}>
                        {lang.footerCondition}
                    </NavLink>
                </li>
                <li className={s.about_item}>
                    <NavLink to="/#about" className={s.about_nav}>
                        {lang.footerDelivery}
                    </NavLink>
                </li>
                <li className={s.about_item}>
                    <NavLink to="/cooperation" className={s.about_nav}>
                        {lang.footerGuarantee}
                    </NavLink>
                </li>
            </ul>

            <ul className={s.wrapper}>
                <li className={s.wrapper_item}>
                    <a href="tel:+380683526670" className={s.wrapper_contacts}>
                        <img src={`${icons.phone_icon}`} alt="icon_phone" />
                        <p className={s.wrapper_text}>+38 068 352 66 70</p>
                    </a>
                </li>
                <li className={s.wrapper_item}>
                    <a href="mailto:m22070202@gmail.com" className={s.wrapper_contacts}>
                        <img src={`${icons.secondEmail_icon}`} alt="icon_email" />
                        <p className={s.wrapper_text}>m22070202@gmail.com</p>
                    </a>
                </li>
                <li className={s.wrapper_item}>
                    <a href="https://goo.gl/maps/6PcpeWitLvjP28Yv9" className={s.wrapper_contacts}>
                        <img src={`${icons.location_icon}`} alt="icon_email" />
                        <p className={s.wrapper_text}>{lang.adress}</p>
                    </a>
                </li>
            </ul>
            </div>
        </footer>
    );
};

export default Footer;
