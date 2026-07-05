/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Action_AllInputs */

const en_wb_option_action_all = /** @type {(inputs: Wb_Option_Action_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

const zh_cn2_wb_option_action_all = /** @type {(inputs: Wb_Option_Action_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const es_wb_option_action_all = /** @type {(inputs: Wb_Option_Action_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo`)
};

const ja_wb_option_action_all = /** @type {(inputs: Wb_Option_Action_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

const hi_wb_option_action_all = /** @type {(inputs: Wb_Option_Action_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सभी`)
};

const pt_br2_wb_option_action_all = /** @type {(inputs: Wb_Option_Action_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos`)
};

const ko_wb_option_action_all = /** @type {(inputs: Wb_Option_Action_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`전체`)
};

const fr_wb_option_action_all = /** @type {(inputs: Wb_Option_Action_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Wb_Option_Action_AllInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_action_all = /** @type {((inputs?: Wb_Option_Action_AllInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Action_AllInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_action_all(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_action_all(inputs)
	if (locale === "es") return es_wb_option_action_all(inputs)
	if (locale === "ja") return ja_wb_option_action_all(inputs)
	if (locale === "hi") return hi_wb_option_action_all(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_action_all(inputs)
	if (locale === "ko") return ko_wb_option_action_all(inputs)
	return fr_wb_option_action_all(inputs)
});