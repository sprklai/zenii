/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Persona_Skill_Id_PlaceholderInputs */

const en_settings_persona_skill_id_placeholder = /** @type {(inputs: Settings_Persona_Skill_Id_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skill ID`)
};

const zh_cn2_settings_persona_skill_id_placeholder = /** @type {(inputs: Settings_Persona_Skill_Id_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`技能 ID`)
};

const es_settings_persona_skill_id_placeholder = /** @type {(inputs: Settings_Persona_Skill_Id_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID de habilidad`)
};

const ja_settings_persona_skill_id_placeholder = /** @type {(inputs: Settings_Persona_Skill_Id_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スキル ID`)
};

const hi_settings_persona_skill_id_placeholder = /** @type {(inputs: Settings_Persona_Skill_Id_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कौशल ID`)
};

const pt_br2_settings_persona_skill_id_placeholder = /** @type {(inputs: Settings_Persona_Skill_Id_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID da Habilidade`)
};

const ko_settings_persona_skill_id_placeholder = /** @type {(inputs: Settings_Persona_Skill_Id_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`스킬 ID`)
};

const fr_settings_persona_skill_id_placeholder = /** @type {(inputs: Settings_Persona_Skill_Id_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID de compétence`)
};

/**
* | output |
* | --- |
* | "Skill ID" |
*
* @param {Settings_Persona_Skill_Id_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_persona_skill_id_placeholder = /** @type {((inputs?: Settings_Persona_Skill_Id_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Persona_Skill_Id_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_persona_skill_id_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_persona_skill_id_placeholder(inputs)
	if (locale === "es") return es_settings_persona_skill_id_placeholder(inputs)
	if (locale === "ja") return ja_settings_persona_skill_id_placeholder(inputs)
	if (locale === "hi") return hi_settings_persona_skill_id_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_settings_persona_skill_id_placeholder(inputs)
	if (locale === "ko") return ko_settings_persona_skill_id_placeholder(inputs)
	return fr_settings_persona_skill_id_placeholder(inputs)
});