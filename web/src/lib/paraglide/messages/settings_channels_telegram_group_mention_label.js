/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Channels_Telegram_Group_Mention_LabelInputs */

const en_settings_channels_telegram_group_mention_label = /** @type {(inputs: Settings_Channels_Telegram_Group_Mention_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Group: respond only when mentioned`)
};

const zh_cn2_settings_channels_telegram_group_mention_label = /** @type {(inputs: Settings_Channels_Telegram_Group_Mention_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`群组：仅在被提及时回复`)
};

const es_settings_channels_telegram_group_mention_label = /** @type {(inputs: Settings_Channels_Telegram_Group_Mention_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grupo: responder solo cuando se mencione`)
};

const ja_settings_channels_telegram_group_mention_label = /** @type {(inputs: Settings_Channels_Telegram_Group_Mention_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`グループ：メンション時のみ応答`)
};

const hi_settings_channels_telegram_group_mention_label = /** @type {(inputs: Settings_Channels_Telegram_Group_Mention_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`समूह: केवल मेंशन होने पर जवाब दें`)
};

const pt_br2_settings_channels_telegram_group_mention_label = /** @type {(inputs: Settings_Channels_Telegram_Group_Mention_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grupo: responder apenas quando mencionado`)
};

const ko_settings_channels_telegram_group_mention_label = /** @type {(inputs: Settings_Channels_Telegram_Group_Mention_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`그룹: 멘션 시에만 응답`)
};

const fr_settings_channels_telegram_group_mention_label = /** @type {(inputs: Settings_Channels_Telegram_Group_Mention_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Groupe : répondre uniquement si mentionné`)
};

/**
* | output |
* | --- |
* | "Group: respond only when mentioned" |
*
* @param {Settings_Channels_Telegram_Group_Mention_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_channels_telegram_group_mention_label = /** @type {((inputs?: Settings_Channels_Telegram_Group_Mention_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Channels_Telegram_Group_Mention_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_channels_telegram_group_mention_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_channels_telegram_group_mention_label(inputs)
	if (locale === "es") return es_settings_channels_telegram_group_mention_label(inputs)
	if (locale === "ja") return ja_settings_channels_telegram_group_mention_label(inputs)
	if (locale === "hi") return hi_settings_channels_telegram_group_mention_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_channels_telegram_group_mention_label(inputs)
	if (locale === "ko") return ko_settings_channels_telegram_group_mention_label(inputs)
	return fr_settings_channels_telegram_group_mention_label(inputs)
});