/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_SkipInputs */

const en_common_skip = /** @type {(inputs: Common_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skip`)
};

const zh_cn2_common_skip = /** @type {(inputs: Common_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`跳过`)
};

const es_common_skip = /** @type {(inputs: Common_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omitir`)
};

const ja_common_skip = /** @type {(inputs: Common_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スキップ`)
};

const hi_common_skip = /** @type {(inputs: Common_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`छोड़ें`)
};

const pt_br2_common_skip = /** @type {(inputs: Common_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pular`)
};

const ko_common_skip = /** @type {(inputs: Common_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`건너뛰기`)
};

const fr_common_skip = /** @type {(inputs: Common_SkipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passer`)
};

/**
* | output |
* | --- |
* | "Skip" |
*
* @param {Common_SkipInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const common_skip = /** @type {((inputs?: Common_SkipInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_SkipInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_skip(inputs)
	if (locale === "zh-CN") return zh_cn2_common_skip(inputs)
	if (locale === "es") return es_common_skip(inputs)
	if (locale === "ja") return ja_common_skip(inputs)
	if (locale === "hi") return hi_common_skip(inputs)
	if (locale === "pt-BR") return pt_br2_common_skip(inputs)
	if (locale === "ko") return ko_common_skip(inputs)
	return fr_common_skip(inputs)
});