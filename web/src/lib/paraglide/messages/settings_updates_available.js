/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Settings_Updates_AvailableInputs */

const en_settings_updates_available = /** @type {(inputs: Settings_Updates_AvailableInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version} is available`)
};

const zh_cn2_settings_updates_available = /** @type {(inputs: Settings_Updates_AvailableInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`版本 ${i?.version} 可用`)
};

const es_settings_updates_available = /** @type {(inputs: Settings_Updates_AvailableInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La versión ${i?.version} está disponible`)
};

const ja_settings_updates_available = /** @type {(inputs: Settings_Updates_AvailableInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`バージョン ${i?.version} が利用可能です`)
};

const hi_settings_updates_available = /** @type {(inputs: Settings_Updates_AvailableInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`संस्करण ${i?.version} उपलब्ध है`)
};

const pt_br2_settings_updates_available = /** @type {(inputs: Settings_Updates_AvailableInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versão ${i?.version} está disponível`)
};

const ko_settings_updates_available = /** @type {(inputs: Settings_Updates_AvailableInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`버전 ${i?.version}을 사용할 수 있습니다`)
};

const fr_settings_updates_available = /** @type {(inputs: Settings_Updates_AvailableInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`La version ${i?.version} est disponible`)
};

/**
* | output |
* | --- |
* | "Version {version} is available" |
*
* @param {Settings_Updates_AvailableInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_updates_available = /** @type {((inputs: Settings_Updates_AvailableInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Updates_AvailableInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_updates_available(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_updates_available(inputs)
	if (locale === "es") return es_settings_updates_available(inputs)
	if (locale === "ja") return ja_settings_updates_available(inputs)
	if (locale === "hi") return hi_settings_updates_available(inputs)
	if (locale === "pt-BR") return pt_br2_settings_updates_available(inputs)
	if (locale === "ko") return ko_settings_updates_available(inputs)
	return fr_settings_updates_available(inputs)
});