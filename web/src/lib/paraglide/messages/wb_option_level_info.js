/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Level_InfoInputs */

const en_wb_option_level_info = /** @type {(inputs: Wb_Option_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const zh_cn2_wb_option_level_info = /** @type {(inputs: Wb_Option_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信息`)
};

const es_wb_option_level_info = /** @type {(inputs: Wb_Option_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const ja_wb_option_level_info = /** @type {(inputs: Wb_Option_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`情報`)
};

const hi_wb_option_level_info = /** @type {(inputs: Wb_Option_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जानकारी`)
};

const pt_br2_wb_option_level_info = /** @type {(inputs: Wb_Option_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const ko_wb_option_level_info = /** @type {(inputs: Wb_Option_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`정보`)
};

const fr_wb_option_level_info = /** @type {(inputs: Wb_Option_Level_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

/**
* | output |
* | --- |
* | "Info" |
*
* @param {Wb_Option_Level_InfoInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_level_info = /** @type {((inputs?: Wb_Option_Level_InfoInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Level_InfoInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_level_info(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_level_info(inputs)
	if (locale === "es") return es_wb_option_level_info(inputs)
	if (locale === "ja") return ja_wb_option_level_info(inputs)
	if (locale === "hi") return hi_wb_option_level_info(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_level_info(inputs)
	if (locale === "ko") return ko_wb_option_level_info(inputs)
	return fr_wb_option_level_info(inputs)
});