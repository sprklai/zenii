/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Delete_Button_TitleInputs */

const en_workflows_delete_button_title = /** @type {(inputs: Workflows_Delete_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

const zh_cn2_workflows_delete_button_title = /** @type {(inputs: Workflows_Delete_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const es_workflows_delete_button_title = /** @type {(inputs: Workflows_Delete_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar`)
};

const ja_workflows_delete_button_title = /** @type {(inputs: Workflows_Delete_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

const hi_workflows_delete_button_title = /** @type {(inputs: Workflows_Delete_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हटाएँ`)
};

const pt_br2_workflows_delete_button_title = /** @type {(inputs: Workflows_Delete_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir`)
};

const ko_workflows_delete_button_title = /** @type {(inputs: Workflows_Delete_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`삭제`)
};

const fr_workflows_delete_button_title = /** @type {(inputs: Workflows_Delete_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Workflows_Delete_Button_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_delete_button_title = /** @type {((inputs?: Workflows_Delete_Button_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Delete_Button_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_delete_button_title(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_delete_button_title(inputs)
	if (locale === "es") return es_workflows_delete_button_title(inputs)
	if (locale === "ja") return ja_workflows_delete_button_title(inputs)
	if (locale === "hi") return hi_workflows_delete_button_title(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_delete_button_title(inputs)
	if (locale === "ko") return ko_workflows_delete_button_title(inputs)
	return fr_workflows_delete_button_title(inputs)
});