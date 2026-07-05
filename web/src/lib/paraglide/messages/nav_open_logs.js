/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_Open_LogsInputs */

const en_nav_open_logs = /** @type {(inputs: Nav_Open_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open logs`)
};

const zh_cn2_nav_open_logs = /** @type {(inputs: Nav_Open_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开日志`)
};

const es_nav_open_logs = /** @type {(inputs: Nav_Open_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir registros`)
};

const ja_nav_open_logs = /** @type {(inputs: Nav_Open_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログを開く`)
};

const hi_nav_open_logs = /** @type {(inputs: Nav_Open_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लॉग खोलें`)
};

const pt_br2_nav_open_logs = /** @type {(inputs: Nav_Open_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir registros`)
};

const ko_nav_open_logs = /** @type {(inputs: Nav_Open_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`로그 열기`)
};

const fr_nav_open_logs = /** @type {(inputs: Nav_Open_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir les journaux`)
};

/**
* | output |
* | --- |
* | "Open logs" |
*
* @param {Nav_Open_LogsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const nav_open_logs = /** @type {((inputs?: Nav_Open_LogsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_Open_LogsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_open_logs(inputs)
	if (locale === "zh-CN") return zh_cn2_nav_open_logs(inputs)
	if (locale === "es") return es_nav_open_logs(inputs)
	if (locale === "ja") return ja_nav_open_logs(inputs)
	if (locale === "hi") return hi_nav_open_logs(inputs)
	if (locale === "pt-BR") return pt_br2_nav_open_logs(inputs)
	if (locale === "ko") return ko_nav_open_logs(inputs)
	return fr_nav_open_logs(inputs)
});