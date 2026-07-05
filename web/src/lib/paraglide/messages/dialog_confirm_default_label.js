/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dialog_Confirm_Default_LabelInputs */

const en_dialog_confirm_default_label = /** @type {(inputs: Dialog_Confirm_Default_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

const zh_cn2_dialog_confirm_default_label = /** @type {(inputs: Dialog_Confirm_Default_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const es_dialog_confirm_default_label = /** @type {(inputs: Dialog_Confirm_Default_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar`)
};

const ja_dialog_confirm_default_label = /** @type {(inputs: Dialog_Confirm_Default_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

const hi_dialog_confirm_default_label = /** @type {(inputs: Dialog_Confirm_Default_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हटाएँ`)
};

const pt_br2_dialog_confirm_default_label = /** @type {(inputs: Dialog_Confirm_Default_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir`)
};

const ko_dialog_confirm_default_label = /** @type {(inputs: Dialog_Confirm_Default_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`삭제`)
};

const fr_dialog_confirm_default_label = /** @type {(inputs: Dialog_Confirm_Default_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Dialog_Confirm_Default_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dialog_confirm_default_label = /** @type {((inputs?: Dialog_Confirm_Default_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dialog_Confirm_Default_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dialog_confirm_default_label(inputs)
	if (locale === "zh-CN") return zh_cn2_dialog_confirm_default_label(inputs)
	if (locale === "es") return es_dialog_confirm_default_label(inputs)
	if (locale === "ja") return ja_dialog_confirm_default_label(inputs)
	if (locale === "hi") return hi_dialog_confirm_default_label(inputs)
	if (locale === "pt-BR") return pt_br2_dialog_confirm_default_label(inputs)
	if (locale === "ko") return ko_dialog_confirm_default_label(inputs)
	return fr_dialog_confirm_default_label(inputs)
});