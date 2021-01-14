import React from 'react';
import { asTitle } from '../utils/strings';
import { t as tt } from '../utils/i18n';
import Text from './text';

// to do: remove the deprecated translation keys [name, 'title'] & [name, 'description']

export default class ServiceItem extends React.Component {
    render() {
        const {
            checked,
            onlyRequiredEnabled,
            onToggle,
            name,
            lang,
            config,
            translations,
            title,
            description,
            t,
        } = this.props;
        const required = this.props.required || false;
        const optOut = this.props.optOut || false;
        const purposes = this.props.purposes || [];
        const onChange = (e) => {
            onToggle(e.target.checked);
        };
        const id = `service-item-${name}`;
        const purposesText = purposes
            .map((purpose) => t(['!', 'purposes', purpose, 'title?']) || asTitle(purpose))
            .join(', ');
        const optOutText = optOut ? (
            <span
                className="cm-opt-out"
                title={t(['service', 'optOut', 'description'])}
            >
                {t(['service', 'optOut', 'title'])}
            </span>
        ) : (
            ''
        );
        // requiredText nicht mehr gewünscht
        const requiredText = false && required ? (
            <span
                className="cm-required"
                title={t(['service', 'required', 'description'])}
            >
                {t(['service', 'required', 'title'])}
            </span>
        ) : (
            ''
        );

        let purposesContent;
        if (purposes.length > 0)
            purposesContent = (
                <p className="purposes">
                    {t(['service', purposes.length > 1 ? 'purposes' : 'purpose'])}:{' '}
                    {purposesText}
                </p>
            );

        let cookieTableRows;
        let cookieTable = translations && translations[lang] && translations[lang].cookieTable;
        console.log(cookieTable);
        if(cookieTable && cookieTable.length > 0){
            cookieTableRows = cookieTable.map((row) => {
                return (
                    <tr className="cm-table-row">
                        <td>{row.name}</td>
                        <td>{row.server}</td>
                        <td>{row.purpose}</td>
                        <td>{row.duration}</td>
                    </tr>
                )
            });
        }

        const descriptionText = description || tt(translations, lang, 'zz', ['!', 'description']) || t(['!', name, 'description?'])

        return (
            <div>
                {(!required && 
                    <React.Fragment>
                        <input
                            id={id}
                            className={
                                'cm-list-input' +
                                (required ? ' required' : '') +
                                (onlyRequiredEnabled
                                    ? ' half-checked only-required'
                                    : '')
                            }
                            aria-describedby={`${id}-description`}
                            disabled={required}
                            checked={checked || required}
                            type="checkbox"
                            onChange={onChange}
                        />
                        <label
                            htmlFor={id}
                            className="cm-list-label"
                            {...(required ? { tabIndex: '0' } : {})}
                        >
                            <span className="cm-list-title">
                                {title || tt(translations, lang, 'zz', ['!', 'title']) || t(['!', name, 'title?']) || asTitle(name)}
                            </span>
                            {requiredText}
                            {optOutText}
                            <span className="cm-switch">
                                <div className="slider round active"></div>
                            </span>
                        </label>
                        <div id={`${id}-description`}>
                            {
                                descriptionText &&
                                <p className="cm-list-description">
                                    <Text
                                        config={config}
                                        text={descriptionText}
                                    />
                                </p>
                            }
                        </div>
                    </React.Fragment>
                )}
                {(cookieTable && cookieTable.length &&
                    <div className="cm-service-table">
                        <table>
                            <tr className="cm-table-head">
                                <th>{t(["cookieTable", "name"])}</th>
                                <th>{t(["cookieTable", "provider"])}</th>
                                <th>{t(["cookieTable", "purpose"])}</th>
                                <th>{t(["cookieTable", "storagePeriod"])}</th>
                            </tr>
                            {cookieTableRows}
                        </table>
                    </div>
                )}
            </div>
        );
    }
}
