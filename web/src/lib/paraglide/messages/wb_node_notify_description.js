/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Notify_DescriptionInputs */

const en_wb_node_notify_description = /** @type {(inputs: Wb_Node_Notify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publish an in-app notification`)
};

const zh_cn2_wb_node_notify_description = /** @type {(inputs: Wb_Node_Notify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布应用内通知`)
};

const es_wb_node_notify_description = /** @type {(inputs: Wb_Node_Notify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar una notificación en la aplicación`)
};

const ja_wb_node_notify_description = /** @type {(inputs: Wb_Node_Notify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アプリ内通知を発行します`)
};

const hi_wb_node_notify_description = /** @type {(inputs: Wb_Node_Notify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`इन-ऐप सूचना प्रकाशित करें`)
};

const pt_br2_wb_node_notify_description = /** @type {(inputs: Wb_Node_Notify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicar uma notificação no aplicativo`)
};

const ko_wb_node_notify_description = /** @type {(inputs: Wb_Node_Notify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`앱 내 알림을 발행합니다`)
};

const fr_wb_node_notify_description = /** @type {(inputs: Wb_Node_Notify_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publier une notification dans l'application`)
};

/**
* | output |
* | --- |
* | "Publish an in-app notification" |
*
* @param {Wb_Node_Notify_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_notify_description = /** @type {((inputs?: Wb_Node_Notify_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Notify_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_notify_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_notify_description(inputs)
	if (locale === "es") return es_wb_node_notify_description(inputs)
	if (locale === "ja") return ja_wb_node_notify_description(inputs)
	if (locale === "hi") return hi_wb_node_notify_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_notify_description(inputs)
	if (locale === "ko") return ko_wb_node_notify_description(inputs)
	return fr_wb_node_notify_description(inputs)
});