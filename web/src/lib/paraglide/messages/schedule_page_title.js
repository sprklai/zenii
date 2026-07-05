/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Page_TitleInputs */

const en_schedule_page_title = /** @type {(inputs: Schedule_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schedule`)
};

const zh_cn2_schedule_page_title = /** @type {(inputs: Schedule_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日程`)
};

const es_schedule_page_title = /** @type {(inputs: Schedule_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Programación`)
};

const ja_schedule_page_title = /** @type {(inputs: Schedule_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジュール`)
};

const hi_schedule_page_title = /** @type {(inputs: Schedule_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`शेड्यूल`)
};

const pt_br2_schedule_page_title = /** @type {(inputs: Schedule_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agenda`)
};

const ko_schedule_page_title = /** @type {(inputs: Schedule_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`일정`)
};

const fr_schedule_page_title = /** @type {(inputs: Schedule_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planification`)
};

/**
* | output |
* | --- |
* | "Schedule" |
*
* @param {Schedule_Page_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_page_title = /** @type {((inputs?: Schedule_Page_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Page_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_page_title(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_page_title(inputs)
	if (locale === "es") return es_schedule_page_title(inputs)
	if (locale === "ja") return ja_schedule_page_title(inputs)
	if (locale === "hi") return hi_schedule_page_title(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_page_title(inputs)
	if (locale === "ko") return ko_schedule_page_title(inputs)
	return fr_schedule_page_title(inputs)
});