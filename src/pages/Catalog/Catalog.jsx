// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Downloader } from 'components';
import images from 'images/catalog';
import s from './Catalog.module.css';

const Catalog = () => {
    // const lang = useSelector(state => state.lang);
    return (
        <section id="catalog" className='sectionWidth'>
            <div className={s.thumb}>
                {/* <h2>{lang.catalogTitle}</h2> */}
            </div>
            <ul className={s.catalog}>
                <Link className={s.link} to="1">
                    <img className={s.img} src={images.cat1} alt="" width="400" />
                    <span className={s.category}>Опори для барных столів</span>
                </Link>
                <Link className={s.link} to="2">
                    <img className={s.img} src={images.cat2} alt="" width="400" />
                    <span className={s.category}>Опори та каркаси для офісних і письмових столів </span>
                </Link>
                <Link className={s.link} to="3">
                    <img className={s.img} src={images.cat3} alt="" width="400" />
                    <span className={s.category}>Незалежні опори</span>
                </Link>
                <Link className={s.link} to="4">
                    <img className={s.img} src={images.cat4} alt="" width="400" />
                    <span className={s.category}>Опори та каркаси для Дизайнерських столів</span>
                </Link>
            </ul>
            <div className={s.downloader}>
                <Downloader />
            </div>
        </section>
    );
};

export default Catalog;
