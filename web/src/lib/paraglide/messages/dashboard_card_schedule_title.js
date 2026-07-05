/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Dashboard_Card_Schedule_TitleInputs */

const en_dashboard_card_schedule_title = /** @type {(inputs: Dashboard_Card_Schedule_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schedule`)
};

const zh_cn2_dashboard_card_schedule_title = /** @type {(inputs: Dashboard_Card_Schedule_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日程`)
};

const es_dashboard_card_schedule_title = /** @type {(inputs: Dashboard_Card_Schedule_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Programación`)
};

const ja_dashboard_card_schedule_title = /** @type {(inputs: Dashboard_Card_Schedule_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジュール`)
};

const hi_dashboard_card_schedule_title = /** @type {(inputs: Dashboard_Card_Schedule_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`शेड्यूल`)
};

const pt_br2_dashboard_card_schedule_title = /** @type {(inputs: Dashboard_Card_Schedule_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agenda`)
};

const ko_dashboard_card_schedule_title = /** @type {(inputs: Dashboard_Card_Schedule_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`일정`)
};

const fr_dashboard_card_schedule_title = /** @type {(inputs: Dashboard_Card_Schedule_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planification`)
};

/**
* | output |
* | --- |
* | "Schedule" |
*
* @param {Dashboard_Card_Schedule_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_card_schedule_title = /** @type {((inputs?: Dashboard_Card_Schedule_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Card_Schedule_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_card_schedule_title(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_card_schedule_title(inputs)
	if (locale === "es") return es_dashboard_card_schedule_title(inputs)
	if (locale === "ja") return ja_dashboard_card_schedule_title(inputs)
	if (locale === "hi") return hi_dashboard_card_schedule_title(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_card_schedule_title(inputs)
	if (locale === "ko") return ko_dashboard_card_schedule_title(inputs)
	return fr_dashboard_card_schedule_title(inputs)
});