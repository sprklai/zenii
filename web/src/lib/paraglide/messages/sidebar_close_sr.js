/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sidebar_Close_SrInputs */

const en_sidebar_close_sr = /** @type {(inputs: Sidebar_Close_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Close`)
};

const zh_cn2_sidebar_close_sr = /** @type {(inputs: Sidebar_Close_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭`)
};

const es_sidebar_close_sr = /** @type {(inputs: Sidebar_Close_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerrar`)
};

const ja_sidebar_close_sr = /** @type {(inputs: Sidebar_Close_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`閉じる`)
};

const hi_sidebar_close_sr = /** @type {(inputs: Sidebar_Close_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`बंद करें`)
};

const pt_br2_sidebar_close_sr = /** @type {(inputs: Sidebar_Close_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechar`)
};

const ko_sidebar_close_sr = /** @type {(inputs: Sidebar_Close_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`닫기`)
};

const fr_sidebar_close_sr = /** @type {(inputs: Sidebar_Close_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermer`)
};

/**
* | output |
* | --- |
* | "Close" |
*
* @param {Sidebar_Close_SrInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const sidebar_close_sr = /** @type {((inputs?: Sidebar_Close_SrInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sidebar_Close_SrInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_sidebar_close_sr(inputs)
	if (locale === "zh-CN") return zh_cn2_sidebar_close_sr(inputs)
	if (locale === "es") return es_sidebar_close_sr(inputs)
	if (locale === "ja") return ja_sidebar_close_sr(inputs)
	if (locale === "hi") return hi_sidebar_close_sr(inputs)
	if (locale === "pt-BR") return pt_br2_sidebar_close_sr(inputs)
	if (locale === "ko") return ko_sidebar_close_sr(inputs)
	return fr_sidebar_close_sr(inputs)
});