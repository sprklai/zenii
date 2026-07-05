/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Notify_DescInputs */

const en_wb_node_notify_desc = /** @type {(inputs: Wb_Node_Notify_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish notification`)
};

const zh_cn2_wb_node_notify_desc = /** @type {(inputs: Wb_Node_Notify_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布通知`)
};

const es_wb_node_notify_desc = /** @type {(inputs: Wb_Node_Notify_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar notificación`)
};

const ja_wb_node_notify_desc = /** @type {(inputs: Wb_Node_Notify_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知を発行`)
};

const hi_wb_node_notify_desc = /** @type {(inputs: Wb_Node_Notify_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सूचना प्रकाशित करें`)
};

const pt_br2_wb_node_notify_desc = /** @type {(inputs: Wb_Node_Notify_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar notificação`)
};

const ko_wb_node_notify_desc = /** @type {(inputs: Wb_Node_Notify_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알림 발행`)
};

const fr_wb_node_notify_desc = /** @type {(inputs: Wb_Node_Notify_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier une notification`)
};

/**
* | output |
* | --- |
* | "Publish notification" |
*
* @param {Wb_Node_Notify_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_notify_desc = /** @type {((inputs?: Wb_Node_Notify_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Notify_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_notify_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_notify_desc(inputs)
	if (locale === "es") return es_wb_node_notify_desc(inputs)
	if (locale === "ja") return ja_wb_node_notify_desc(inputs)
	if (locale === "hi") return hi_wb_node_notify_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_notify_desc(inputs)
	if (locale === "ko") return ko_wb_node_notify_desc(inputs)
	return fr_wb_node_notify_desc(inputs)
});