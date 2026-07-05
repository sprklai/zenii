/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Persona_Create_ButtonInputs */

const en_settings_persona_create_button = /** @type {(inputs: Settings_Persona_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create`)
};

const zh_cn2_settings_persona_create_button = /** @type {(inputs: Settings_Persona_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建`)
};

const es_settings_persona_create_button = /** @type {(inputs: Settings_Persona_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear`)
};

const ja_settings_persona_create_button = /** @type {(inputs: Settings_Persona_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作成`)
};

const hi_settings_persona_create_button = /** @type {(inputs: Settings_Persona_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`बनाएँ`)
};

const pt_br2_settings_persona_create_button = /** @type {(inputs: Settings_Persona_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar`)
};

const ko_settings_persona_create_button = /** @type {(inputs: Settings_Persona_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`생성`)
};

const fr_settings_persona_create_button = /** @type {(inputs: Settings_Persona_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer`)
};

/**
* | output |
* | --- |
* | "Create" |
*
* @param {Settings_Persona_Create_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_persona_create_button = /** @type {((inputs?: Settings_Persona_Create_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Persona_Create_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_persona_create_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_persona_create_button(inputs)
	if (locale === "es") return es_settings_persona_create_button(inputs)
	if (locale === "ja") return ja_settings_persona_create_button(inputs)
	if (locale === "hi") return hi_settings_persona_create_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_persona_create_button(inputs)
	if (locale === "ko") return ko_settings_persona_create_button(inputs)
	return fr_settings_persona_create_button(inputs)
});