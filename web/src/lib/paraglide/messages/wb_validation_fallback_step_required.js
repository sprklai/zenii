/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Validation_Fallback_Step_RequiredInputs */

const en_wb_validation_fallback_step_required = /** @type {(inputs: Wb_Validation_Fallback_Step_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select a fallback step`)
};

const zh_cn2_wb_validation_fallback_step_required = /** @type {(inputs: Wb_Validation_Fallback_Step_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择一个回退步骤`)
};

const es_wb_validation_fallback_step_required = /** @type {(inputs: Wb_Validation_Fallback_Step_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecciona un paso de respaldo`)
};

const ja_wb_validation_fallback_step_required = /** @type {(inputs: Wb_Validation_Fallback_Step_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォールバックステップを選択してください`)
};

const hi_wb_validation_fallback_step_required = /** @type {(inputs: Wb_Validation_Fallback_Step_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ॉलबैक चरण चुनें`)
};

const pt_br2_wb_validation_fallback_step_required = /** @type {(inputs: Wb_Validation_Fallback_Step_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecione uma etapa de fallback`)
};

const ko_wb_validation_fallback_step_required = /** @type {(inputs: Wb_Validation_Fallback_Step_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`대체 단계를 선택하세요`)
};

const fr_wb_validation_fallback_step_required = /** @type {(inputs: Wb_Validation_Fallback_Step_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sélectionnez une étape de repli`)
};

/**
* | output |
* | --- |
* | "Select a fallback step" |
*
* @param {Wb_Validation_Fallback_Step_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_validation_fallback_step_required = /** @type {((inputs?: Wb_Validation_Fallback_Step_RequiredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Validation_Fallback_Step_RequiredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_validation_fallback_step_required(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_validation_fallback_step_required(inputs)
	if (locale === "es") return es_wb_validation_fallback_step_required(inputs)
	if (locale === "ja") return ja_wb_validation_fallback_step_required(inputs)
	if (locale === "hi") return hi_wb_validation_fallback_step_required(inputs)
	if (locale === "pt-BR") return pt_br2_wb_validation_fallback_step_required(inputs)
	if (locale === "ko") return ko_wb_validation_fallback_step_required(inputs)
	return fr_wb_validation_fallback_step_required(inputs)
});