/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Empty_TitleInputs */

const en_schedule_empty_title = /** @type {(inputs: Schedule_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No scheduled jobs`)
};

const zh_cn2_schedule_empty_title = /** @type {(inputs: Schedule_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无定时任务`)
};

const es_schedule_empty_title = /** @type {(inputs: Schedule_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay tareas programadas`)
};

const ja_schedule_empty_title = /** @type {(inputs: Schedule_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジュールジョブなし`)
};

const hi_schedule_empty_title = /** @type {(inputs: Schedule_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई शेड्यूल्ड कार्य नहीं`)
};

const pt_br2_schedule_empty_title = /** @type {(inputs: Schedule_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma tarefa agendada`)
};

const ko_schedule_empty_title = /** @type {(inputs: Schedule_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`예약된 작업 없음`)
};

const fr_schedule_empty_title = /** @type {(inputs: Schedule_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune tâche planifiée`)
};

/**
* | output |
* | --- |
* | "No scheduled jobs" |
*
* @param {Schedule_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_empty_title = /** @type {((inputs?: Schedule_Empty_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Empty_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_empty_title(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_empty_title(inputs)
	if (locale === "es") return es_schedule_empty_title(inputs)
	if (locale === "ja") return ja_schedule_empty_title(inputs)
	if (locale === "hi") return hi_schedule_empty_title(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_empty_title(inputs)
	if (locale === "ko") return ko_schedule_empty_title(inputs)
	return fr_schedule_empty_title(inputs)
});