import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ModalSpot.css';
import { useDispatch } from 'react-redux';
import { toggleBottomModal } from 'redux/slices/headerSlice';
// import DropListArrowIcon from 'icons/drop-list-arrow/DropListArrowIcon';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import CloseIcon from 'icons/close-icon/CloseIcon';

const ModalSpot = (props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { children } = props;
    const [isDrawerQuitting, setIsDrawerQuitting] = useState(false);

    const onCloseDrawer = (duration) => {
        setIsDrawerQuitting(true);
        setTimeout(() => {
            dispatch(
                toggleBottomModal({
                    isBottomModalOpen: false,
                    currentContent: null,
                })
            );
        }, duration);
    };

    return (
        <div
            className={clsx('ms_container', {
                ms_quitting: isDrawerQuitting,
            })}
            onClick={() => onCloseDrawer(300)}
        >
            {/*placeholder to close menuDrawer quickly*/}
            <input id="ms_close_checkbox" type="checkbox" />
            <button
                className={clsx('ms_content')}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="ms_title_container">
                    <span>{/*placeholder*/}</span>
                    <h2>{t('drawer.title')}</h2>
                    <label
                        htmlFor="ms_close_checkbox"
                        className={clsx('ms_close_icon')}
                    >
                        <CloseIcon />
                    </label>
                </div>
                {children}
            </button>
        </div>
    );
};

ModalSpot.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default ModalSpot;
