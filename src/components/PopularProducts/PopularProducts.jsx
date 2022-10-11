import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../Logo/Logo';
import s from './PopularProducts.module.css';

const idx = new Date().getMonth();

const PopularProducts = () => {
    const catalogs = useSelector(state => state.catalogs);
    const lang = useSelector(state => state.lang);
    const navigate = useNavigate();
    const maxIndexes = catalogs.map(catalog => catalog.length - 1);
    const popularProducts = maxIndexes.map((max, index) => catalogs[index][Math.min(max, idx)]);

    const chooseProduct = (id, index) => {
        navigate(`/product/${id}?catalog=${index + 1}`);
    };

    const onClick = () => {
        navigate(`/catalog`);
    };

    return (
        <section className={s.section}>
            <h2 className={s.title}>{lang.popularTitle}</h2>
            <ul className={s.list}>
                {popularProducts.map(({ subname, name, id, img }, index) => (
                    <li key={id} className={s.card}>
                        <img className={s.img} src={img} alt="" width="400" onClick={() => chooseProduct(id, index)} />
                        <p className={s.cardText}>
                            {subname}: <span className={s.cardName}>{name}</span>
                        </p>
                    </li>
                ))}
            </ul>

            <div className={s.button} onClick={onClick}>
                <Logo className={s.logo} /> <p className={s.button_text}>{lang.popularButton}</p>
            </div>
        </section>
    );
};

export default PopularProducts;
