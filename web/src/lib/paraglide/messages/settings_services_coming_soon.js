/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Services_Coming_SoonInputs */

const en_settings_services_coming_soon = /** @type {(inputs: Settings_Services_Coming_SoonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custom services coming soon`)
};

const zh_cn2_settings_services_coming_soon = /** @type {(inputs: Settings_Services_Coming_SoonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自定义服务即将推出`)
};

const es_settings_services_coming_soon = /** @type {(inputs: Settings_Services_Coming_SoonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servicios personalizados próximamente`)
};

const ja_settings_services_coming_soon = /** @type {(inputs: Settings_Services_Coming_SoonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カスタムサービスは近日公開`)
};

const hi_settings_services_coming_soon = /** @type {(inputs: Settings_Services_Coming_SoonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कस्टम सेवाएँ जल्द आ रही हैं`)
};

const pt_br2_settings_services_coming_soon = /** @type {(inputs: Settings_Services_Coming_SoonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serviços personalizados em breve`)
};

const ko_settings_services_coming_soon = /** @type {(inputs: Settings_Services_Coming_SoonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`사용자 정의 서비스 곧 제공 예정`)
};

const fr_settings_services_coming_soon = /** @type {(inputs: Settings_Services_Coming_SoonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Services personnalisés bientôt disponibles`)
};

/**
* | output |
* | --- |
* | "Custom services coming soon" |
*
* @param {Settings_Services_Coming_SoonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_services_coming_soon = /** @type {((inputs?: Settings_Services_Coming_SoonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Services_Coming_SoonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_services_coming_soon(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_services_coming_soon(inputs)
	if (locale === "es") return es_settings_services_coming_soon(inputs)
	if (locale === "ja") return ja_settings_services_coming_soon(inputs)
	if (locale === "hi") return hi_settings_services_coming_soon(inputs)
	if (locale === "pt-BR") return pt_br2_settings_services_coming_soon(inputs)
	if (locale === "ko") return ko_settings_services_coming_soon(inputs)
	return fr_settings_services_coming_soon(inputs)
});