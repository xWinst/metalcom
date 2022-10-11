import { Icon } from 'components';
import icons from '../../images/icons.svg';

const Logo = ({ className }) => {
    return (
        <div>
            <Icon className={className} width="50" height="50" href={`${icons}#logo`} />
        </div>
    );
};
export default Logo;
