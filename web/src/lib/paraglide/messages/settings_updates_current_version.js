/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Settings_Updates_Current_VersionInputs */

const en_settings_updates_current_version = /** @type {(inputs: Settings_Updates_Current_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Current: v${i?.version}`)
};

const zh_cn2_settings_updates_current_version = /** @type {(inputs: Settings_Updates_Current_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`当前版本：v${i?.version}`)
};

const es_settings_updates_current_version = /** @type {(inputs: Settings_Updates_Current_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actual: v${i?.version}`)
};

const ja_settings_updates_current_version = /** @type {(inputs: Settings_Updates_Current_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`現在のバージョン：v${i?.version}`)
};

const hi_settings_updates_current_version = /** @type {(inputs: Settings_Updates_Current_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`वर्तमान: v${i?.version}`)
};

const pt_br2_settings_updates_current_version = /** @type {(inputs: Settings_Updates_Current_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Atual: v${i?.version}`)
};

const ko_settings_updates_current_version = /** @type {(inputs: Settings_Updates_Current_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`현재: v${i?.version}`)
};

const fr_settings_updates_current_version = /** @type {(inputs: Settings_Updates_Current_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actuelle : v${i?.version}`)
};

/**
* | output |
* | --- |
* | "Current: v{version}" |
*
* @param {Settings_Updates_Current_VersionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_updates_current_version = /** @type {((inputs: Settings_Updates_Current_VersionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Updates_Current_VersionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_updates_current_version(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_updates_current_version(inputs)
	if (locale === "es") return es_settings_updates_current_version(inputs)
	if (locale === "ja") return ja_settings_updates_current_version(inputs)
	if (locale === "hi") return hi_settings_updates_current_version(inputs)
	if (locale === "pt-BR") return pt_br2_settings_updates_current_version(inputs)
	if (locale === "ko") return ko_settings_updates_current_version(inputs)
	return fr_settings_updates_current_version(inputs)
});