/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Updates_CheckingInputs */

const en_settings_updates_checking = /** @type {(inputs: Settings_Updates_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking for updates...`)
};

const zh_cn2_settings_updates_checking = /** @type {(inputs: Settings_Updates_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在检查更新...`)
};

const es_settings_updates_checking = /** @type {(inputs: Settings_Updates_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscando actualizaciones...`)
};

const ja_settings_updates_checking = /** @type {(inputs: Settings_Updates_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新を確認中...`)
};

const hi_settings_updates_checking = /** @type {(inputs: Settings_Updates_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अपडेट जाँचे जा रहे हैं...`)
};

const pt_br2_settings_updates_checking = /** @type {(inputs: Settings_Updates_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificando atualizações...`)
};

const ko_settings_updates_checking = /** @type {(inputs: Settings_Updates_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`업데이트 확인 중...`)
};

const fr_settings_updates_checking = /** @type {(inputs: Settings_Updates_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherche de mises à jour...`)
};

/**
* | output |
* | --- |
* | "Checking for updates..." |
*
* @param {Settings_Updates_CheckingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_updates_checking = /** @type {((inputs?: Settings_Updates_CheckingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Updates_CheckingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_updates_checking(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_updates_checking(inputs)
	if (locale === "es") return es_settings_updates_checking(inputs)
	if (locale === "ja") return ja_settings_updates_checking(inputs)
	if (locale === "hi") return hi_settings_updates_checking(inputs)
	if (locale === "pt-BR") return pt_br2_settings_updates_checking(inputs)
	if (locale === "ko") return ko_settings_updates_checking(inputs)
	return fr_settings_updates_checking(inputs)
});