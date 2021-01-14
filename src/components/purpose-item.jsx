import React from 'react';
import { ServiceItems } from './services';
import { asTitle } from '../utils/strings';
import Text from './text';
import { Collapse } from 'react-collapse';

export default class PurposeItem extends React.Component {
    constructor(props) {
        super(props);
        props.manager.watch(this);
        this.state = {
            servicesVisible: false,
        };
    }

    componentWillUnmount() {
        this.props.manager.unwatch(this);
    }

    update(obj, type, data) {
        if (obj === this.props.manager && type === 'collapse')
            this.setState({ servicesVisible: false });
    }

    render() {
        const {
            allEnabled,
            onlyRequiredEnabled,
            allDisabled,
            services,
            config,
            onToggle,
            name,
            lang,
            manager,
            consents,
            title,
            description,
            t,
        } = this.props;
        const { servicesVisible } = this.state;
        const required = this.props.required || false;
        const purposes = this.props.purposes || [];
        const onChange = (e) => {
            onToggle(e.target.checked);
        };
        const id = `purpose-item-${name}`;
        const purposesText = purposes
            .map((purpose) => t(['!', 'purposes', purpose, 'title?']) || asTitle(purpose))
            .join(', ');
        // requiredText nicht mehr gewünscht
        const requiredText = false && required ? (
            <span
                className="cm-required"
                title={t(['!', 'service', 'required', 'description']) || ''}
            >
                {t(['service', 'required', 'title'])}
            </span>
        ) : (
            ''
        );
        const shortDescText = (
            <span
                className="cm-short-description"
            >
                {t(['!', 'purposes', name, 'shortDescription?'])}
            </span>
        );

        let purposesContent;
        if (purposes.length > 0)
            purposesContent = (
                <p className="purposes">
                    {t([
                        'purpose',
                        purposes.length > 1 ? 'purposes' : 'purpose',
                    ])}
                    : {purposesText}
                </p>
            );

        const toggleServicesVisible = (e) => {
            e.preventDefault();
            this.props.manager.notify("collapse")
            this.setState({ servicesVisible: !servicesVisible });
        };

        const toggle = (services, value) => {
            services.map((service) => {
                if (!service.required) {
                    manager.updateConsent(service.name, value);
                }
            });
        };

        const serviceItems = (
            <ServiceItems config={config} lang={lang} services={services} toggle={toggle} consents={consents} t={t} />
        );

        const descriptionText = description || t(['!', 'purposes', name, 'description'])

        return (
            <React.Fragment>
                
                    <div className="cm-purpose-inner">
                        <div className="cm-caret">
                            <a href="#" onClick={toggleServicesVisible}>
                                {(servicesVisible && <span>-</span>) || (
                                    <span>+</span>
                                )}{' '}
                            </a>
                        </div>
                        <div className="cm-purpose-title">
                            <input
                                id={id}
                                className={
                                    'cm-list-input' +
                                    (required ? ' required' : '') +
                                    (!allEnabled
                                        ? onlyRequiredEnabled
                                            ? ' only-required'
                                            : ' half-checked'
                                        : '')
                                }
                                aria-describedby={`${id}-description`}
                                disabled={required}
                                checked={
                                    allEnabled || (!allDisabled && !onlyRequiredEnabled)
                                }
                                type="checkbox"
                                onChange={onChange}
                            />
                            <label
                                htmlFor={id}
                                className="cm-list-label"
                                {...(required ? { tabIndex: '0' } : {})}
                            >
                                <span className="cm-list-title">
                                    {title || t(['!', 'purposes', name, 'title?']) || asTitle(name)}
                                </span>
                                {requiredText}
                                {shortDescText}
                                <span className="cm-switch">
                                    <div className="slider round active"></div>
                                </span>
                            </label>    
                        </div> 
                    </div>
                    <Collapse isOpened={servicesVisible}>
                        <div>
                            <div id={`${id}-description`} class="cm-purpose-description">
                            {
                                descriptionText &&
                                <p className="cm-list-description">
                                    <Text
                                        config={config}
                                        text={descriptionText}
                                    />
                                </p>
                            }
                                {purposesContent}
                            </div> 
                            {services.length > 0 && (
                            <div className="cm-services">
                                
                                <ul
                                    className={
                                        'cm-content expanded'
                                    }
                                >
                                    {serviceItems}
                                </ul>
                            </div>
                            )}
                        </div>
                        
                    </Collapse>               
               
            </React.Fragment>
        );
    }
}
