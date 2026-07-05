/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Profile_TitleInputs */

const en_settings_general_profile_title = /** @type {(inputs: Settings_General_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`User Profile`)
};

const zh_cn2_settings_general_profile_title = /** @type {(inputs: Settings_General_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户资料`)
};

const es_settings_general_profile_title = /** @type {(inputs: Settings_General_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perfil de usuario`)
};

const ja_settings_general_profile_title = /** @type {(inputs: Settings_General_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザープロファイル`)
};

const hi_settings_general_profile_title = /** @type {(inputs: Settings_General_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`उपयोगकर्ता प्रोफ़ाइल`)
};

const pt_br2_settings_general_profile_title = /** @type {(inputs: Settings_General_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perfil do Usuário`)
};

const ko_settings_general_profile_title = /** @type {(inputs: Settings_General_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`사용자 프로필`)
};

const fr_settings_general_profile_title = /** @type {(inputs: Settings_General_Profile_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Profil utilisateur`)
};

/**
* | output |
* | --- |
* | "User Profile" |
*
* @param {Settings_General_Profile_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_profile_title = /** @type {((inputs?: Settings_General_Profile_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Profile_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_profile_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_profile_title(inputs)
	if (locale === "es") return es_settings_general_profile_title(inputs)
	if (locale === "ja") return ja_settings_general_profile_title(inputs)
	if (locale === "hi") return hi_settings_general_profile_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_profile_title(inputs)
	if (locale === "ko") return ko_settings_general_profile_title(inputs)
	return fr_settings_general_profile_title(inputs)
});