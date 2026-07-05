/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_NextInputs */

const en_common_next = /** @type {(inputs: Common_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next`)
};

const zh_cn2_common_next = /** @type {(inputs: Common_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下一步`)
};

const es_common_next = /** @type {(inputs: Common_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiente`)
};

const ja_common_next = /** @type {(inputs: Common_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次へ`)
};

const hi_common_next = /** @type {(inputs: Common_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अगला`)
};

const pt_br2_common_next = /** @type {(inputs: Common_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próximo`)
};

const ko_common_next = /** @type {(inputs: Common_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`다음`)
};

const fr_common_next = /** @type {(inputs: Common_NextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivant`)
};

/**
* | output |
* | --- |
* | "Next" |
*
* @param {Common_NextInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const common_next = /** @type {((inputs?: Common_NextInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_NextInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_next(inputs)
	if (locale === "zh-CN") return zh_cn2_common_next(inputs)
	if (locale === "es") return es_common_next(inputs)
	if (locale === "ja") return ja_common_next(inputs)
	if (locale === "hi") return hi_common_next(inputs)
	if (locale === "pt-BR") return pt_br2_common_next(inputs)
	if (locale === "ko") return ko_common_next(inputs)
	return fr_common_next(inputs)
});