/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ channel: NonNullable<unknown> }} Schedule_Format_ChannelInputs */

const en_schedule_format_channel = /** @type {(inputs: Schedule_Format_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Channel: ${i?.channel}`)
};

const zh_cn2_schedule_format_channel = /** @type {(inputs: Schedule_Format_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`频道：${i?.channel}`)
};

const es_schedule_format_channel = /** @type {(inputs: Schedule_Format_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Canal: ${i?.channel}`)
};

const ja_schedule_format_channel = /** @type {(inputs: Schedule_Format_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`チャンネル：${i?.channel}`)
};

const hi_schedule_format_channel = /** @type {(inputs: Schedule_Format_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`चैनल: ${i?.channel}`)
};

const pt_br2_schedule_format_channel = /** @type {(inputs: Schedule_Format_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Canal: ${i?.channel}`)
};

const ko_schedule_format_channel = /** @type {(inputs: Schedule_Format_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`채널: ${i?.channel}`)
};

const fr_schedule_format_channel = /** @type {(inputs: Schedule_Format_ChannelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Canal : ${i?.channel}`)
};

/**
* | output |
* | --- |
* | "Channel: {channel}" |
*
* @param {Schedule_Format_ChannelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_format_channel = /** @type {((inputs: Schedule_Format_ChannelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Format_ChannelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_format_channel(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_format_channel(inputs)
	if (locale === "es") return es_schedule_format_channel(inputs)
	if (locale === "ja") return ja_schedule_format_channel(inputs)
	if (locale === "hi") return hi_schedule_format_channel(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_format_channel(inputs)
	if (locale === "ko") return ko_schedule_format_channel(inputs)
	return fr_schedule_format_channel(inputs)
});