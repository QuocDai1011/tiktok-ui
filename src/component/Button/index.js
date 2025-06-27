import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    onClick,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disable = false,
    rounded = false,
    leftIcon,
    rightIcon,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        [className]: className,
        primary: primary,
        outline: outline,
        small: small,
        large: large,
        text,
        disable,
        rounded,
    });

    const props = {
        onClick,
        ...passProps,
    };

    //remove evenlistener when disable button
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = to;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string, 
    href: PropTypes.string, 
    primary: PropTypes.bool, 
    outline: PropTypes.bool, 
    text: PropTypes.bool, 
    rounded: PropTypes.bool, 
    disable: PropTypes.bool, 
    small: PropTypes.bool, 
    large: PropTypes.bool, 
    children: PropTypes.node.isRequired, 
    className: PropTypes.string, 
    leftIcon: PropTypes.node, 
    rightIcon: PropTypes.node, 
    onClick: PropTypes.func, 
};

export default Button;
