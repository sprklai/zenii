/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_DocsInputs */

const en_nav_docs = /** @type {(inputs: Nav_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Docs`)
};

const zh_cn2_nav_docs = /** @type {(inputs: Nav_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文档`)
};

const es_nav_docs = /** @type {(inputs: Nav_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Documentación`)
};

const ja_nav_docs = /** @type {(inputs: Nav_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ドキュメント`)
};

const hi_nav_docs = /** @type {(inputs: Nav_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`दस्तावेज़`)
};

const pt_br2_nav_docs = /** @type {(inputs: Nav_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Documentação`)
};

const ko_nav_docs = /** @type {(inputs: Nav_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`문서`)
};

const fr_nav_docs = /** @type {(inputs: Nav_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Documentation`)
};

/**
* | output |
* | --- |
* | "Docs" |
*
* @param {Nav_DocsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const nav_docs = /** @type {((inputs?: Nav_DocsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_DocsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_docs(inputs)
	if (locale === "zh-CN") return zh_cn2_nav_docs(inputs)
	if (locale === "es") return es_nav_docs(inputs)
	if (locale === "ja") return ja_nav_docs(inputs)
	if (locale === "hi") return hi_nav_docs(inputs)
	if (locale === "pt-BR") return pt_br2_nav_docs(inputs)
	if (locale === "ko") return ko_nav_docs(inputs)
	return fr_nav_docs(inputs)
});