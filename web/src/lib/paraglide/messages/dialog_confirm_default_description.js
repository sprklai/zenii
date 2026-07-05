/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dialog_Confirm_Default_DescriptionInputs */

const en_dialog_confirm_default_description = /** @type {(inputs: Dialog_Confirm_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This action cannot be undone.`)
};

const zh_cn2_dialog_confirm_default_description = /** @type {(inputs: Dialog_Confirm_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此操作无法撤销。`)
};

const es_dialog_confirm_default_description = /** @type {(inputs: Dialog_Confirm_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta acción no se puede deshacer.`)
};

const ja_dialog_confirm_default_description = /** @type {(inputs: Dialog_Confirm_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この操作は取り消せません。`)
};

const hi_dialog_confirm_default_description = /** @type {(inputs: Dialog_Confirm_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यह क्रिया पूर्ववत नहीं की जा सकती।`)
};

const pt_br2_dialog_confirm_default_description = /** @type {(inputs: Dialog_Confirm_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta ação não pode ser desfeita.`)
};

const ko_dialog_confirm_default_description = /** @type {(inputs: Dialog_Confirm_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 작업은 되돌릴 수 없습니다.`)
};

const fr_dialog_confirm_default_description = /** @type {(inputs: Dialog_Confirm_Default_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette action est irréversible.`)
};

/**
* | output |
* | --- |
* | "This action cannot be undone." |
*
* @param {Dialog_Confirm_Default_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dialog_confirm_default_description = /** @type {((inputs?: Dialog_Confirm_Default_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dialog_Confirm_Default_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dialog_confirm_default_description(inputs)
	if (locale === "zh-CN") return zh_cn2_dialog_confirm_default_description(inputs)
	if (locale === "es") return es_dialog_confirm_default_description(inputs)
	if (locale === "ja") return ja_dialog_confirm_default_description(inputs)
	if (locale === "hi") return hi_dialog_confirm_default_description(inputs)
	if (locale === "pt-BR") return pt_br2_dialog_confirm_default_description(inputs)
	if (locale === "ko") return ko_dialog_confirm_default_description(inputs)
	return fr_dialog_confirm_default_description(inputs)
});