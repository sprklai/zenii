/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Action_OsInputs */

const en_wb_option_action_os = /** @type {(inputs: Wb_Option_Action_OsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OS`)
};

const zh_cn2_wb_option_action_os = /** @type {(inputs: Wb_Option_Action_OsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`操作系统`)
};

const es_wb_option_action_os = /** @type {(inputs: Wb_Option_Action_OsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SO`)
};

const ja_wb_option_action_os = /** @type {(inputs: Wb_Option_Action_OsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OS`)
};

const hi_wb_option_action_os = /** @type {(inputs: Wb_Option_Action_OsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ऑपरेटिंग सिस्टम`)
};

const pt_br2_wb_option_action_os = /** @type {(inputs: Wb_Option_Action_OsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SO`)
};

const ko_wb_option_action_os = /** @type {(inputs: Wb_Option_Action_OsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OS`)
};

const fr_wb_option_action_os = /** @type {(inputs: Wb_Option_Action_OsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SE`)
};

/**
* | output |
* | --- |
* | "OS" |
*
* @param {Wb_Option_Action_OsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_action_os = /** @type {((inputs?: Wb_Option_Action_OsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Action_OsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_action_os(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_action_os(inputs)
	if (locale === "es") return es_wb_option_action_os(inputs)
	if (locale === "ja") return ja_wb_option_action_os(inputs)
	if (locale === "hi") return hi_wb_option_action_os(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_action_os(inputs)
	if (locale === "ko") return ko_wb_option_action_os(inputs)
	return fr_wb_option_action_os(inputs)
});