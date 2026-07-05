/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Edit_Button_TitleInputs */

const en_workflows_edit_button_title = /** @type {(inputs: Workflows_Edit_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
};

const zh_cn2_workflows_edit_button_title = /** @type {(inputs: Workflows_Edit_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑`)
};

const es_workflows_edit_button_title = /** @type {(inputs: Workflows_Edit_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const ja_workflows_edit_button_title = /** @type {(inputs: Workflows_Edit_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集`)
};

const hi_workflows_edit_button_title = /** @type {(inputs: Workflows_Edit_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`संपादित करें`)
};

const pt_br2_workflows_edit_button_title = /** @type {(inputs: Workflows_Edit_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const ko_workflows_edit_button_title = /** @type {(inputs: Workflows_Edit_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`편집`)
};

const fr_workflows_edit_button_title = /** @type {(inputs: Workflows_Edit_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier`)
};

/**
* | output |
* | --- |
* | "Edit" |
*
* @param {Workflows_Edit_Button_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_edit_button_title = /** @type {((inputs?: Workflows_Edit_Button_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Edit_Button_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_edit_button_title(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_edit_button_title(inputs)
	if (locale === "es") return es_workflows_edit_button_title(inputs)
	if (locale === "ja") return ja_workflows_edit_button_title(inputs)
	if (locale === "hi") return hi_workflows_edit_button_title(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_edit_button_title(inputs)
	if (locale === "ko") return ko_workflows_edit_button_title(inputs)
	return fr_workflows_edit_button_title(inputs)
});