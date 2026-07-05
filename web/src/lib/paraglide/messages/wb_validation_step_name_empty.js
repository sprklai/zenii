/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Validation_Step_Name_EmptyInputs */

const en_wb_validation_step_name_empty = /** @type {(inputs: Wb_Validation_Step_Name_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Step name cannot be empty`)
};

const zh_cn2_wb_validation_step_name_empty = /** @type {(inputs: Wb_Validation_Step_Name_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`步骤名称不能为空`)
};

const es_wb_validation_step_name_empty = /** @type {(inputs: Wb_Validation_Step_Name_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El nombre del paso no puede estar vacío`)
};

const ja_wb_validation_step_name_empty = /** @type {(inputs: Wb_Validation_Step_Name_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ステップ名を空にすることはできません`)
};

const hi_wb_validation_step_name_empty = /** @type {(inputs: Wb_Validation_Step_Name_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चरण नाम खाली नहीं हो सकता`)
};

const pt_br2_wb_validation_step_name_empty = /** @type {(inputs: Wb_Validation_Step_Name_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O nome da etapa não pode estar vazio`)
};

const ko_wb_validation_step_name_empty = /** @type {(inputs: Wb_Validation_Step_Name_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`단계 이름은 비워둘 수 없습니다`)
};

const fr_wb_validation_step_name_empty = /** @type {(inputs: Wb_Validation_Step_Name_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le nom de l'étape ne peut pas être vide`)
};

/**
* | output |
* | --- |
* | "Step name cannot be empty" |
*
* @param {Wb_Validation_Step_Name_EmptyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_validation_step_name_empty = /** @type {((inputs?: Wb_Validation_Step_Name_EmptyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Validation_Step_Name_EmptyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_validation_step_name_empty(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_validation_step_name_empty(inputs)
	if (locale === "es") return es_wb_validation_step_name_empty(inputs)
	if (locale === "ja") return ja_wb_validation_step_name_empty(inputs)
	if (locale === "hi") return hi_wb_validation_step_name_empty(inputs)
	if (locale === "pt-BR") return pt_br2_wb_validation_step_name_empty(inputs)
	if (locale === "ko") return ko_wb_validation_step_name_empty(inputs)
	return fr_wb_validation_step_name_empty(inputs)
});