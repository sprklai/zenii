/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Validation_Cycle_DetectedInputs */

const en_wb_validation_cycle_detected = /** @type {(inputs: Wb_Validation_Cycle_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cycle detected in workflow graph`)
};

const zh_cn2_wb_validation_cycle_detected = /** @type {(inputs: Wb_Validation_Cycle_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工作流图中检测到循环`)
};

const es_wb_validation_cycle_detected = /** @type {(inputs: Wb_Validation_Cycle_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ciclo detectado en el grafo del flujo`)
};

const ja_wb_validation_cycle_detected = /** @type {(inputs: Wb_Validation_Cycle_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローグラフでサイクルが検出されました`)
};

const hi_wb_validation_cycle_detected = /** @type {(inputs: Wb_Validation_Cycle_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो ग्राफ में चक्र का पता चला`)
};

const pt_br2_wb_validation_cycle_detected = /** @type {(inputs: Wb_Validation_Cycle_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ciclo detectado no grafo do fluxo`)
};

const ko_wb_validation_cycle_detected = /** @type {(inputs: Wb_Validation_Cycle_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로 그래프에서 순환이 감지되었습니다`)
};

const fr_wb_validation_cycle_detected = /** @type {(inputs: Wb_Validation_Cycle_DetectedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cycle détecté dans le graphe du workflow`)
};

/**
* | output |
* | --- |
* | "Cycle detected in workflow graph" |
*
* @param {Wb_Validation_Cycle_DetectedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_validation_cycle_detected = /** @type {((inputs?: Wb_Validation_Cycle_DetectedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Validation_Cycle_DetectedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_validation_cycle_detected(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_validation_cycle_detected(inputs)
	if (locale === "es") return es_wb_validation_cycle_detected(inputs)
	if (locale === "ja") return ja_wb_validation_cycle_detected(inputs)
	if (locale === "hi") return hi_wb_validation_cycle_detected(inputs)
	if (locale === "pt-BR") return pt_br2_wb_validation_cycle_detected(inputs)
	if (locale === "ko") return ko_wb_validation_cycle_detected(inputs)
	return fr_wb_validation_cycle_detected(inputs)
});