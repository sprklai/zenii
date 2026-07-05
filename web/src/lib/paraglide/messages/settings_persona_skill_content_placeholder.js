/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Persona_Skill_Content_PlaceholderInputs */

const en_settings_persona_skill_content_placeholder = /** @type {(inputs: Settings_Persona_Skill_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skill content (markdown)`)
};

const zh_cn2_settings_persona_skill_content_placeholder = /** @type {(inputs: Settings_Persona_Skill_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`技能内容（Markdown）`)
};

const es_settings_persona_skill_content_placeholder = /** @type {(inputs: Settings_Persona_Skill_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido de la habilidad (markdown)`)
};

const ja_settings_persona_skill_content_placeholder = /** @type {(inputs: Settings_Persona_Skill_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スキル内容（Markdown）`)
};

const hi_settings_persona_skill_content_placeholder = /** @type {(inputs: Settings_Persona_Skill_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कौशल सामग्री (markdown)`)
};

const pt_br2_settings_persona_skill_content_placeholder = /** @type {(inputs: Settings_Persona_Skill_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo da habilidade (markdown)`)
};

const ko_settings_persona_skill_content_placeholder = /** @type {(inputs: Settings_Persona_Skill_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`스킬 내용 (markdown)`)
};

const fr_settings_persona_skill_content_placeholder = /** @type {(inputs: Settings_Persona_Skill_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu de la compétence (markdown)`)
};

/**
* | output |
* | --- |
* | "Skill content (markdown)" |
*
* @param {Settings_Persona_Skill_Content_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_persona_skill_content_placeholder = /** @type {((inputs?: Settings_Persona_Skill_Content_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Persona_Skill_Content_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_persona_skill_content_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_persona_skill_content_placeholder(inputs)
	if (locale === "es") return es_settings_persona_skill_content_placeholder(inputs)
	if (locale === "ja") return ja_settings_persona_skill_content_placeholder(inputs)
	if (locale === "hi") return hi_settings_persona_skill_content_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_settings_persona_skill_content_placeholder(inputs)
	if (locale === "ko") return ko_settings_persona_skill_content_placeholder(inputs)
	return fr_settings_persona_skill_content_placeholder(inputs)
});