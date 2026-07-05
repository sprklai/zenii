/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Wb_Validation_Condition_BranchesInputs */

const en_wb_validation_condition_branches = /** @type {(inputs: Wb_Validation_Condition_BranchesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Condition node "${i?.name}" requires both true and false branches`)
};

const zh_cn2_wb_validation_condition_branches = /** @type {(inputs: Wb_Validation_Condition_BranchesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`条件节点"${i?.name}"需要真值和假值两个分支`)
};

const es_wb_validation_condition_branches = /** @type {(inputs: Wb_Validation_Condition_BranchesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`El nodo de condición "${i?.name}" requiere ramas verdadera y falsa`)
};

const ja_wb_validation_condition_branches = /** @type {(inputs: Wb_Validation_Condition_BranchesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`条件ノード「${i?.name}」には真と偽の両方のブランチが必要です`)
};

const hi_wb_validation_condition_branches = /** @type {(inputs: Wb_Validation_Condition_BranchesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`शर्त नोड "${i?.name}" को सत्य और असत्य दोनों शाखाओं की आवश्यकता है`)
};

const pt_br2_wb_validation_condition_branches = /** @type {(inputs: Wb_Validation_Condition_BranchesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O nó de condição "${i?.name}" requer ramos verdadeiro e falso`)
};

const ko_wb_validation_condition_branches = /** @type {(inputs: Wb_Validation_Condition_BranchesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`조건 노드 "${i?.name}"에는 참과 거짓 분기가 모두 필요합니다`)
};

const fr_wb_validation_condition_branches = /** @type {(inputs: Wb_Validation_Condition_BranchesInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le nœud de condition « ${i?.name} » nécessite les branches vraie et fausse`)
};

/**
* | output |
* | --- |
* | "Condition node \"{name}\" requires both true and false branches" |
*
* @param {Wb_Validation_Condition_BranchesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_validation_condition_branches = /** @type {((inputs: Wb_Validation_Condition_BranchesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Validation_Condition_BranchesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_validation_condition_branches(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_validation_condition_branches(inputs)
	if (locale === "es") return es_wb_validation_condition_branches(inputs)
	if (locale === "ja") return ja_wb_validation_condition_branches(inputs)
	if (locale === "hi") return hi_wb_validation_condition_branches(inputs)
	if (locale === "pt-BR") return pt_br2_wb_validation_condition_branches(inputs)
	if (locale === "ko") return ko_wb_validation_condition_branches(inputs)
	return fr_wb_validation_condition_branches(inputs)
});