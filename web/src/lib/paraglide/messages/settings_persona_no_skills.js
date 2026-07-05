/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Persona_No_SkillsInputs */

const en_settings_persona_no_skills = /** @type {(inputs: Settings_Persona_No_SkillsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No skills configured`)
};

const zh_cn2_settings_persona_no_skills = /** @type {(inputs: Settings_Persona_No_SkillsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未配置技能`)
};

const es_settings_persona_no_skills = /** @type {(inputs: Settings_Persona_No_SkillsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay habilidades configuradas`)
};

const ja_settings_persona_no_skills = /** @type {(inputs: Settings_Persona_No_SkillsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スキルが設定されていません`)
};

const hi_settings_persona_no_skills = /** @type {(inputs: Settings_Persona_No_SkillsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई कौशल कॉन्फ़िगर नहीं`)
};

const pt_br2_settings_persona_no_skills = /** @type {(inputs: Settings_Persona_No_SkillsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma habilidade configurada`)
};

const ko_settings_persona_no_skills = /** @type {(inputs: Settings_Persona_No_SkillsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정된 스킬 없음`)
};

const fr_settings_persona_no_skills = /** @type {(inputs: Settings_Persona_No_SkillsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune compétence configurée`)
};

/**
* | output |
* | --- |
* | "No skills configured" |
*
* @param {Settings_Persona_No_SkillsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_persona_no_skills = /** @type {((inputs?: Settings_Persona_No_SkillsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Persona_No_SkillsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_persona_no_skills(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_persona_no_skills(inputs)
	if (locale === "es") return es_settings_persona_no_skills(inputs)
	if (locale === "ja") return ja_settings_persona_no_skills(inputs)
	if (locale === "hi") return hi_settings_persona_no_skills(inputs)
	if (locale === "pt-BR") return pt_br2_settings_persona_no_skills(inputs)
	if (locale === "ko") return ko_settings_persona_no_skills(inputs)
	return fr_settings_persona_no_skills(inputs)
});