/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Persona_Save_ButtonInputs */

const en_settings_persona_save_button = /** @type {(inputs: Settings_Persona_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save`)
};

const zh_cn2_settings_persona_save_button = /** @type {(inputs: Settings_Persona_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

const es_settings_persona_save_button = /** @type {(inputs: Settings_Persona_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar`)
};

const ja_settings_persona_save_button = /** @type {(inputs: Settings_Persona_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

const hi_settings_persona_save_button = /** @type {(inputs: Settings_Persona_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सहेजें`)
};

const pt_br2_settings_persona_save_button = /** @type {(inputs: Settings_Persona_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar`)
};

const ko_settings_persona_save_button = /** @type {(inputs: Settings_Persona_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`저장`)
};

const fr_settings_persona_save_button = /** @type {(inputs: Settings_Persona_Save_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer`)
};

/**
* | output |
* | --- |
* | "Save" |
*
* @param {Settings_Persona_Save_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_persona_save_button = /** @type {((inputs?: Settings_Persona_Save_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Persona_Save_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_persona_save_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_persona_save_button(inputs)
	if (locale === "es") return es_settings_persona_save_button(inputs)
	if (locale === "ja") return ja_settings_persona_save_button(inputs)
	if (locale === "hi") return hi_settings_persona_save_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_persona_save_button(inputs)
	if (locale === "ko") return ko_settings_persona_save_button(inputs)
	return fr_settings_persona_save_button(inputs)
});