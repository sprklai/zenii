/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Import_Error_No_NameInputs */

const en_wb_import_error_no_name = /** @type {(inputs: Wb_Import_Error_No_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Missing workflow name field`)
};

const zh_cn2_wb_import_error_no_name = /** @type {(inputs: Wb_Import_Error_No_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`缺少工作流 name 字段`)
};

const es_wb_import_error_no_name = /** @type {(inputs: Wb_Import_Error_No_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falta el campo nombre del flujo de trabajo`)
};

const ja_wb_import_error_no_name = /** @type {(inputs: Wb_Import_Error_No_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフロー名フィールドがありません`)
};

const hi_wb_import_error_no_name = /** @type {(inputs: Wb_Import_Error_No_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो name फ़ील्ड अनुपस्थित है`)
};

const pt_br2_wb_import_error_no_name = /** @type {(inputs: Wb_Import_Error_No_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Campo nome do workflow ausente`)
};

const ko_wb_import_error_no_name = /** @type {(inputs: Wb_Import_Error_No_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로 name 필드가 없습니다`)
};

const fr_wb_import_error_no_name = /** @type {(inputs: Wb_Import_Error_No_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Champ name du flux de travail manquant`)
};

/**
* | output |
* | --- |
* | "Missing workflow name field" |
*
* @param {Wb_Import_Error_No_NameInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_import_error_no_name = /** @type {((inputs?: Wb_Import_Error_No_NameInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Import_Error_No_NameInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_import_error_no_name(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_import_error_no_name(inputs)
	if (locale === "es") return es_wb_import_error_no_name(inputs)
	if (locale === "ja") return ja_wb_import_error_no_name(inputs)
	if (locale === "hi") return hi_wb_import_error_no_name(inputs)
	if (locale === "pt-BR") return pt_br2_wb_import_error_no_name(inputs)
	if (locale === "ko") return ko_wb_import_error_no_name(inputs)
	return fr_wb_import_error_no_name(inputs)
});