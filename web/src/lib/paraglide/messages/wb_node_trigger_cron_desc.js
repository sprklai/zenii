/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Trigger_Cron_DescInputs */

const en_wb_node_trigger_cron_desc = /** @type {(inputs: Wb_Node_Trigger_Cron_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schedule-based trigger`)
};

const zh_cn2_wb_node_trigger_cron_desc = /** @type {(inputs: Wb_Node_Trigger_Cron_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`基于计划的触发器`)
};

const es_wb_node_trigger_cron_desc = /** @type {(inputs: Wb_Node_Trigger_Cron_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disparador basado en programación`)
};

const ja_wb_node_trigger_cron_desc = /** @type {(inputs: Wb_Node_Trigger_Cron_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジュールベースのトリガー`)
};

const hi_wb_node_trigger_cron_desc = /** @type {(inputs: Wb_Node_Trigger_Cron_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`शेड्यूल-आधारित ट्रिगर`)
};

const pt_br2_wb_node_trigger_cron_desc = /** @type {(inputs: Wb_Node_Trigger_Cron_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gatilho baseado em agendamento`)
};

const ko_wb_node_trigger_cron_desc = /** @type {(inputs: Wb_Node_Trigger_Cron_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`스케줄 기반 트리거`)
};

const fr_wb_node_trigger_cron_desc = /** @type {(inputs: Wb_Node_Trigger_Cron_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déclencheur basé sur une planification`)
};

/**
* | output |
* | --- |
* | "Schedule-based trigger" |
*
* @param {Wb_Node_Trigger_Cron_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_trigger_cron_desc = /** @type {((inputs?: Wb_Node_Trigger_Cron_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Trigger_Cron_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_trigger_cron_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_trigger_cron_desc(inputs)
	if (locale === "es") return es_wb_node_trigger_cron_desc(inputs)
	if (locale === "ja") return ja_wb_node_trigger_cron_desc(inputs)
	if (locale === "hi") return hi_wb_node_trigger_cron_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_trigger_cron_desc(inputs)
	if (locale === "ko") return ko_wb_node_trigger_cron_desc(inputs)
	return fr_wb_node_trigger_cron_desc(inputs)
});