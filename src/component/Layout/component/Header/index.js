import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Tippy from '@tippyjs/react/headless';
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
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English'
    },
    {
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
        title: 'Feadback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
]

function Header() {
    const [searchResult, setSearchResult] = useState(['hello']);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                {/* <h4 className={cx('search-title')}>
                                    Accounts
                                </h4> */}
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')} spellCheck={false}>
                        <input placeholder="Search accounts and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>

                    <Menu
                        items = {MENU_ITEM}
                    >
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
