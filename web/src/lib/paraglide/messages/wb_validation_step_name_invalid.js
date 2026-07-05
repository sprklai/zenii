/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Validation_Step_Name_InvalidInputs */

const en_wb_validation_step_name_invalid = /** @type {(inputs: Wb_Validation_Step_Name_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Step name must contain only lowercase letters, numbers, and underscores`)
};

const zh_cn2_wb_validation_step_name_invalid = /** @type {(inputs: Wb_Validation_Step_Name_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`步骤名称只能包含小写字母、数字和下划线`)
};

const es_wb_validation_step_name_invalid = /** @type {(inputs: Wb_Validation_Step_Name_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El nombre del paso solo puede contener letras minúsculas, números y guiones bajos`)
};

const ja_wb_validation_step_name_invalid = /** @type {(inputs: Wb_Validation_Step_Name_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ステップ名には小文字、数字、アンダースコアのみ使用できます`)
};

const hi_wb_validation_step_name_invalid = /** @type {(inputs: Wb_Validation_Step_Name_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चरण नाम में केवल छोटे अक्षर, संख्याएं और अंडरस्कोर हो सकते हैं`)
};

const pt_br2_wb_validation_step_name_invalid = /** @type {(inputs: Wb_Validation_Step_Name_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O nome da etapa deve conter apenas letras minúsculas, números e sublinhados`)
};

const ko_wb_validation_step_name_invalid = /** @type {(inputs: Wb_Validation_Step_Name_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`단계 이름은 소문자, 숫자, 밑줄만 포함할 수 있습니다`)
};

const fr_wb_validation_step_name_invalid = /** @type {(inputs: Wb_Validation_Step_Name_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le nom de l'étape doit contenir uniquement des lettres minuscules, des chiffres et des tirets bas`)
};

/**
* | output |
* | --- |
* | "Step name must contain only lowercase letters, numbers, and underscores" |
*
* @param {Wb_Validation_Step_Name_InvalidInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_validation_step_name_invalid = /** @type {((inputs?: Wb_Validation_Step_Name_InvalidInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Validation_Step_Name_InvalidInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_validation_step_name_invalid(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_validation_step_name_invalid(inputs)
	if (locale === "es") return es_wb_validation_step_name_invalid(inputs)
	if (locale === "ja") return ja_wb_validation_step_name_invalid(inputs)
	if (locale === "hi") return hi_wb_validation_step_name_invalid(inputs)
	if (locale === "pt-BR") return pt_br2_wb_validation_step_name_invalid(inputs)
	if (locale === "ko") return ko_wb_validation_step_name_invalid(inputs)
	return fr_wb_validation_step_name_invalid(inputs)
});