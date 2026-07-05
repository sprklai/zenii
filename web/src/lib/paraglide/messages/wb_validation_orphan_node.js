/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Wb_Validation_Orphan_NodeInputs */

const en_wb_validation_orphan_node = /** @type {(inputs: Wb_Validation_Orphan_NodeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Orphan node detected: ${i?.name}`)
};

const zh_cn2_wb_validation_orphan_node = /** @type {(inputs: Wb_Validation_Orphan_NodeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`检测到孤立节点：${i?.name}`)
};

const es_wb_validation_orphan_node = /** @type {(inputs: Wb_Validation_Orphan_NodeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nodo huérfano detectado: ${i?.name}`)
};

const ja_wb_validation_orphan_node = /** @type {(inputs: Wb_Validation_Orphan_NodeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`孤立したノードが検出されました: ${i?.name}`)
};

const hi_wb_validation_orphan_node = /** @type {(inputs: Wb_Validation_Orphan_NodeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`अनाथ नोड का पता चला: ${i?.name}`)
};

const pt_br2_wb_validation_orphan_node = /** @type {(inputs: Wb_Validation_Orphan_NodeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nó órfão detectado: ${i?.name}`)
};

const ko_wb_validation_orphan_node = /** @type {(inputs: Wb_Validation_Orphan_NodeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`고아 노드가 감지되었습니다: ${i?.name}`)
};

const fr_wb_validation_orphan_node = /** @type {(inputs: Wb_Validation_Orphan_NodeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nœud orphelin détecté : ${i?.name}`)
};

/**
* | output |
* | --- |
* | "Orphan node detected: {name}" |
*
* @param {Wb_Validation_Orphan_NodeInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_validation_orphan_node = /** @type {((inputs: Wb_Validation_Orphan_NodeInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Validation_Orphan_NodeInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_validation_orphan_node(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_validation_orphan_node(inputs)
	if (locale === "es") return es_wb_validation_orphan_node(inputs)
	if (locale === "ja") return ja_wb_validation_orphan_node(inputs)
	if (locale === "hi") return hi_wb_validation_orphan_node(inputs)
	if (locale === "pt-BR") return pt_br2_wb_validation_orphan_node(inputs)
	if (locale === "ko") return ko_wb_validation_orphan_node(inputs)
	return fr_wb_validation_orphan_node(inputs)
});