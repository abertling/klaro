// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
// You can also disable auto-loading of the consent notice by adding
// data-no-auto-load=true to the script tag.
var klaroConfig = {
    // With the 0.7.0 release we introduce a 'version' paramter that will make
    // if easier for us to keep configuration files backwards-compatible in the future.
    version: 1,

    // You can customize the ID of the DIV element that Klaro will create
    // when starting up. If undefined, Klaro will use 'klaro'.
    elementID: 'klaro',

    // Setting this to true will keep Klaro from automatically loading itself
    // when the page is being loaded.
    noAutoLoad: location.pathname.toLowerCase().indexOf("/datenschutz") > 0 
             || location.pathname.toLowerCase().indexOf("/impressum") > 0
             || location.pathname.toLowerCase().indexOf("/en/") >= 0,

    // Setting this to true will render the descriptions of the consent
    // modal and consent notice are HTML. Use with care.
    htmlTexts: true,

    // Setting 'embedded' to true will render the Klaro modal and notice without
    // the modal background, allowing you to e.g. embed them into a specific element
    // of your website, such as your privacy notice.
    embedded: false,

    // You can group services by their purpose in the modal. This is advisable
    // if you have a large number of services. Users can then enable or disable
    // entire groups of services instead of having to enable or disable every service.
    groupByPurpose: true,

    // How Klaro should store the user's preferences. It can be either 'cookie'
    // (the default) or 'localStorage'.
    storageMethod: 'cookie',

    // You can customize the name of the cookie that Klaro uses for storing
    // user consent decisions. If undefined, Klaro will use 'klaro'.
    cookieName: 'CONETConsentManagement',

    // You can also set a custom expiration time for the Klaro cookie.
    // By default, it will expire after 120 days.
    cookieExpiresAfterDays: 365,

    // You can change to cookie domain for the consent manager itself.
    // Use this if you want to get consent once for multiple matching domains.
    // If undefined, Klaro will use the current domain.
    //cookieDomain: '.github.com',

    // Defines the default state for services (true=enabled by default).
    default: false,

    // If "mustConsent" is set to true, Klaro will directly display the consent
    // manager modal and not allow the user to close it before having actively
    // consented or declines the use of third-party services.
    mustConsent: true,

    // Show "accept all" to accept all services instead of "ok" that only accepts
    // required and "default: true" services
    acceptAll: true,

    // ABe 03.12.2020: Show "accept all" switch to accept all services
    // required and "default: true" services
    acceptAllSwitch: false,
    
    // replace "decline" with cookie manager modal
    hideDeclineAll: true,

    // hide "learnMore" link
    hideLearnMore: false,

    // show cookie notice as modal
    noticeAsModal: true,

    // You can also remove the 'Realized with Klaro!' text in the consent modal.
    // Please don't do this! We provide Klaro as a free open source tool.
    // Placing a link to our website helps us spread the word about it,
    // which ultimately enables us to make Klaro! better for everyone.
    // So please be fair and keep the link enabled. Thanks :)
    disablePoweredBy: true,

    // you can specify an additional class (or classes) that will be added to the Klaro `div`
    additionalClass: 'consent-manager',

    // You can define the UI language directly here. If undefined, Klaro will
    // use the value given in the global "lang" variable. If that does
    // not exist, it will use the value given in the "lang" attribute of your
    // HTML tag. If that also doesn't exist, it will use 'en'.
    lang: 'de',

    // You can overwrite existing translations and add translations for your
    // service descriptions and purposes. See `src/translations/` for a full
    // list of translations that can be overwritten:
    // https://github.com/KIProtect/klaro/tree/master/src/translations

    // Example config that shows how to overwrite translations:
    // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
    translations: {
        // If you erase the "consentModal" translations, Klaro will use the
        // bundled translations.
        de: {
            confirm: "ZUSTIMMEN",
            save: "SPEICHERN",
            cancel: "Abbrechen",
            acceptAll: "ALLE AKZEPTIEREN",
            acceptSelected: "AUSWAHL SPEICHERN",
            privacyPolicyUrl: '/DE/CONET/Datenschutz',
            imprintUrl: "/DE/CONET/Impressum",
            consentModal: {
                title: "Bitte erteilen Sie Ihre Zustimmung!",
                description:
                    "In bestimmten Fällen benötigen wir Ihre Zustimmung zur Verwendung von Cookies und anderen Technologien durch uns (CONET Technologies Holding GmbH) und unsere Partner, um persönliche Daten auf Ihrem Gerät zu speichern und abzurufen, um wiederum personalisierte Anzeigen und Inhalte, Anzeigen- und Inhaltemessung, Erkenntnisse über Zielgruppen und Produktentwicklung vorzunehmen. Ihre Zustimmung benötigen wir außerdem für die Einbindung externer Multimedia-Inhalte. In einigen Fällen verarbeiten wir und unsere Partner Ihre persönlichen Daten auf Grundlage von berechtigtem Interesse. Dabei können ebenso Cookies und andere Technologien eingesetzt werden. Unter \"Einstellungen\" erhalten Sie dazu detaillierte Informationen und können Ihre Präferenzen wählen. Ihre Zustimmung erfasst alle CONET-Seiten. <br><br>Sie können Ihre Auswahl jederzeit im Consent Manager auf unserer Datenschutzseite widerrufen oder anpassen.",
            },
            consentNotice: {
                learnMore: "EINSTELLUNGEN",
                privacyLinkText: "Datenschutzhinweise", 
                imprintLinkText: "Impressum"
            },
            purposes: {
                functional: {
                    shortDescription: "",
                    description: "Erforderliche Cookies sind nötig, um grundlegende Funktionen unserer Webseite sicherstellen zu können. Sie ermöglichen Basisfunktionen, wie zum Beispiel die Seitennavigation. Eine Einwilligung Ihrerseits ist nicht erforderlich.",//"Diese Dienste sind für die korrekte Funktion dieser Website unerlässlich. Sie können sie hier nicht deaktivieren, da der Dienst sonst nicht richtig funktionieren würde.\n",
                    title: "Erforderlich"
                },
                analytics_marketing: {
                    shortDescription: "",
                    description: "Analyse-Cookies helfen uns, das Nutzungsverhalten auf unseren Seiten besser zu verstehen. Dadurch können wir die Qualität unserer Webseite und ihre Inhalte verbessern und unser Internet-Angebot stetig optimieren. Ein Rückschluss auf eine Person ist dabei nicht möglich. Bei Aktivierung einzelner Dienste in diesem Abschnitt ist zwingend auch die Aktivierung des Google Tag Managers erforderlich.",//"Diese Dienste verarbeiten persönliche Informationen, um Ihnen personalisierte oder interessenbezogene Werbung zu zeigen.",
                    title: "Analytics & Marketing"
                },
                external_media: {
                    shortDescription: "",
                    description: "An verschiedenen Stellen unserer Websites binden wir externe Inhalte ein, um Ihnen ergänzende Informationen und erweiterten Service zu bieten. Die Anzeige ergänzender Informationen betrifft beispielsweise die direkte Einbindung von Videos und News Feeds externer Plattformen, erweiterte Services betreffen beispielsweise die Integration von Google Maps, um Ihnen komfortabel einen Routenplaner zu unseren Standorten zur Verfügung zu stellen.",
                    title: "Externe Medien"
                },
            },
            contextualConsent: {
                description: "Mit dem Laden des Inhalts akzeptieren Sie die {policyLink} von {title}. Sind Sie einverstanden?",
                policy: "Datenschutzerklärung"
            }
        },
    },

    // This is a list of third-party services that Klaro will manage for you.
    services: [
        // FUNCTIONAL
        {
            name: 'conet-functional',
            title: 'CONET Funktionale Cookies',
            cookieTable: [
                {
                    "name": "CONETConsentManagment",
                    "server": "CONET Technologies Holding GmbH",
                    "purpose" : "Speichert ihre Angaben in Bezug auf unseren Consent-Manager.",
                    "duration" : "ca. 1 Jahr"
                },
                {
                    "name": "CONETDownload2",
                    "server": "CONET Technologies Holding GmbH",
                    "purpose" : "Speichert, ob Sie Zugang zu den Downloads auf dieser Seite erhalten haben.",
                    "duration" : "ca. 2 Jahre"
                },
                {
                    "name": "CONETReferrer",
                    "server": "CONET Technologies Holding GmbH",
                    "purpose" : "Speichert die Seite, die Sie auf diesem Internetauftritt zuerst besucht haben.",
                    "duration" : "ca. 2 Jahre"
                },
                {
                    "name": "MyFonts Counter",
                    "server": "MyFonts Inc.",
                    "purpose" : "Korrekte Darstellung einiger Schriftarten, die auf dieser Seite verwendet werden.",
                    "duration" : "Session"
                },
            ],
            cookies: ["CONETConsentManagement", "CONETDownload2", "CONETReferrer"], 
            purposes: ['functional'],
            required: true
        },
        {
            name: 'gtm',
            title: 'Google Tag Manager',
            cookies: ['_gtm'], 
            purposes: ['analytics_marketing'],
        },
        {
            name: 'googleAnalytics',
            default: false,
            title: 'Google Analytics',
            cookieTable: [
                {
                    "name": "_gid",
                    "server": "Google Ireland Limited",
                    "purpose" : "Ordnet einem User eine ID zu, damit der Webtracker die Aktionen des Nutzers unter diese ID zusammenfassen kann.",
                    "duration" : "ca. 24 Stunden"
                },
                {
                    "name": "_ga",
                    "server": "Google Ireland Limited",
                    "purpose" : "Ordnet einem User eine ID zu, damit der Webtracker die Aktionen des Nutzers unter diese ID zusammenfassen kann.",
                    "duration" : "ca. 24 Monate"
                },
                {
                    "name": "_gat_UA-481999-1",
                    "server": "Google Ireland Limited",
                    "purpose" : "Speichert darüber Daten, wann der Websitebesucher die Website aufgerufen hat, um daraus statistische Daten zusammenzustellen. Zudem werden aufgrund des Seitenbesuches weitere Daten zu Statistikzwecken gesammelt.",
                    "duration" : "ca. 80 Sekunden"
                },
                {
                    "name": "NID",
                    "server": "Google Ireland Limited",
                    "purpose" : "Ermöglicht die Auslieferung von Werbung und Retargeting. Speichert Einstellungen des Nutzers.",
                    "duration" : "ca. 6 Monate"
                }
            ],
            purposes: ['analytics_marketing'],
            cookies: [
                [/^_ga.*$/i, '/', '.conet.de'],
                [/^_ga.*$/i, '/', '.conet.local'],
                ['_gid', '/', '.conet.de'],
                ['_gid', '/', '.conet.local'],
                ['NID', '/', '.google.com'],
            ],
            callback: function(consent, app) {
                if(consent !== false) {
                    pushGTMEvent("consent-google-analytics");
                }
            },
            required: false,
            optOut: false,
        },
        {
            name: 'hotjar',
            default: false,
            title: 'Hotjar',
            cookieTable: [
                {
                    "name": "_hjTLDTest",
                    "server": "Hotjar Ltd.",
                    "purpose" : "Speichert, ob Hotjar bereits geladen wurde.",
                    "duration" : "Sitzung"
                },
                {
                    "name": "_hjid",
                    "server": "Hotjar Ltd.",
                    "purpose" : "Speichert den ersten Besuch auf der Seite und stellt sicher, dass zukünftige Besuche der gleichen User ID zugeordnet werden.",
                    "duration" : "Sitzung"
                },
                {
                    "name": "_hjIncludedInPageviewSample",
                    "server": "Hotjar Ltd.",
                    "purpose" : "Ermittelt, ob der Besucher in einer bestimmten Werbezielgruppe enthalten ist.",
                    "duration" : "Sitzung"
                },
                {
                    "name": "_hjAbsoluteSessionInProgress",
                    "server": "Hotjar Ltd.",
                    "purpose" : "Speichert darüber Daten, wann der Websitebesucher die Website aufgerufen hat, um daraus statistische Daten zusammenzustellen. Zudem werden aufgrund des Seitenbesuches weitere Daten zu Statistikzwecken gesammelt.",
                    "duration" : "ca. 30 Minuten"
                },
            ],
            purposes: ['analytics_marketing'],
            cookies: [
                [/^_hj.*$/i, '/', '.conet.de'],
                [/^_hj.*$/i, '/', '.conet.local'],
            ],
            callback: function(consent, app) {
                if(consent !== false) {
                    pushGTMEvent("consent-hotjar");
                }
            },
            required: false,
            optOut: false,
        },
        {
            name: 'facebook-script',
            default: false,
            title: 'Facebook',
            cookieTable: [
                {
                    "name": "_fbp",
                    "server": "Facebook Ireland Ltd.",
                    "purpose" : "Speichert und verfolgt Besuche über mehrere Webseiten hinweg.",
                    "duration" : "ca. 3 Monate"
                },
                {
                    "name": "fr",
                    "server": "Facebook Ireland Ltd.",
                    "purpose" : "Ermöglicht die Auslieferung von Werbung und Retargeting.",
                    "duration" : "ca. 3 Monate"
                },
            ],
            purposes: ['analytics_marketing'],
            cookies: [
                [/^_fb.*$/i, '/', '.conet.de'],
                [/^_fb.*$/i, '/', '.conet.local'],
                ["fr", '/', '.facebook.com'],
                ["ATN", '/', '.atdmt.com'],
            ],
            callback: function(consent, app) {
                if(consent !== false) {
                    pushGTMEvent("consent-facebook");
                }
            },
            required: false,
            optOut: false,
        },
        {
            name: 'linkedin',
            default: false,
            title: 'LinkedIn',
            cookieTable: [
                {
                    "name": "bcookie, bscookie",
                    "server": "LinkedIn Ireland Unlimited",
                    "purpose" : "Weist dem Seitenbesucher eine ID zu und ermittelt statistische Daten zu den Website-Besuchen des Seitenbesuchers. Dies dient der Individualisierung der Werbung, die dem Nutzer angezeigt wird.",
                    "duration" : "ca. 24 Monate"
                },
                {
                    "name": "lidc",
                    "server": "LinkedIn Ireland Unlimited",
                    "purpose" : "Weist dem Seitenbesucher eine ID zu und ermittelt statistische Daten zu den Website-Besuchen des Seitenbesuchers. Dies dient der Individualisierung der Werbung, die dem Nutzer angezeigt wird.",
                    "duration" : "ca. 24 Stunden"
                },
                {
                    "name": "lissc",
                    "server": "LinkedIn Ireland Unlimited",
                    "purpose" : "Weist dem Seitenbesucher eine ID zu und ermittelt statistische Daten zu den Website-Besuchen des Seitenbesuchers. Dies dient der Individualisierung der Werbung, die dem Nutzer angezeigt wird.",
                    "duration" : "ca. 12 Monate"
                },
                {
                    "name": "UserMatchHistory",
                    "server": "LinkedIn Ireland Unlimited",
                    "purpose" : "Weist dem Seitenbesucher eine ID zu und ermittelt statistische Daten zu den Website-Besuchen des Seitenbesuchers. Dies dient der Individualisierung der Werbung, die dem Nutzer angezeigt wird.",
                    "duration" : "ca. 30 Tage"
                },
                {
                    "name": "lang",
                    "server": "LinkedIn Ireland Unlimited",
                    "purpose" : "Durch dieses Cookie können wir einzelne von Ihnen gewählte Komforteinstellungen speichern und für ihren aktuellen und für zukünftige Seitenbesuche vorhalten.",
                    "duration" : "Sitzung"
                },
            ],
            purposes: ['analytics_marketing'],
            cookies: [
                [/^li.*$/i, '/', '.linkedin.com'],
                ["lang", '/', '.ads.linkedin.com'],
                ["bcookie", '/', '.linkedin.com'],
                ["UserMatchHistory", '/', '.linkedin.com'],
            ],
            callback: function(consent, app) {
                if(consent !== false) {
                    pushGTMEvent("consent-linkedin");
                }
            },
            required: false,
            optOut: false,
        },
        {
            name: 'pardot',
            default: false,
            title: 'Pardot',
            cookieTable: [
                {
                    "name": "visitor_id817383, visitor_id817383-hash",
                    "server": "VP & AGC",
                    "purpose" : "Weist dem Seitenbesucher eine ID zu und ermittelt statistische Daten zu den Website-Besuchen des Seitenbesuchers. Dies dient der Individualisierung der Werbung, die dem Nutzer angezeigt wird.",
                    "duration" : "ca. 10 Jahre"
                },
                {
                    "name": "lpv817383",
                    "server": "VP & AGC",
                    "purpose" : "Weist dem Seitenbesucher eine ID zu und ermittelt statistische Daten zu den Website-Besuchen des Seitenbesuchers. Dies dient der Individualisierung der Werbung, die dem Nutzer angezeigt wird.",
                    "duration" : "ca. 30 Minuten"
                },
                {
                    "name": "pardot",
                    "server": "VP & AGC",
                    "purpose" : "Weist dem Seitenbesucher eine ID zu und ermittelt statistische Daten zu den Website-Besuchen des Seitenbesuchers. Dies dient der Individualisierung der Werbung, die dem Nutzer angezeigt wird.",
                    "duration" : "Sitzung"
                },
            ],
            purposes: ['analytics_marketing'],
            cookies: [
                [/^visitor_id.*$/i, "/", location.host],
                ["lpv817383", "/", "pi.pardot.com"],
                ["pardot", "/", "info.conet.de"],
            ],
            callback: function(consent, app) {
                if(consent !== false) {
                    pushGTMEvent("consent-pardot");
                }
            },
            required: false,
            optOut: false,
        },
        {
            name: 'bing_ads',
            default: false,
            title: 'Bing Ads',
            purposes: ['analytics_marketing'],
            cookieTable: [
                // Cookie ergänzen - VPN abstellen 
                {
                    "name": "MUID",
                    "server": "Microsoft Corporation",
                    "purpose" : "Ermöglicht das Tracking der Seitenbesucher auf anderen, von Microsoft angebotenen Websites durch Synchronisieren der ID.",
                    "duration" : "ca. 12 Monate"
                },
                {
                    "name": "_uetvid",
                    "server": "Microsoft Corporation",
                    "purpose" : "Weist dem Seitenbesucher eine ID zu und ermittelt statistische Daten zu den Website-Besuchen des Seitenbesuchers. Dies dient der Individualisierung der Werbung, die dem Nutzer angezeigt wird.",
                    "duration" : "ca. 2 Wochen"
                },
                {
                    "name": "_uetsid",
                    "server": "Microsoft Corporation",
                    "purpose" : "Weist dem Seitenbesucher eine ID zu und ermittelt statistische Daten zu den Website-Besuchen des Seitenbesuchers. Dies dient der Individualisierung der Werbung, die dem Nutzer angezeigt wird.",
                    "duration" : "ca. 24 Stunden"
                },
            ],
            callback: function(consent, app) {
                if(consent !== false) {
                    pushGTMEvent("consent-conversion-tracking");
                }
            },
            cookies: [
                ["MUID", '/', '.bing.com'],
                ["_uetvid", '/', '.conet.de'],
                ["_uetvid", '/', '.conet.de'],
            ],
            required: false,
            optOut: false,
        },
        {
            purposes: ['external_media'],
            name: "google-maps",
            policyUrl: "https://policies.google.com/privacy"
        },
        {
            purposes: ['external_media'],
            name: "twitter",
            policyUrl: "https://twitter.com/privacy"
        },
        {
            name: 'facebook',
            default: false,
            title: 'Facebook',
            policyUrl: "https://www.facebook.com/policies/cookies",
            cookieTable: [
                {
                    "name": "datr",
                    "server": "Facebook Ireland Ltd.",
                    "purpose" : "Beugt Betrugsversuchen vor.",
                    "duration" : "ca. 3 Monate"
                },
                {
                    "name": "fr",
                    "server": "Facebook Ireland Ltd.",
                    "purpose" : "Ermöglicht die Auslieferung von Werbung und Retargeting.",
                    "duration" : "ca. 3 Monate"
                },
            ],
            purposes: ['external_media'],
            cookies: [
                ["fr", '/', '.facebook.com'],
                ["datr", '/', '.facebook.com'],
            ],
            required: false,
            optOut: false,
        },
        {
            purposes: ['external_media'],
            name: "youtube",
            policyUrl: "https://policies.google.com/privacy",
            cookieTable: [
                {
                    "name": "remote_sid",
                    "server": "Google Ireland Limited",
                    "purpose" : "Wir betten Videos von unserem offiziellen YouTube-Kanal im privat genutzten Modus von YouTube ein. Dieser Modus kann Cookies auf Ihrem Computer setzen, sobald Sie auf den YouTube-Videoplayer klicken, jedoch speichert YouTube keine persönlich identifizierbaren Cookie-Informationen für die Wiedergabe von eingebetteten Videos im privat genutzten Modus.",
                    "duration" : "Sitzung"
                },
                {
                    "name": "VISITOR_INFO1_LIVE",
                    "server": "Google Ireland Limited",
                    "purpose" : "Abschätzen, wie die Akzeptanz der Videos auf der Website durch die Seitenbesucher sein wird.",
                    "duration" : "ca. 6 Monate"
                },
                {
                    "name": "YSC",
                    "server": "Google Ireland Limited",
                    "purpose" : "Weist dem Seitenbesucher eine ID zu. Das Cookie dient dann zum Abruf der aktuellen GPS-Informationen auf mobilen Endgeräten um den Standort des Nutzers zu erhalten.",
                    "duration" : "ca. 30 Minuten"
                },
                {
                    "name": "IDE",
                    "server": "Google Ireland Limited",
                    "purpose" : "Weist dem Seitenbesucher eine ID zu und ermittelt statistische Daten zu den Website-Besuchen des Seitenbesuchers. Dies dient der Individualisierung der Werbung, die dem Nutzer angezeigt wird.",
                    "duration" : "ca. 13 Monate"
                },
            ],
        },
    ],
};

// helper functions
function pushGTMEvent(trigger){
    // push GTM Event for activating script
    // but if GTM not loaded yet wait on GTM initialisation
    var eventName = "gtm_loaded_" + trigger;
    if(!!window.google_tag_manager){
        window.dataLayer.push({'event' : trigger});
        
    } else if(!window[eventName]){
        window.addEventListener('gtm_loaded', function() {
            window.dataLayer.push({'event' : trigger});
        });
        window[eventName] = true;
    }
}

function klaroGtmActivator(){
    // automatically active GTM when selected service from analytics_marketing category
    // called in conet_custom.js for maintaining correct execution order
    if(klaro){
        klaro.addEventListener("render", function(e){
            var watcher = { 
                update: function(obj, name, data){
                    if(name == "consent"){ // only the changed one
                        var name = data.name;
                        var value = data.value;
                        var gtmServices = klaroConfig.services.filter(s => s.purposes.indexOf("analytics_marketing") >=0 && s.name != "gtm").map(s => s.name);
                        if(name == "gtm"){
                            if(!value) {
                                // GTM deactivated -> deactivate all others
                                for(var i in gtmServices){
                                    var s = gtmServices[i];
                                    obj.updateConsent(s, false);
                                }
                            }
                        } else {
                            if(value && gtmServices.indexOf(name) >=0 && obj.getConsent("gtm") == false){
                                // service activated -> activate gtm
                                obj.updateConsent("gtm", true);
                            }
                        }
                    }
                }
            }
            klaro.getManager().watch(watcher)
        })
    }
}