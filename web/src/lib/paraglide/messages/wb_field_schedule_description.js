/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Schedule_DescriptionInputs */

const en_wb_field_schedule_description = /** @type {(inputs: Wb_Field_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cron schedule for when to run the job`)
};

const zh_cn2_wb_field_schedule_description = /** @type {(inputs: Wb_Field_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任务运行的 Cron 计划`)
};

const es_wb_field_schedule_description = /** @type {(inputs: Wb_Field_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Programación Cron para cuándo ejecutar la tarea`)
};

const ja_wb_field_schedule_description = /** @type {(inputs: Wb_Field_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブを実行する Cron スケジュール`)
};

const hi_wb_field_schedule_description = /** @type {(inputs: Wb_Field_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`जॉब चलाने के लिए Cron शेड्यूल`)
};

const pt_br2_wb_field_schedule_description = /** @type {(inputs: Wb_Field_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agendamento Cron para quando executar a tarefa`)
};

const ko_wb_field_schedule_description = /** @type {(inputs: Wb_Field_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작업을 실행할 Cron 스케줄`)
};

const fr_wb_field_schedule_description = /** @type {(inputs: Wb_Field_Schedule_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planification Cron définissant quand exécuter la tâche`)
};

/**
* | output |
* | --- |
* | "Cron schedule for when to run the job" |
*
* @param {Wb_Field_Schedule_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_schedule_description = /** @type {((inputs?: Wb_Field_Schedule_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Schedule_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_schedule_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_schedule_description(inputs)
	if (locale === "es") return es_wb_field_schedule_description(inputs)
	if (locale === "ja") return ja_wb_field_schedule_description(inputs)
	if (locale === "hi") return hi_wb_field_schedule_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_schedule_description(inputs)
	if (locale === "ko") return ko_wb_field_schedule_description(inputs)
	return fr_wb_field_schedule_description(inputs)
});