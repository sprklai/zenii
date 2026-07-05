/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Shell_LabelInputs */

const en_wb_node_shell_label = /** @type {(inputs: Wb_Node_Shell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shell`)
};

const zh_cn2_wb_node_shell_label = /** @type {(inputs: Wb_Node_Shell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shell`)
};

const es_wb_node_shell_label = /** @type {(inputs: Wb_Node_Shell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shell`)
};

const ja_wb_node_shell_label = /** @type {(inputs: Wb_Node_Shell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シェル`)
};

const hi_wb_node_shell_label = /** @type {(inputs: Wb_Node_Shell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`शेल`)
};

const pt_br2_wb_node_shell_label = /** @type {(inputs: Wb_Node_Shell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shell`)
};

const ko_wb_node_shell_label = /** @type {(inputs: Wb_Node_Shell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`셸`)
};

const fr_wb_node_shell_label = /** @type {(inputs: Wb_Node_Shell_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shell`)
};

/**
* | output |
* | --- |
* | "Shell" |
*
* @param {Wb_Node_Shell_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_shell_label = /** @type {((inputs?: Wb_Node_Shell_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Shell_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_shell_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_shell_label(inputs)
	if (locale === "es") return es_wb_node_shell_label(inputs)
	if (locale === "ja") return ja_wb_node_shell_label(inputs)
	if (locale === "hi") return hi_wb_node_shell_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_shell_label(inputs)
	if (locale === "ko") return ko_wb_node_shell_label(inputs)
	return fr_wb_node_shell_label(inputs)
});