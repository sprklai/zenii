/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Action_NetworkInputs */

const en_wb_option_action_network = /** @type {(inputs: Wb_Option_Action_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Network`)
};

const zh_cn2_wb_option_action_network = /** @type {(inputs: Wb_Option_Action_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网络`)
};

const es_wb_option_action_network = /** @type {(inputs: Wb_Option_Action_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Red`)
};

const ja_wb_option_action_network = /** @type {(inputs: Wb_Option_Action_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ネットワーク`)
};

const hi_wb_option_action_network = /** @type {(inputs: Wb_Option_Action_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`नेटवर्क`)
};

const pt_br2_wb_option_action_network = /** @type {(inputs: Wb_Option_Action_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rede`)
};

const ko_wb_option_action_network = /** @type {(inputs: Wb_Option_Action_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`네트워크`)
};

const fr_wb_option_action_network = /** @type {(inputs: Wb_Option_Action_NetworkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réseau`)
};

/**
* | output |
* | --- |
* | "Network" |
*
* @param {Wb_Option_Action_NetworkInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_action_network = /** @type {((inputs?: Wb_Option_Action_NetworkInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Action_NetworkInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_action_network(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_action_network(inputs)
	if (locale === "es") return es_wb_option_action_network(inputs)
	if (locale === "ja") return ja_wb_option_action_network(inputs)
	if (locale === "hi") return hi_wb_option_action_network(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_action_network(inputs)
	if (locale === "ko") return ko_wb_option_action_network(inputs)
	return fr_wb_option_action_network(inputs)
});