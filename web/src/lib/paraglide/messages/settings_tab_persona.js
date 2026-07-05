/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Tab_PersonaInputs */

const en_settings_tab_persona = /** @type {(inputs: Settings_Tab_PersonaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Persona`)
};

const zh_cn2_settings_tab_persona = /** @type {(inputs: Settings_Tab_PersonaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`角色`)
};

const es_settings_tab_persona = /** @type {(inputs: Settings_Tab_PersonaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Persona`)
};

const ja_settings_tab_persona = /** @type {(inputs: Settings_Tab_PersonaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ペルソナ`)
};

const hi_settings_tab_persona = /** @type {(inputs: Settings_Tab_PersonaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`व्यक्तित्व`)
};

const pt_br2_settings_tab_persona = /** @type {(inputs: Settings_Tab_PersonaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Persona`)
};

const ko_settings_tab_persona = /** @type {(inputs: Settings_Tab_PersonaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`페르소나`)
};

const fr_settings_tab_persona = /** @type {(inputs: Settings_Tab_PersonaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Persona`)
};

/**
* | output |
* | --- |
* | "Persona" |
*
* @param {Settings_Tab_PersonaInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_tab_persona = /** @type {((inputs?: Settings_Tab_PersonaInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Tab_PersonaInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_tab_persona(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_tab_persona(inputs)
	if (locale === "es") return es_settings_tab_persona(inputs)
	if (locale === "ja") return ja_settings_tab_persona(inputs)
	if (locale === "hi") return hi_settings_tab_persona(inputs)
	if (locale === "pt-BR") return pt_br2_settings_tab_persona(inputs)
	if (locale === "ko") return ko_settings_tab_persona(inputs)
	return fr_settings_tab_persona(inputs)
});