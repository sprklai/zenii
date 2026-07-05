/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Wb_Validation_Duplicate_Step_NameInputs */

const en_wb_validation_duplicate_step_name = /** @type {(inputs: Wb_Validation_Duplicate_Step_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Duplicate step name: ${i?.name}`)
};

const zh_cn2_wb_validation_duplicate_step_name = /** @type {(inputs: Wb_Validation_Duplicate_Step_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`重复的步骤名称：${i?.name}`)
};

const es_wb_validation_duplicate_step_name = /** @type {(inputs: Wb_Validation_Duplicate_Step_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nombre de paso duplicado: ${i?.name}`)
};

const ja_wb_validation_duplicate_step_name = /** @type {(inputs: Wb_Validation_Duplicate_Step_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ステップ名が重複しています: ${i?.name}`)
};

const hi_wb_validation_duplicate_step_name = /** @type {(inputs: Wb_Validation_Duplicate_Step_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`डुप्लिकेट चरण नाम: ${i?.name}`)
};

const pt_br2_wb_validation_duplicate_step_name = /** @type {(inputs: Wb_Validation_Duplicate_Step_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nome de etapa duplicado: ${i?.name}`)
};

const ko_wb_validation_duplicate_step_name = /** @type {(inputs: Wb_Validation_Duplicate_Step_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`중복 단계 이름: ${i?.name}`)
};

const fr_wb_validation_duplicate_step_name = /** @type {(inputs: Wb_Validation_Duplicate_Step_NameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nom d'étape en double : ${i?.name}`)
};

/**
* | output |
* | --- |
* | "Duplicate step name: {name}" |
*
* @param {Wb_Validation_Duplicate_Step_NameInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_validation_duplicate_step_name = /** @type {((inputs: Wb_Validation_Duplicate_Step_NameInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Validation_Duplicate_Step_NameInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_validation_duplicate_step_name(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_validation_duplicate_step_name(inputs)
	if (locale === "es") return es_wb_validation_duplicate_step_name(inputs)
	if (locale === "ja") return ja_wb_validation_duplicate_step_name(inputs)
	if (locale === "hi") return hi_wb_validation_duplicate_step_name(inputs)
	if (locale === "pt-BR") return pt_br2_wb_validation_duplicate_step_name(inputs)
	if (locale === "ko") return ko_wb_validation_duplicate_step_name(inputs)
	return fr_wb_validation_duplicate_step_name(inputs)
});