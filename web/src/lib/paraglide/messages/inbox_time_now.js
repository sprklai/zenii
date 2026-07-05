/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Inbox_Time_NowInputs */

const en_inbox_time_now = /** @type {(inputs: Inbox_Time_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`now`)
};

const zh_cn2_inbox_time_now = /** @type {(inputs: Inbox_Time_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`刚刚`)
};

const es_inbox_time_now = /** @type {(inputs: Inbox_Time_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ahora`)
};

const ja_inbox_time_now = /** @type {(inputs: Inbox_Time_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`たった今`)
};

const hi_inbox_time_now = /** @type {(inputs: Inbox_Time_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अभी`)
};

const pt_br2_inbox_time_now = /** @type {(inputs: Inbox_Time_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`agora`)
};

const ko_inbox_time_now = /** @type {(inputs: Inbox_Time_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`방금`)
};

const fr_inbox_time_now = /** @type {(inputs: Inbox_Time_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`maintenant`)
};

/**
* | output |
* | --- |
* | "now" |
*
* @param {Inbox_Time_NowInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const inbox_time_now = /** @type {((inputs?: Inbox_Time_NowInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Inbox_Time_NowInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_inbox_time_now(inputs)
	if (locale === "zh-CN") return zh_cn2_inbox_time_now(inputs)
	if (locale === "es") return es_inbox_time_now(inputs)
	if (locale === "ja") return ja_inbox_time_now(inputs)
	if (locale === "hi") return hi_inbox_time_now(inputs)
	if (locale === "pt-BR") return pt_br2_inbox_time_now(inputs)
	if (locale === "ko") return ko_inbox_time_now(inputs)
	return fr_inbox_time_now(inputs)
});