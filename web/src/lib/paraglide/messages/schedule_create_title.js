/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Create_TitleInputs */

const en_schedule_create_title = /** @type {(inputs: Schedule_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create Scheduled Job`)
};

const zh_cn2_schedule_create_title = /** @type {(inputs: Schedule_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建定时任务`)
};

const es_schedule_create_title = /** @type {(inputs: Schedule_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear tarea programada`)
};

const ja_schedule_create_title = /** @type {(inputs: Schedule_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スケジュールジョブを作成`)
};

const hi_schedule_create_title = /** @type {(inputs: Schedule_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`शेड्यूल्ड कार्य बनाएँ`)
};

const pt_br2_schedule_create_title = /** @type {(inputs: Schedule_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar Tarefa Agendada`)
};

const ko_schedule_create_title = /** @type {(inputs: Schedule_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`예약 작업 생성`)
};

const fr_schedule_create_title = /** @type {(inputs: Schedule_Create_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer une tâche planifiée`)
};

/**
* | output |
* | --- |
* | "Create Scheduled Job" |
*
* @param {Schedule_Create_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_create_title = /** @type {((inputs?: Schedule_Create_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Create_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_create_title(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_create_title(inputs)
	if (locale === "es") return es_schedule_create_title(inputs)
	if (locale === "ja") return ja_schedule_create_title(inputs)
	if (locale === "hi") return hi_schedule_create_title(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_create_title(inputs)
	if (locale === "ko") return ko_schedule_create_title(inputs)
	return fr_schedule_create_title(inputs)
});