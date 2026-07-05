/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Trigger_Cron_LabelInputs */

const en_wb_node_trigger_cron_label = /** @type {(inputs: Wb_Node_Trigger_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron Trigger`)
};

const zh_cn2_wb_node_trigger_cron_label = /** @type {(inputs: Wb_Node_Trigger_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 触发器`)
};

const es_wb_node_trigger_cron_label = /** @type {(inputs: Wb_Node_Trigger_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disparador Cron`)
};

const ja_wb_node_trigger_cron_label = /** @type {(inputs: Wb_Node_Trigger_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron トリガー`)
};

const hi_wb_node_trigger_cron_label = /** @type {(inputs: Wb_Node_Trigger_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron ट्रिगर`)
};

const pt_br2_wb_node_trigger_cron_label = /** @type {(inputs: Wb_Node_Trigger_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gatilho Cron`)
};

const ko_wb_node_trigger_cron_label = /** @type {(inputs: Wb_Node_Trigger_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron 트리거`)
};

const fr_wb_node_trigger_cron_label = /** @type {(inputs: Wb_Node_Trigger_Cron_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déclencheur Cron`)
};

/**
* | output |
* | --- |
* | "Cron Trigger" |
*
* @param {Wb_Node_Trigger_Cron_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_trigger_cron_label = /** @type {((inputs?: Wb_Node_Trigger_Cron_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Trigger_Cron_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_trigger_cron_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_trigger_cron_label(inputs)
	if (locale === "es") return es_wb_node_trigger_cron_label(inputs)
	if (locale === "ja") return ja_wb_node_trigger_cron_label(inputs)
	if (locale === "hi") return hi_wb_node_trigger_cron_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_trigger_cron_label(inputs)
	if (locale === "ko") return ko_wb_node_trigger_cron_label(inputs)
	return fr_wb_node_trigger_cron_label(inputs)
});