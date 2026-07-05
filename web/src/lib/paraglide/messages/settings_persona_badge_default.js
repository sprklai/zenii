/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Persona_Badge_DefaultInputs */

const en_settings_persona_badge_default = /** @type {(inputs: Settings_Persona_Badge_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`default`)
};

const zh_cn2_settings_persona_badge_default = /** @type {(inputs: Settings_Persona_Badge_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`默认`)
};

const es_settings_persona_badge_default = /** @type {(inputs: Settings_Persona_Badge_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`predeterminado`)
};

const ja_settings_persona_badge_default = /** @type {(inputs: Settings_Persona_Badge_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デフォルト`)
};

const hi_settings_persona_badge_default = /** @type {(inputs: Settings_Persona_Badge_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डिफ़ॉल्ट`)
};

const pt_br2_settings_persona_badge_default = /** @type {(inputs: Settings_Persona_Badge_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`padrão`)
};

const ko_settings_persona_badge_default = /** @type {(inputs: Settings_Persona_Badge_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`기본값`)
};

const fr_settings_persona_badge_default = /** @type {(inputs: Settings_Persona_Badge_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`par défaut`)
};

/**
* | output |
* | --- |
* | "default" |
*
* @param {Settings_Persona_Badge_DefaultInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_persona_badge_default = /** @type {((inputs?: Settings_Persona_Badge_DefaultInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Persona_Badge_DefaultInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_persona_badge_default(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_persona_badge_default(inputs)
	if (locale === "es") return es_settings_persona_badge_default(inputs)
	if (locale === "ja") return ja_settings_persona_badge_default(inputs)
	if (locale === "hi") return hi_settings_persona_badge_default(inputs)
	if (locale === "pt-BR") return pt_br2_settings_persona_badge_default(inputs)
	if (locale === "ko") return ko_settings_persona_badge_default(inputs)
	return fr_settings_persona_badge_default(inputs)
});