import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import images from '~/assets/image';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            src={fallback || src}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
});


Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
