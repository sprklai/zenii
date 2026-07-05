/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_Api_DocsInputs */

const en_nav_api_docs = /** @type {(inputs: Nav_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API Docs`)
};

const zh_cn2_nav_api_docs = /** @type {(inputs: Nav_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 文档`)
};

const es_nav_api_docs = /** @type {(inputs: Nav_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Documentación API`)
};

const ja_nav_api_docs = /** @type {(inputs: Nav_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API ドキュメント`)
};

const hi_nav_api_docs = /** @type {(inputs: Nav_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API दस्तावेज़`)
};

const pt_br2_nav_api_docs = /** @type {(inputs: Nav_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Documentação da API`)
};

const ko_nav_api_docs = /** @type {(inputs: Nav_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 문서`)
};

const fr_nav_api_docs = /** @type {(inputs: Nav_Api_DocsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Documentation API`)
};

/**
* | output |
* | --- |
* | "API Docs" |
*
* @param {Nav_Api_DocsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const nav_api_docs = /** @type {((inputs?: Nav_Api_DocsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_Api_DocsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_api_docs(inputs)
	if (locale === "zh-CN") return zh_cn2_nav_api_docs(inputs)
	if (locale === "es") return es_nav_api_docs(inputs)
	if (locale === "ja") return ja_nav_api_docs(inputs)
	if (locale === "hi") return hi_nav_api_docs(inputs)
	if (locale === "pt-BR") return pt_br2_nav_api_docs(inputs)
	if (locale === "ko") return ko_nav_api_docs(inputs)
	return fr_nav_api_docs(inputs)
});