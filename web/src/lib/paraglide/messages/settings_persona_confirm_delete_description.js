/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Persona_Confirm_Delete_DescriptionInputs */

const en_settings_persona_confirm_delete_description = /** @type {(inputs: Settings_Persona_Confirm_Delete_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This will permanently delete this skill.`)
};

const zh_cn2_settings_persona_confirm_delete_description = /** @type {(inputs: Settings_Persona_Confirm_Delete_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这将永久删除此技能。`)
};

const es_settings_persona_confirm_delete_description = /** @type {(inputs: Settings_Persona_Confirm_Delete_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto eliminará permanentemente esta habilidad.`)
};

const ja_settings_persona_confirm_delete_description = /** @type {(inputs: Settings_Persona_Confirm_Delete_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このスキルは完全に削除されます。`)
};

const hi_settings_persona_confirm_delete_description = /** @type {(inputs: Settings_Persona_Confirm_Delete_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यह इस कौशल को स्थायी रूप से हटा देगा।`)
};

const pt_br2_settings_persona_confirm_delete_description = /** @type {(inputs: Settings_Persona_Confirm_Delete_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso excluirá permanentemente esta habilidade.`)
};

const ko_settings_persona_confirm_delete_description = /** @type {(inputs: Settings_Persona_Confirm_Delete_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 스킬이 영구적으로 삭제됩니다.`)
};

const fr_settings_persona_confirm_delete_description = /** @type {(inputs: Settings_Persona_Confirm_Delete_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ceci supprimera définitivement cette compétence.`)
};

/**
* | output |
* | --- |
* | "This will permanently delete this skill." |
*
* @param {Settings_Persona_Confirm_Delete_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_persona_confirm_delete_description = /** @type {((inputs?: Settings_Persona_Confirm_Delete_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Persona_Confirm_Delete_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_persona_confirm_delete_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_persona_confirm_delete_description(inputs)
	if (locale === "es") return es_settings_persona_confirm_delete_description(inputs)
	if (locale === "ja") return ja_settings_persona_confirm_delete_description(inputs)
	if (locale === "hi") return hi_settings_persona_confirm_delete_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_persona_confirm_delete_description(inputs)
	if (locale === "ko") return ko_settings_persona_confirm_delete_description(inputs)
	return fr_settings_persona_confirm_delete_description(inputs)
});