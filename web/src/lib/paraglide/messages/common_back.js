/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_BackInputs */

const en_common_back = /** @type {(inputs: Common_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back`)
};

const zh_cn2_common_back = /** @type {(inputs: Common_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回`)
};

const es_common_back = /** @type {(inputs: Common_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atrás`)
};

const ja_common_back = /** @type {(inputs: Common_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`戻る`)
};

const hi_common_back = /** @type {(inputs: Common_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वापस`)
};

const pt_br2_common_back = /** @type {(inputs: Common_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar`)
};

const ko_common_back = /** @type {(inputs: Common_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`뒤로`)
};

const fr_common_back = /** @type {(inputs: Common_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour`)
};

/**
* | output |
* | --- |
* | "Back" |
*
* @param {Common_BackInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const common_back = /** @type {((inputs?: Common_BackInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_BackInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_back(inputs)
	if (locale === "zh-CN") return zh_cn2_common_back(inputs)
	if (locale === "es") return es_common_back(inputs)
	if (locale === "ja") return ja_common_back(inputs)
	if (locale === "hi") return hi_common_back(inputs)
	if (locale === "pt-BR") return pt_br2_common_back(inputs)
	if (locale === "ko") return ko_common_back(inputs)
	return fr_common_back(inputs)
});