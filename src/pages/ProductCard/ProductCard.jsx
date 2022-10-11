import { useRef, useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ContactForm, Downloader, Modal } from 'components';
// import catalogName from 'localization/catalogName.json';
import icons from 'images/icons.svg';
import s from './ProductCard.module.css';

const ProductCard = () => {
    const { productId } = useParams();
    const [searchParams] = useSearchParams();
    const [isModalShow, setIsModalShow] = useState(false);
    const [child, setChild] = useState();
    const mainImg = useRef(null);
    const navigate = useNavigate();

    const catalogIdx = searchParams.get('catalog');
    const catalog = useSelector(state => state.catalogs[catalogIdx - 1]);
    const product = catalog?.find(({ id }) => id === productId);

    useEffect(() => {
        !product && navigate('/pageNotFound');
    });

    const chooseProduct = id => {
        navigate(`/product/${id}?catalog=${catalogIdx}`, { replace: true });
    };

    const toMain = url => {
        mainImg.current.src = url;
    };

    const showImg = () => {
        setChild(<img src={mainImg.current.src} alt="" />);
        toggleModal();
    };

    const showContact = () => {
        setChild(<ContactForm />);
        toggleModal();
    };

    const toggleModal = () => {
        setIsModalShow(state => !state);
    };

    console.log('product: ', product); ///////////////
    return (
        product && (
            <div className="sectionWidth">
                <div className={s.thumb}>
                    <Button text="Назад" icon={`${icons}#arrowLeft`} onClick={() => navigate(-1)} />
                    {/* <h2 id="catalog">{catalogName[catalogIdx - 1]}</h2> */}
                    <h2 className={s.card_title}>
                        {product.subname}: "{product.name}"
                    </h2>

                    <Downloader />
                </div>
                <div className={s.container}>
                    <aside className={s.aside}>
                        <ul className={s.list}>
                            {catalog.map(({ subname, name, img, id }) => (
                                <li key={id} className={id === productId ? s.active : s.item}>
                                    <p className={s.category}>
                                        {subname}: <span className={s.cardName}>{name}</span>
                                    </p>
                                    <img
                                        className={s.img}
                                        src={img}
                                        alt=""
                                        width="150"
                                        onClick={() => chooseProduct(id)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </aside>
                    <div className={s.cardContainer}>
                        <div className={s.card}>
                            <div className={s.card_wrapper}>
                                <img
                                    src={product.img}
                                    alt=""
                                    width="600"
                                    ref={mainImg}
                                    className={s.card_img}
                                    onClick={showImg}
                                />
                            </div>
                            <ul className={s.features}>
                                {product.features.map(e => (
                                    <li key={e} className={s.features_item}>
                                        {e}
                                    </li>
                                ))}
                                <ul className={s.card_size}>
                                    {product.support && <li className={s.card_size_item}>
                                        {product.support === 'square' ? 'Квадрат' : 'Диаметр'} {product.supportSize} mm
                                    </li>}
                                    <li className={s.card_size_item}>
                                        {!!product.minHeight 
                                            ? `Минимальная высота:  ${product.minHeight}mm`
                                            : ''}
                                    </li>
                                    <li className={s.card_size_item}>
                                        {!!product.maxHeight 
                                            ? `Максимальная высота:  ${product.maxHeight}mm`
                                            : ''}
                                    </li>
                                    <li className={s.card_size_item}>
                                        {!!product.fastening ? `Крепление столешницы: ${product.fastening}` : ''}
                                    </li>
                                    <li className={s.card_size_item}>
                                        {!!product.base  ? (
                                            <div className={s.card_text_base}>
                                                База:&nbsp;
                                                {product.base?.map(e => (
                                                    <p key={e} className={s.card_text_item}>
                                                        {e}&nbsp;
                                                    </p>
                                                ))}
                                            </div>
                                        ) : (
                                            ''
                                        )}
                                    </li>
                                </ul>
                               <div className={s.btn_connect}><Button text="Зв'язатись з нами" onClick={showContact} /></div> 
                            </ul>
                        </div>
                        <ul className={s.listImg}>
                            {product.additionalImg?.map(img => (
                                <li key={img} className={s.itemImg}>
                                    <img src={img} alt="" width="150" onClick={() => toMain(img)} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {isModalShow && <Modal onClose={toggleModal} child={child} />}
            </div>
        )
    );
};

export default ProductCard;
