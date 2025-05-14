import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4d340732e8a053f93f3bfa2813e66a8d~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=089480a6&x-expires=1747234800&x-signature=0ibtGsQXnNWRvl6GTcYQ6C1SEYc%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=a1d2006b&idc=my"
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
