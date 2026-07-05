/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Persona_Add_Skill_TitleInputs */

const en_settings_persona_add_skill_title = /** @type {(inputs: Settings_Persona_Add_Skill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Skill`)
};

const zh_cn2_settings_persona_add_skill_title = /** @type {(inputs: Settings_Persona_Add_Skill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加技能`)
};

const es_settings_persona_add_skill_title = /** @type {(inputs: Settings_Persona_Add_Skill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir habilidad`)
};

const ja_settings_persona_add_skill_title = /** @type {(inputs: Settings_Persona_Add_Skill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スキルを追加`)
};

const hi_settings_persona_add_skill_title = /** @type {(inputs: Settings_Persona_Add_Skill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कौशल जोड़ें`)
};

const pt_br2_settings_persona_add_skill_title = /** @type {(inputs: Settings_Persona_Add_Skill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar Habilidade`)
};

const ko_settings_persona_add_skill_title = /** @type {(inputs: Settings_Persona_Add_Skill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`스킬 추가`)
};

const fr_settings_persona_add_skill_title = /** @type {(inputs: Settings_Persona_Add_Skill_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter une compétence`)
};

/**
* | output |
* | --- |
* | "Add Skill" |
*
* @param {Settings_Persona_Add_Skill_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_persona_add_skill_title = /** @type {((inputs?: Settings_Persona_Add_Skill_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Persona_Add_Skill_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_persona_add_skill_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_persona_add_skill_title(inputs)
	if (locale === "es") return es_settings_persona_add_skill_title(inputs)
	if (locale === "ja") return ja_settings_persona_add_skill_title(inputs)
	if (locale === "hi") return hi_settings_persona_add_skill_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_persona_add_skill_title(inputs)
	if (locale === "ko") return ko_settings_persona_add_skill_title(inputs)
	return fr_settings_persona_add_skill_title(inputs)
});