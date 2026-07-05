/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Credential_Placeholder_SetInputs */

const en_settings_channels_credential_placeholder_set = /** @type {(inputs: Settings_Channels_Credential_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  (value is set)`)
};

const zh_cn2_settings_channels_credential_placeholder_set = /** @type {(inputs: Settings_Channels_Credential_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  （已设置）`)
};

const es_settings_channels_credential_placeholder_set = /** @type {(inputs: Settings_Channels_Credential_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  (valor configurado)`)
};

const ja_settings_channels_credential_placeholder_set = /** @type {(inputs: Settings_Channels_Credential_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  （設定済み）`)
};

const hi_settings_channels_credential_placeholder_set = /** @type {(inputs: Settings_Channels_Credential_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  (मान सेट है)`)
};

const pt_br2_settings_channels_credential_placeholder_set = /** @type {(inputs: Settings_Channels_Credential_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  (valor definido)`)
};

const ko_settings_channels_credential_placeholder_set = /** @type {(inputs: Settings_Channels_Credential_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  (값이 설정됨)`)
};

const fr_settings_channels_credential_placeholder_set = /** @type {(inputs: Settings_Channels_Credential_Placeholder_SetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`••••••••  (valeur définie)`)
};

/**
* | output |
* | --- |
* | "•••••••• (value is set)" |
*
* @param {Settings_Channels_Credential_Placeholder_SetInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_credential_placeholder_set = /** @type {((inputs?: Settings_Channels_Credential_Placeholder_SetInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Credential_Placeholder_SetInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_credential_placeholder_set(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_credential_placeholder_set(inputs)
	if (locale === "es") return es_settings_channels_credential_placeholder_set(inputs)
	if (locale === "ja") return ja_settings_channels_credential_placeholder_set(inputs)
	if (locale === "hi") return hi_settings_channels_credential_placeholder_set(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_credential_placeholder_set(inputs)
	if (locale === "ko") return ko_settings_channels_credential_placeholder_set(inputs)
	return fr_settings_channels_credential_placeholder_set(inputs)
});