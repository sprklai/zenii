/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Trigger_Manual_DescInputs */

const en_wb_node_trigger_manual_desc = /** @type {(inputs: Wb_Node_Trigger_Manual_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Run on demand`)
};

const zh_cn2_wb_node_trigger_manual_desc = /** @type {(inputs: Wb_Node_Trigger_Manual_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按需运行`)
};

const es_wb_node_trigger_manual_desc = /** @type {(inputs: Wb_Node_Trigger_Manual_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ejecutar bajo demanda`)
};

const ja_wb_node_trigger_manual_desc = /** @type {(inputs: Wb_Node_Trigger_Manual_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オンデマンドで実行`)
};

const hi_wb_node_trigger_manual_desc = /** @type {(inputs: Wb_Node_Trigger_Manual_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`माँग पर चलाएँ`)
};

const pt_br2_wb_node_trigger_manual_desc = /** @type {(inputs: Wb_Node_Trigger_Manual_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Executar sob demanda`)
};

const ko_wb_node_trigger_manual_desc = /** @type {(inputs: Wb_Node_Trigger_Manual_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`요청 시 실행`)
};

const fr_wb_node_trigger_manual_desc = /** @type {(inputs: Wb_Node_Trigger_Manual_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exécuter à la demande`)
};

/**
* | output |
* | --- |
* | "Run on demand" |
*
* @param {Wb_Node_Trigger_Manual_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_trigger_manual_desc = /** @type {((inputs?: Wb_Node_Trigger_Manual_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Trigger_Manual_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_trigger_manual_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_trigger_manual_desc(inputs)
	if (locale === "es") return es_wb_node_trigger_manual_desc(inputs)
	if (locale === "ja") return ja_wb_node_trigger_manual_desc(inputs)
	if (locale === "hi") return hi_wb_node_trigger_manual_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_trigger_manual_desc(inputs)
	if (locale === "ko") return ko_wb_node_trigger_manual_desc(inputs)
	return fr_wb_node_trigger_manual_desc(inputs)
});