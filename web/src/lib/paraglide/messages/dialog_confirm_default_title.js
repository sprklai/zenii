/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dialog_Confirm_Default_TitleInputs */

const en_dialog_confirm_default_title = /** @type {(inputs: Dialog_Confirm_Default_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Are you sure?`)
};

const zh_cn2_dialog_confirm_default_title = /** @type {(inputs: Dialog_Confirm_Default_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确定要继续吗？`)
};

const es_dialog_confirm_default_title = /** @type {(inputs: Dialog_Confirm_Default_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Estás seguro?`)
};

const ja_dialog_confirm_default_title = /** @type {(inputs: Dialog_Confirm_Default_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`よろしいですか？`)
};

const hi_dialog_confirm_default_title = /** @type {(inputs: Dialog_Confirm_Default_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`क्या आप सुनिश्चित हैं?`)
};

const pt_br2_dialog_confirm_default_title = /** @type {(inputs: Dialog_Confirm_Default_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tem certeza?`)
};

const ko_dialog_confirm_default_title = /** @type {(inputs: Dialog_Confirm_Default_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`정말 삭제하시겠습니까?`)
};

const fr_dialog_confirm_default_title = /** @type {(inputs: Dialog_Confirm_Default_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Êtes-vous sûr ?`)
};

/**
* | output |
* | --- |
* | "Are you sure?" |
*
* @param {Dialog_Confirm_Default_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dialog_confirm_default_title = /** @type {((inputs?: Dialog_Confirm_Default_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dialog_Confirm_Default_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dialog_confirm_default_title(inputs)
	if (locale === "zh-CN") return zh_cn2_dialog_confirm_default_title(inputs)
	if (locale === "es") return es_dialog_confirm_default_title(inputs)
	if (locale === "ja") return ja_dialog_confirm_default_title(inputs)
	if (locale === "hi") return hi_dialog_confirm_default_title(inputs)
	if (locale === "pt-BR") return pt_br2_dialog_confirm_default_title(inputs)
	if (locale === "ko") return ko_dialog_confirm_default_title(inputs)
	return fr_dialog_confirm_default_title(inputs)
});