/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Channel_PlaceholderInputs */

const en_schedule_channel_placeholder = /** @type {(inputs: Schedule_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select channel...`)
};

const zh_cn2_schedule_channel_placeholder = /** @type {(inputs: Schedule_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择频道...`)
};

const es_schedule_channel_placeholder = /** @type {(inputs: Schedule_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seleccionar canal...`)
};

const ja_schedule_channel_placeholder = /** @type {(inputs: Schedule_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャンネルを選択...`)
};

const hi_schedule_channel_placeholder = /** @type {(inputs: Schedule_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैनल चुनें...`)
};

const pt_br2_schedule_channel_placeholder = /** @type {(inputs: Schedule_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecionar canal...`)
};

const ko_schedule_channel_placeholder = /** @type {(inputs: Schedule_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채널 선택...`)
};

const fr_schedule_channel_placeholder = /** @type {(inputs: Schedule_Channel_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sélectionner un canal...`)
};

/**
* | output |
* | --- |
* | "Select channel..." |
*
* @param {Schedule_Channel_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_channel_placeholder = /** @type {((inputs?: Schedule_Channel_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Channel_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_channel_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_channel_placeholder(inputs)
	if (locale === "es") return es_schedule_channel_placeholder(inputs)
	if (locale === "ja") return ja_schedule_channel_placeholder(inputs)
	if (locale === "hi") return hi_schedule_channel_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_channel_placeholder(inputs)
	if (locale === "ko") return ko_schedule_channel_placeholder(inputs)
	return fr_schedule_channel_placeholder(inputs)
});