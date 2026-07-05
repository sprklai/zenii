/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Cron_PlaceholderInputs */

const en_schedule_cron_placeholder = /** @type {(inputs: Schedule_Cron_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`0 */5 * * * *`)
};

const zh_cn2_schedule_cron_placeholder = /** @type {(inputs: Schedule_Cron_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`0 */5 * * * *`)
};

const es_schedule_cron_placeholder = /** @type {(inputs: Schedule_Cron_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`0 */5 * * * *`)
};

const ja_schedule_cron_placeholder = /** @type {(inputs: Schedule_Cron_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`0 */5 * * * *`)
};

const hi_schedule_cron_placeholder = /** @type {(inputs: Schedule_Cron_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`0 */5 * * * *`)
};

const pt_br2_schedule_cron_placeholder = /** @type {(inputs: Schedule_Cron_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`0 */5 * * * *`)
};

const ko_schedule_cron_placeholder = /** @type {(inputs: Schedule_Cron_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`0 */5 * * * *`)
};

const fr_schedule_cron_placeholder = /** @type {(inputs: Schedule_Cron_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`0 */5 * * * *`)
};

/**
* | output |
* | --- |
* | "0 *\/5 * * * *" |
*
* @param {Schedule_Cron_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_cron_placeholder = /** @type {((inputs?: Schedule_Cron_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Cron_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_cron_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_cron_placeholder(inputs)
	if (locale === "es") return es_schedule_cron_placeholder(inputs)
	if (locale === "ja") return ja_schedule_cron_placeholder(inputs)
	if (locale === "hi") return hi_schedule_cron_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_cron_placeholder(inputs)
	if (locale === "ko") return ko_schedule_cron_placeholder(inputs)
	return fr_schedule_cron_placeholder(inputs)
});