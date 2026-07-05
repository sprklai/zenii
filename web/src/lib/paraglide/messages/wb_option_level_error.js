/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Level_ErrorInputs */

const en_wb_option_level_error = /** @type {(inputs: Wb_Option_Level_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
};

const zh_cn2_wb_option_level_error = /** @type {(inputs: Wb_Option_Level_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`错误`)
};

const es_wb_option_level_error = /** @type {(inputs: Wb_Option_Level_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error`)
};

const ja_wb_option_level_error = /** @type {(inputs: Wb_Option_Level_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エラー`)
};

const hi_wb_option_level_error = /** @type {(inputs: Wb_Option_Level_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`त्रुटि`)
};

const pt_br2_wb_option_level_error = /** @type {(inputs: Wb_Option_Level_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erro`)
};

const ko_wb_option_level_error = /** @type {(inputs: Wb_Option_Level_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`오류`)
};

const fr_wb_option_level_error = /** @type {(inputs: Wb_Option_Level_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erreur`)
};

/**
* | output |
* | --- |
* | "Error" |
*
* @param {Wb_Option_Level_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_level_error = /** @type {((inputs?: Wb_Option_Level_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Level_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_level_error(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_level_error(inputs)
	if (locale === "es") return es_wb_option_level_error(inputs)
	if (locale === "ja") return ja_wb_option_level_error(inputs)
	if (locale === "hi") return hi_wb_option_level_error(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_level_error(inputs)
	if (locale === "ko") return ko_wb_option_level_error(inputs)
	return fr_wb_option_level_error(inputs)
});