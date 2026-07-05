/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_TitleInputs */

const en_dashboard_title = /** @type {(inputs: Dashboard_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

const zh_cn2_dashboard_title = /** @type {(inputs: Dashboard_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

const es_dashboard_title = /** @type {(inputs: Dashboard_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

const ja_dashboard_title = /** @type {(inputs: Dashboard_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

const hi_dashboard_title = /** @type {(inputs: Dashboard_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

const pt_br2_dashboard_title = /** @type {(inputs: Dashboard_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

const ko_dashboard_title = /** @type {(inputs: Dashboard_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

const fr_dashboard_title = /** @type {(inputs: Dashboard_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii`)
};

/**
* | output |
* | --- |
* | "Zenii" |
*
* @param {Dashboard_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_title = /** @type {((inputs?: Dashboard_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_title(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_title(inputs)
	if (locale === "es") return es_dashboard_title(inputs)
	if (locale === "ja") return ja_dashboard_title(inputs)
	if (locale === "hi") return hi_dashboard_title(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_title(inputs)
	if (locale === "ko") return ko_dashboard_title(inputs)
	return fr_dashboard_title(inputs)
});