/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Updates_Up_To_DateInputs */

const en_settings_updates_up_to_date = /** @type {(inputs: Settings_Updates_Up_To_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You're up to date!`)
};

const zh_cn2_settings_updates_up_to_date = /** @type {(inputs: Settings_Updates_Up_To_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已是最新版本！`)
};

const es_settings_updates_up_to_date = /** @type {(inputs: Settings_Updates_Up_To_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¡Estás al día!`)
};

const ja_settings_updates_up_to_date = /** @type {(inputs: Settings_Updates_Up_To_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新バージョンです！`)
};

const hi_settings_updates_up_to_date = /** @type {(inputs: Settings_Updates_Up_To_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आप अप टू डेट हैं!`)
};

const pt_br2_settings_updates_up_to_date = /** @type {(inputs: Settings_Updates_Up_To_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você está atualizado!`)
};

const ko_settings_updates_up_to_date = /** @type {(inputs: Settings_Updates_Up_To_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`최신 버전입니다!`)
};

const fr_settings_updates_up_to_date = /** @type {(inputs: Settings_Updates_Up_To_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous êtes à jour !`)
};

/**
* | output |
* | --- |
* | "You're up to date!" |
*
* @param {Settings_Updates_Up_To_DateInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_updates_up_to_date = /** @type {((inputs?: Settings_Updates_Up_To_DateInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Updates_Up_To_DateInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_updates_up_to_date(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_updates_up_to_date(inputs)
	if (locale === "es") return es_settings_updates_up_to_date(inputs)
	if (locale === "ja") return ja_settings_updates_up_to_date(inputs)
	if (locale === "hi") return hi_settings_updates_up_to_date(inputs)
	if (locale === "pt-BR") return pt_br2_settings_updates_up_to_date(inputs)
	if (locale === "ko") return ko_settings_updates_up_to_date(inputs)
	return fr_settings_updates_up_to_date(inputs)
});