/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Sysinfo_Action_DescriptionInputs */

const en_wb_field_sysinfo_action_description = /** @type {(inputs: Wb_Field_Sysinfo_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Which system information category to retrieve`)
};

const zh_cn2_wb_field_sysinfo_action_description = /** @type {(inputs: Wb_Field_Sysinfo_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要获取的系统信息类别`)
};

const es_wb_field_sysinfo_action_description = /** @type {(inputs: Wb_Field_Sysinfo_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría de información del sistema a recuperar`)
};

const ja_wb_field_sysinfo_action_description = /** @type {(inputs: Wb_Field_Sysinfo_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取得するシステム情報のカテゴリ`)
};

const hi_wb_field_sysinfo_action_description = /** @type {(inputs: Wb_Field_Sysinfo_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्राप्त करने के लिए सिस्टम जानकारी श्रेणी`)
};

const pt_br2_wb_field_sysinfo_action_description = /** @type {(inputs: Wb_Field_Sysinfo_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria de informação do sistema a recuperar`)
};

const ko_wb_field_sysinfo_action_description = /** @type {(inputs: Wb_Field_Sysinfo_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`가져올 시스템 정보 카테고리`)
};

const fr_wb_field_sysinfo_action_description = /** @type {(inputs: Wb_Field_Sysinfo_Action_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie d'informations système à récupérer`)
};

/**
* | output |
* | --- |
* | "Which system information category to retrieve" |
*
* @param {Wb_Field_Sysinfo_Action_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_sysinfo_action_description = /** @type {((inputs?: Wb_Field_Sysinfo_Action_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Sysinfo_Action_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_sysinfo_action_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_sysinfo_action_description(inputs)
	if (locale === "es") return es_wb_field_sysinfo_action_description(inputs)
	if (locale === "ja") return ja_wb_field_sysinfo_action_description(inputs)
	if (locale === "hi") return hi_wb_field_sysinfo_action_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_sysinfo_action_description(inputs)
	if (locale === "ko") return ko_wb_field_sysinfo_action_description(inputs)
	return fr_wb_field_sysinfo_action_description(inputs)
});