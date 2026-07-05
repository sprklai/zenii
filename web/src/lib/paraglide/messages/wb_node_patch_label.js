/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Patch_LabelInputs */

const en_wb_node_patch_label = /** @type {(inputs: Wb_Node_Patch_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch`)
};

const zh_cn2_wb_node_patch_label = /** @type {(inputs: Wb_Node_Patch_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`补丁`)
};

const es_wb_node_patch_label = /** @type {(inputs: Wb_Node_Patch_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch`)
};

const ja_wb_node_patch_label = /** @type {(inputs: Wb_Node_Patch_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パッチ`)
};

const hi_wb_node_patch_label = /** @type {(inputs: Wb_Node_Patch_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पैच`)
};

const pt_br2_wb_node_patch_label = /** @type {(inputs: Wb_Node_Patch_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch`)
};

const ko_wb_node_patch_label = /** @type {(inputs: Wb_Node_Patch_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`패치`)
};

const fr_wb_node_patch_label = /** @type {(inputs: Wb_Node_Patch_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Patch`)
};

/**
* | output |
* | --- |
* | "Patch" |
*
* @param {Wb_Node_Patch_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_patch_label = /** @type {((inputs?: Wb_Node_Patch_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Patch_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_patch_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_patch_label(inputs)
	if (locale === "es") return es_wb_node_patch_label(inputs)
	if (locale === "ja") return ja_wb_node_patch_label(inputs)
	if (locale === "hi") return hi_wb_node_patch_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_patch_label(inputs)
	if (locale === "ko") return ko_wb_node_patch_label(inputs)
	return fr_wb_node_patch_label(inputs)
});