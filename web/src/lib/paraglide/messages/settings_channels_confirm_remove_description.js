/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Confirm_Remove_DescriptionInputs */

const en_settings_channels_confirm_remove_description = /** @type {(inputs: Settings_Channels_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This will remove the stored credential for this channel.`)
};

const zh_cn2_settings_channels_confirm_remove_description = /** @type {(inputs: Settings_Channels_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这将移除此频道已存储的凭据。`)
};

const es_settings_channels_confirm_remove_description = /** @type {(inputs: Settings_Channels_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto eliminará la credencial almacenada para este canal.`)
};

const ja_settings_channels_confirm_remove_description = /** @type {(inputs: Settings_Channels_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このチャンネルの保存済み認証情報が削除されます。`)
};

const hi_settings_channels_confirm_remove_description = /** @type {(inputs: Settings_Channels_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यह इस चैनल के लिए सहेजे गए क्रेडेंशियल को हटा देगा।`)
};

const pt_br2_settings_channels_confirm_remove_description = /** @type {(inputs: Settings_Channels_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso removerá a credencial armazenada deste canal.`)
};

const ko_settings_channels_confirm_remove_description = /** @type {(inputs: Settings_Channels_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 채널의 저장된 자격 증명이 제거됩니다.`)
};

const fr_settings_channels_confirm_remove_description = /** @type {(inputs: Settings_Channels_Confirm_Remove_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ceci supprimera l'identifiant stocké pour ce canal.`)
};

/**
* | output |
* | --- |
* | "This will remove the stored credential for this channel." |
*
* @param {Settings_Channels_Confirm_Remove_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_confirm_remove_description = /** @type {((inputs?: Settings_Channels_Confirm_Remove_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Confirm_Remove_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_confirm_remove_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_confirm_remove_description(inputs)
	if (locale === "es") return es_settings_channels_confirm_remove_description(inputs)
	if (locale === "ja") return ja_settings_channels_confirm_remove_description(inputs)
	if (locale === "hi") return hi_settings_channels_confirm_remove_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_confirm_remove_description(inputs)
	if (locale === "ko") return ko_settings_channels_confirm_remove_description(inputs)
	return fr_settings_channels_confirm_remove_description(inputs)
});