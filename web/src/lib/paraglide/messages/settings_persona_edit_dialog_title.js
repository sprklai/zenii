/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Settings_Persona_Edit_Dialog_TitleInputs */

const en_settings_persona_edit_dialog_title = /** @type {(inputs: Settings_Persona_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Edit: ${i?.name}`)
};

const zh_cn2_settings_persona_edit_dialog_title = /** @type {(inputs: Settings_Persona_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编辑：${i?.name}`)
};

const es_settings_persona_edit_dialog_title = /** @type {(inputs: Settings_Persona_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editar: ${i?.name}`)
};

const ja_settings_persona_edit_dialog_title = /** @type {(inputs: Settings_Persona_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`編集：${i?.name}`)
};

const hi_settings_persona_edit_dialog_title = /** @type {(inputs: Settings_Persona_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`संपादित करें: ${i?.name}`)
};

const pt_br2_settings_persona_edit_dialog_title = /** @type {(inputs: Settings_Persona_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editar: ${i?.name}`)
};

const ko_settings_persona_edit_dialog_title = /** @type {(inputs: Settings_Persona_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`편집: ${i?.name}`)
};

const fr_settings_persona_edit_dialog_title = /** @type {(inputs: Settings_Persona_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifier : ${i?.name}`)
};

/**
* | output |
* | --- |
* | "Edit: {name}" |
*
* @param {Settings_Persona_Edit_Dialog_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_persona_edit_dialog_title = /** @type {((inputs: Settings_Persona_Edit_Dialog_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Persona_Edit_Dialog_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_persona_edit_dialog_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_persona_edit_dialog_title(inputs)
	if (locale === "es") return es_settings_persona_edit_dialog_title(inputs)
	if (locale === "ja") return ja_settings_persona_edit_dialog_title(inputs)
	if (locale === "hi") return hi_settings_persona_edit_dialog_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_persona_edit_dialog_title(inputs)
	if (locale === "ko") return ko_settings_persona_edit_dialog_title(inputs)
	return fr_settings_persona_edit_dialog_title(inputs)
});