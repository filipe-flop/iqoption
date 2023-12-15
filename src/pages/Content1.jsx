import React from "react";
// import { useLanguage } from './LanguageContext';
import { FormattedMessage } from 'react-intl';

export const Content1 = () => {

    // const { language } = useLanguage();
    return (
        <div>
            <FormattedMessage
                id="content"
                // defaultMessage="Default Greeting"
            />
        </div>
    );
}

export default Content1;