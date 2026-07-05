/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Source_Status_InactiveInputs */

const en_wiki_source_status_inactive = /** @type {(inputs: Wiki_Source_Status_InactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`inactive`)
};

const zh_cn2_wiki_source_status_inactive = /** @type {(inputs: Wiki_Source_Status_InactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非活跃`)
};

const es_wiki_source_status_inactive = /** @type {(inputs: Wiki_Source_Status_InactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`inactivo`)
};

const ja_wiki_source_status_inactive = /** @type {(inputs: Wiki_Source_Status_InactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`無効`)
};

const hi_wiki_source_status_inactive = /** @type {(inputs: Wiki_Source_Status_InactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`निष्क्रिय`)
};

const pt_br2_wiki_source_status_inactive = /** @type {(inputs: Wiki_Source_Status_InactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`inativo`)
};

const ko_wiki_source_status_inactive = /** @type {(inputs: Wiki_Source_Status_InactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`비활성`)
};

const fr_wiki_source_status_inactive = /** @type {(inputs: Wiki_Source_Status_InactiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`inactif`)
};

/**
* | output |
* | --- |
* | "inactive" |
*
* @param {Wiki_Source_Status_InactiveInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_source_status_inactive = /** @type {((inputs?: Wiki_Source_Status_InactiveInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Source_Status_InactiveInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_source_status_inactive(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_source_status_inactive(inputs)
	if (locale === "es") return es_wiki_source_status_inactive(inputs)
	if (locale === "ja") return ja_wiki_source_status_inactive(inputs)
	if (locale === "hi") return hi_wiki_source_status_inactive(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_source_status_inactive(inputs)
	if (locale === "ko") return ko_wiki_source_status_inactive(inputs)
	return fr_wiki_source_status_inactive(inputs)
});