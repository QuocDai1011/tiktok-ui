import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-i-photomode-sg/7e24b3c02923471f9aba3c093a80c557~tplv-photomode-image.jpeg?lk3s=81f88b70&x-expires=1747540800&x-signature=JyXKHwVnI5mJm%2F8gLOFYAsde5n0%3D&shp=81f88b70&shcp=-"
                className={cx('avatar')}
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>tduyn963</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>xú xí xù xì</span>
            </div>
        </div>
    );
}

export default AccountItem;
