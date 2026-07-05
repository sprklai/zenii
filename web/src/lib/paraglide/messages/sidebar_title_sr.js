/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sidebar_Title_SrInputs */

const en_sidebar_title_sr = /** @type {(inputs: Sidebar_Title_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidebar`)
};

const zh_cn2_sidebar_title_sr = /** @type {(inputs: Sidebar_Title_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`侧边栏`)
};

const es_sidebar_title_sr = /** @type {(inputs: Sidebar_Title_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Barra lateral`)
};

const ja_sidebar_title_sr = /** @type {(inputs: Sidebar_Title_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイドバー`)
};

const hi_sidebar_title_sr = /** @type {(inputs: Sidebar_Title_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`साइडबार`)
};

const pt_br2_sidebar_title_sr = /** @type {(inputs: Sidebar_Title_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Barra lateral`)
};

const ko_sidebar_title_sr = /** @type {(inputs: Sidebar_Title_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`사이드바`)
};

const fr_sidebar_title_sr = /** @type {(inputs: Sidebar_Title_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Barre latérale`)
};

/**
* | output |
* | --- |
* | "Sidebar" |
*
* @param {Sidebar_Title_SrInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const sidebar_title_sr = /** @type {((inputs?: Sidebar_Title_SrInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sidebar_Title_SrInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_sidebar_title_sr(inputs)
	if (locale === "zh-CN") return zh_cn2_sidebar_title_sr(inputs)
	if (locale === "es") return es_sidebar_title_sr(inputs)
	if (locale === "ja") return ja_sidebar_title_sr(inputs)
	if (locale === "hi") return hi_sidebar_title_sr(inputs)
	if (locale === "pt-BR") return pt_br2_sidebar_title_sr(inputs)
	if (locale === "ko") return ko_sidebar_title_sr(inputs)
	return fr_sidebar_title_sr(inputs)
});