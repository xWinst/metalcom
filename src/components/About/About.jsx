import { useSelector } from 'react-redux';
import s from './About.module.css';

const About = () => {
    const lang = useSelector(state => state.lang);
    return (
        <section className={s.about} id="about">
            <h3 className={s.about_title}>{lang.aboutTitle}</h3>
            <p className={s.about_text}>{lang.aboutText}</p>
        </section>
    );
};
export default About;
