import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Downloader } from 'components';
import catalogName from 'localization/catalogName.json';
import icons from 'images/icons.svg';
import s from './Products.module.css';

const Products = () => {
    const { catalogIdx } = useParams();
    const catalog = useSelector(state => state.catalogs[catalogIdx - 1]);
    const navigate = useNavigate();

    useEffect(() => {
        !catalog && navigate('/pageNotFound');
    });

    const chooseProduct = id => {
        navigate(`/product/${id}?catalog=${catalogIdx}`);
    };

    return (
        catalog && (
            <>
                <div className={s.thumb}>
                    <Button text="Назад" icon={`${icons}#arrowLeft`} onClick={() => navigate(-1)} />
                    <h2 id="catalog">{catalogName[catalogIdx - 1]}</h2>
                    <Downloader />
                </div>
                <ul className={s.catalog}>
                    {catalog.map(({ subname, name, img, id }) => (
                        <li key={id} className={s.card}>
                            <p className={s.category}>
                                {subname}: <span className={s.cardName}>{name}</span>
                            </p>
                            <img className={s.img} src={img} alt="" width="350" onClick={() => chooseProduct(id)} />
                        </li>
                    ))}
                </ul>
            </>
        )
    );
};

export default Products;
