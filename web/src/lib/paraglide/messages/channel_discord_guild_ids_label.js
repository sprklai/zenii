/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Channel_Discord_Guild_Ids_LabelInputs */

const en_channel_discord_guild_ids_label = /** @type {(inputs: Channel_Discord_Guild_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allowed Server IDs`)
};

const zh_cn2_channel_discord_guild_ids_label = /** @type {(inputs: Channel_Discord_Guild_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`允许的服务器ID`)
};

const es_channel_discord_guild_ids_label = /** @type {(inputs: Channel_Discord_Guild_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IDs de servidores permitidos`)
};

const ja_channel_discord_guild_ids_label = /** @type {(inputs: Channel_Discord_Guild_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`許可サーバーID`)
};

const hi_channel_discord_guild_ids_label = /** @type {(inputs: Channel_Discord_Guild_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अनुमत सर्वर ID`)
};

const pt_br2_channel_discord_guild_ids_label = /** @type {(inputs: Channel_Discord_Guild_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IDs de servidores permitidos`)
};

const ko_channel_discord_guild_ids_label = /** @type {(inputs: Channel_Discord_Guild_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`허용된 서버 ID`)
};

const fr_channel_discord_guild_ids_label = /** @type {(inputs: Channel_Discord_Guild_Ids_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID de serveurs autorisés`)
};

/**
* | output |
* | --- |
* | "Allowed Server IDs" |
*
* @param {Channel_Discord_Guild_Ids_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const channel_discord_guild_ids_label = /** @type {((inputs?: Channel_Discord_Guild_Ids_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Channel_Discord_Guild_Ids_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_channel_discord_guild_ids_label(inputs)
	if (locale === "zh-CN") return zh_cn2_channel_discord_guild_ids_label(inputs)
	if (locale === "es") return es_channel_discord_guild_ids_label(inputs)
	if (locale === "ja") return ja_channel_discord_guild_ids_label(inputs)
	if (locale === "hi") return hi_channel_discord_guild_ids_label(inputs)
	if (locale === "pt-BR") return pt_br2_channel_discord_guild_ids_label(inputs)
	if (locale === "ko") return ko_channel_discord_guild_ids_label(inputs)
	return fr_channel_discord_guild_ids_label(inputs)
});