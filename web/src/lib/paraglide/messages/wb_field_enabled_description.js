/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Enabled_DescriptionInputs */

const en_wb_field_enabled_description = /** @type {(inputs: Wb_Field_Enabled_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Whether the job should be enabled (true) or disabled (false)`)
};

const zh_cn2_wb_field_enabled_description = /** @type {(inputs: Wb_Field_Enabled_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任务是否应启用（true）或禁用（false）`)
};

const es_wb_field_enabled_description = /** @type {(inputs: Wb_Field_Enabled_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si la tarea debe estar habilitada (verdadero) o deshabilitada (falso)`)
};

const ja_wb_field_enabled_description = /** @type {(inputs: Wb_Field_Enabled_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブを有効（true）または無効（false）にするかどうか`)
};

const hi_wb_field_enabled_description = /** @type {(inputs: Wb_Field_Enabled_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जॉब सक्षम (true) या अक्षम (false) होना चाहिए`)
};

const pt_br2_wb_field_enabled_description = /** @type {(inputs: Wb_Field_Enabled_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se a tarefa deve estar habilitada (verdadeiro) ou desabilitada (falso)`)
};

const ko_wb_field_enabled_description = /** @type {(inputs: Wb_Field_Enabled_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작업을 활성화（true）또는 비활성화（false）할지 여부`)
};

const fr_wb_field_enabled_description = /** @type {(inputs: Wb_Field_Enabled_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si la tâche doit être activée (vrai) ou désactivée (faux)`)
};

/**
* | output |
* | --- |
* | "Whether the job should be enabled (true) or disabled (false)" |
*
* @param {Wb_Field_Enabled_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_enabled_description = /** @type {((inputs?: Wb_Field_Enabled_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Enabled_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_enabled_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_enabled_description(inputs)
	if (locale === "es") return es_wb_field_enabled_description(inputs)
	if (locale === "ja") return ja_wb_field_enabled_description(inputs)
	if (locale === "hi") return hi_wb_field_enabled_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_enabled_description(inputs)
	if (locale === "ko") return ko_wb_field_enabled_description(inputs)
	return fr_wb_field_enabled_description(inputs)
});