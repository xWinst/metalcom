import { Icon } from 'components';
import icons from 'images/icons.svg';
import { useYOffset } from 'hooks/useYOffset';
import s from './ArrowUp.module.css';

const ArrowUp = () => {
    const offset = useYOffset();

    return (
        offset > 200 && (
            <a href="#header" className={s.link} title="Go up">
                <Icon href={`${icons}#arrowUp`} width="24" height="24" />
            </a>
        )
    );
};

export default ArrowUp;
