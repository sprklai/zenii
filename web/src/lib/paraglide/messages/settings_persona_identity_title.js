/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Persona_Identity_TitleInputs */

const en_settings_persona_identity_title = /** @type {(inputs: Settings_Persona_Identity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identity Files`)
};

const zh_cn2_settings_persona_identity_title = /** @type {(inputs: Settings_Persona_Identity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`身份文件`)
};

const es_settings_persona_identity_title = /** @type {(inputs: Settings_Persona_Identity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivos de identidad`)
};

const ja_settings_persona_identity_title = /** @type {(inputs: Settings_Persona_Identity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アイデンティティファイル`)
};

const hi_settings_persona_identity_title = /** @type {(inputs: Settings_Persona_Identity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आइडेंटिटी फ़ाइलें`)
};

const pt_br2_settings_persona_identity_title = /** @type {(inputs: Settings_Persona_Identity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivos de Identidade`)
};

const ko_settings_persona_identity_title = /** @type {(inputs: Settings_Persona_Identity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`아이덴티티 파일`)
};

const fr_settings_persona_identity_title = /** @type {(inputs: Settings_Persona_Identity_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichiers d'identité`)
};

/**
* | output |
* | --- |
* | "Identity Files" |
*
* @param {Settings_Persona_Identity_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_persona_identity_title = /** @type {((inputs?: Settings_Persona_Identity_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Persona_Identity_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_persona_identity_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_persona_identity_title(inputs)
	if (locale === "es") return es_settings_persona_identity_title(inputs)
	if (locale === "ja") return ja_settings_persona_identity_title(inputs)
	if (locale === "hi") return hi_settings_persona_identity_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_persona_identity_title(inputs)
	if (locale === "ko") return ko_settings_persona_identity_title(inputs)
	return fr_settings_persona_identity_title(inputs)
});