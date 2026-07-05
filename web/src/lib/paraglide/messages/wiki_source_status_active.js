/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Source_Status_ActiveInputs */

const en_wiki_source_status_active = /** @type {(inputs: Wiki_Source_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`active`)
};

const zh_cn2_wiki_source_status_active = /** @type {(inputs: Wiki_Source_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`活跃`)
};

const es_wiki_source_status_active = /** @type {(inputs: Wiki_Source_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`activo`)
};

const ja_wiki_source_status_active = /** @type {(inputs: Wiki_Source_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効`)
};

const hi_wiki_source_status_active = /** @type {(inputs: Wiki_Source_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सक्रिय`)
};

const pt_br2_wiki_source_status_active = /** @type {(inputs: Wiki_Source_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ativo`)
};

const ko_wiki_source_status_active = /** @type {(inputs: Wiki_Source_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`활성`)
};

const fr_wiki_source_status_active = /** @type {(inputs: Wiki_Source_Status_ActiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`actif`)
};

/**
* | output |
* | --- |
* | "active" |
*
* @param {Wiki_Source_Status_ActiveInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_source_status_active = /** @type {((inputs?: Wiki_Source_Status_ActiveInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Source_Status_ActiveInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_source_status_active(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_source_status_active(inputs)
	if (locale === "es") return es_wiki_source_status_active(inputs)
	if (locale === "ja") return ja_wiki_source_status_active(inputs)
	if (locale === "hi") return hi_wiki_source_status_active(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_source_status_active(inputs)
	if (locale === "ko") return ko_wiki_source_status_active(inputs)
	return fr_wiki_source_status_active(inputs)
});