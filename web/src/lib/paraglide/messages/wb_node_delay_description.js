/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_Delay_DescriptionInputs */

const en_wb_node_delay_description = /** @type {(inputs: Wb_Node_Delay_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pause workflow execution for a number of seconds`)
};

const zh_cn2_wb_node_delay_description = /** @type {(inputs: Wb_Node_Delay_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂停工作流执行若干秒`)
};

const es_wb_node_delay_description = /** @type {(inputs: Wb_Node_Delay_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pausar la ejecución del flujo de trabajo durante un número de segundos`)
};

const ja_wb_node_delay_description = /** @type {(inputs: Wb_Node_Delay_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`指定した秒数だけワークフローの実行を一時停止します`)
};

const hi_wb_node_delay_description = /** @type {(inputs: Wb_Node_Delay_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कुछ सेकंड के लिए वर्कफ़्लो निष्पादन रोकें`)
};

const pt_br2_wb_node_delay_description = /** @type {(inputs: Wb_Node_Delay_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pausar a execução do workflow por um número de segundos`)
};

const ko_wb_node_delay_description = /** @type {(inputs: Wb_Node_Delay_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`지정한 초 동안 워크플로 실행을 일시 중지합니다`)
};

const fr_wb_node_delay_description = /** @type {(inputs: Wb_Node_Delay_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suspendre l'exécution du flux de travail pendant un nombre de secondes`)
};

/**
* | output |
* | --- |
* | "Pause workflow execution for a number of seconds" |
*
* @param {Wb_Node_Delay_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_delay_description = /** @type {((inputs?: Wb_Node_Delay_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_Delay_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_delay_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_delay_description(inputs)
	if (locale === "es") return es_wb_node_delay_description(inputs)
	if (locale === "ja") return ja_wb_node_delay_description(inputs)
	if (locale === "hi") return hi_wb_node_delay_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_delay_description(inputs)
	if (locale === "ko") return ko_wb_node_delay_description(inputs)
	return fr_wb_node_delay_description(inputs)
});