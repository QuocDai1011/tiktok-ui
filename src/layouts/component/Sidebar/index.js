import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import config from '~/config';
import { HomeIcon, LiveIcon, UsersGroupIcon, HomeActiveIcon, UsersGroupActiveIcon, LiveActiveIcon } from '~/component/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For Your" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon/>} />
                <MenuItem title="Following" to={config.routes.following} icon={<UsersGroupIcon />} activeIcon={<UsersGroupActiveIcon/>} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon/>}/>
            </Menu>
        </aside>
    );
}

export default Sidebar;
