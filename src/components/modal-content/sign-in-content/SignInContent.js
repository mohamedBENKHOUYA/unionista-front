import React, { useState } from 'react';
import 'components/modal-content/sign-in-content/SignInContent.css';
import { useTranslation } from 'react-i18next';
import ActionButton from 'shared/action-button/ActionButton';
import InputControl from 'shared/input-control/InputControl';
import TextInput from 'shared/text-input/TextInput';
import CheckboxInput from 'shared/checkbox-input/CheckboxInput';
import { Link } from 'react-router-dom';
import EyeIcon from 'icons/eye/EyeIcon';
import GoogleIcon from 'icons/google/GoogleIcon';

const SignInContent = () => {
    const { t } = useTranslation();
    const [rememberMe, setRememberMe] = useState(false);
    const [isPassDiscovered, setIsPassDiscovered] = useState(false);
    return (
        <div className="sic_container">
            <div className="sic_head">
                <h2>{t('sign-in.title')}</h2>
                <ActionButton
                    onClick={() => {}}
                    variant="secondary"
                    animationOnHover
                >
                    {t('sign-in.register')}
                </ActionButton>
            </div>

            <div className="sic_input_container">
                <label htmlFor="text-input-email">
                    {t('sign-in.email-label')}
                </label>
                <InputControl
                    radius="rounded_1"
                    borderVariant="border_light"
                    insetShadow
                >
                    <TextInput labelId="text-input-email" size="medium" />
                </InputControl>
            </div>
            <div className="sic_input_container">
                <label htmlFor="text-input-password">
                    {t('sign-in.password-label')}
                </label>
                <InputControl
                    radius="rounded_1"
                    borderVariant="border_light"
                    insetShadow
                >
                    <TextInput
                        isIconBgActive={false}
                        labelId="text-input-password"
                        size="medium"
                        type={isPassDiscovered ? 'text' : 'password'}
                    >
                        <div
                            style={{ color: 'grey' }}
                            onClick={() =>
                                setIsPassDiscovered(!isPassDiscovered)
                            }
                        >
                            <EyeIcon isPassDiscovered={isPassDiscovered} />
                        </div>
                    </TextInput>
                </InputControl>
            </div>
            <div className="sic_remember_me_container">
                <div className="sic_remember_me_checkbox_container">
                    <CheckboxInput
                        size="medium"
                        variant="secondary"
                        checked={rememberMe}
                        radius="rounded_1"
                        labelId="sic_checkbox_id"
                        onToggle={(value) => {
                            setRememberMe(value);
                        }}
                    />
                    <label
                        className="sic_remember_me_label"
                        htmlFor="sic_checkbox_id"
                    >
                        {t('sign-in.remember-me')}
                    </label>
                </div>
                <Link className="sic_forgot_password" to={'/forgot_password'}>
                    {t('sign-in.forgot-password')}
                </Link>
            </div>
            <ActionButton
                onClick={() => {}}
                variant="primary"
                fit="max"
                radius="pilled"
                animationOnHover
            >
                {t('sign-in.title')}
            </ActionButton>

            <p className="sic_divider">{t('sign-in.divider-title')}</p>
            <ActionButton
                onClick={() => {}}
                variant="secondary"
                fit="max"
                radius="pilled"
                animationOnHover
            >
                <span className="sic_sso_google">
                    <GoogleIcon />
                    {t('sign-in.sso-google-title')}
                </span>
            </ActionButton>
        </div>
    );
};

export default SignInContent;
