/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Level_WarnInputs */

const en_wb_option_level_warn = /** @type {(inputs: Wb_Option_Level_WarnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warning`)
};

const zh_cn2_wb_option_level_warn = /** @type {(inputs: Wb_Option_Level_WarnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

const es_wb_option_level_warn = /** @type {(inputs: Wb_Option_Level_WarnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advertencia`)
};

const ja_wb_option_level_warn = /** @type {(inputs: Wb_Option_Level_WarnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

const hi_wb_option_level_warn = /** @type {(inputs: Wb_Option_Level_WarnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चेतावनी`)
};

const pt_br2_wb_option_level_warn = /** @type {(inputs: Wb_Option_Level_WarnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aviso`)
};

const ko_wb_option_level_warn = /** @type {(inputs: Wb_Option_Level_WarnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`경고`)
};

const fr_wb_option_level_warn = /** @type {(inputs: Wb_Option_Level_WarnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avertissement`)
};

/**
* | output |
* | --- |
* | "Warning" |
*
* @param {Wb_Option_Level_WarnInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_level_warn = /** @type {((inputs?: Wb_Option_Level_WarnInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Level_WarnInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_level_warn(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_level_warn(inputs)
	if (locale === "es") return es_wb_option_level_warn(inputs)
	if (locale === "ja") return ja_wb_option_level_warn(inputs)
	if (locale === "hi") return hi_wb_option_level_warn(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_level_warn(inputs)
	if (locale === "ko") return ko_wb_option_level_warn(inputs)
	return fr_wb_option_level_warn(inputs)
});