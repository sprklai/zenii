/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Notify_LabelInputs */

const en_wb_node_notify_label = /** @type {(inputs: Wb_Node_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notify`)
};

const zh_cn2_wb_node_notify_label = /** @type {(inputs: Wb_Node_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const es_wb_node_notify_label = /** @type {(inputs: Wb_Node_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificar`)
};

const ja_wb_node_notify_label = /** @type {(inputs: Wb_Node_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const hi_wb_node_notify_label = /** @type {(inputs: Wb_Node_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सूचना`)
};

const pt_br2_wb_node_notify_label = /** @type {(inputs: Wb_Node_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificar`)
};

const ko_wb_node_notify_label = /** @type {(inputs: Wb_Node_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알림`)
};

const fr_wb_node_notify_label = /** @type {(inputs: Wb_Node_Notify_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notification`)
};

/**
* | output |
* | --- |
* | "Notify" |
*
* @param {Wb_Node_Notify_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_notify_label = /** @type {((inputs?: Wb_Node_Notify_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Notify_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_notify_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_notify_label(inputs)
	if (locale === "es") return es_wb_node_notify_label(inputs)
	if (locale === "ja") return ja_wb_node_notify_label(inputs)
	if (locale === "hi") return hi_wb_node_notify_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_notify_label(inputs)
	if (locale === "ko") return ko_wb_node_notify_label(inputs)
	return fr_wb_node_notify_label(inputs)
});