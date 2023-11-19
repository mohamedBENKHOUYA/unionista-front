import { useTranslation } from 'react-i18next';
import React from 'react';

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h2>Oops!</h2>
            <p>{t('page-not-found.title')}</p>
            {t('page-not-found.message-1')} <br />
            {t('page-not-found.message-2')}
        </div>
    );
};

export default NotFound;
