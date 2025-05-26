import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/image';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faBars,
    faLanguage,
    faCircleInfo,
    faKeyboard,
    faUpload,
    faCloudArrowDown,
    faCloudArrowUp,
    faMessage,
    faUser,
    faCoins,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Children, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, Message, SearchIcon, SendIcon, UploadIcon } from '~/component/Icons';
import Image from '~/component/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
        title: 'Feadback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
        case 'language': {
            alert(menuItem.code);
            break;
        }
        default:
            break;
    }
};

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@myly',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEM,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                
                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy className={cx('custom')} content="Upload" placement="bottom" delay={[0, 200]}>
                                <button className={cx('actions-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy className={cx('custom')} content="Message" placement="bottom" delay={[0, 200]}>
                                <button className={cx('actions-btn')}>
                                    <SendIcon />
                                </button>
                            </Tippy>
                            <Tippy className={cx('custom')} content="Inbox" placement="bottom" delay={[0, 200]}>
                                <button className={cx('actions-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avt')}
                                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/481243678_1869668697195110_1810427324316665394_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=RkGlVmvEuo0Q7kNvwEBsLgf&_nc_oc=AdmvtnEJHv2E0kLISmEmVX3tTM65TFK0eElAXRSEYbVP4Ugx7DV-u4XLSvgmH7__EAs&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=0ECPg3_z3z9bZA5wxL9wgQ&oh=00_AfKD49HsGsRizI6JmOhqFrpZ2cSHixj1k0JKxVYqm6Y8zA&oe=6835CC53"
                                alt="Mai Quoc Dai"
                                // fallback="https://scontent.fsgn15-1.fna.fbcdn.net/v/t39.30808-6/499795355_4059632490983148_6617147514241556234_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tYUpkzc3DMkQ7kNvwF6w85e&_nc_oc=AdlggKxiiSenYyaKxd6OuJr6jNF7BUZ3MOpsuSvBXZsp3MmnTjd1JEZdUAXQR4w_zfzUjX9hHdCzDXkR1LaDojO2&_nc_zt=23&_nc_ht=scontent.fsgn15-1.fna&_nc_gid=-8hbxH4Y9chraDS_fmHJ6g&oh=00_AfI53aOLc-J9d-W4F4cBXrW7q3c9ciHxDqtM9noqlOtxeA&oe=68372D85"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
