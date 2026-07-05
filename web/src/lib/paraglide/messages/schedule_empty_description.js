/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Empty_DescriptionInputs */

const en_schedule_empty_description = /** @type {(inputs: Schedule_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create a job to automate tasks on a schedule.`)
};

const zh_cn2_schedule_empty_description = /** @type {(inputs: Schedule_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建任务以按计划自动执行操作。`)
};

const es_schedule_empty_description = /** @type {(inputs: Schedule_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea una tarea para automatizar acciones según un horario.`)
};

const ja_schedule_empty_description = /** @type {(inputs: Schedule_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブを作成してタスクをスケジュールで自動化しましょう。`)
};

const hi_schedule_empty_description = /** @type {(inputs: Schedule_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`शेड्यूल पर कार्यों को स्वचालित करने के लिए एक कार्य बनाएँ।`)
};

const pt_br2_schedule_empty_description = /** @type {(inputs: Schedule_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie uma tarefa para automatizar ações em uma agenda.`)
};

const ko_schedule_empty_description = /** @type {(inputs: Schedule_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`일정에 따라 작업을 자동화하려면 작업을 생성하세요.`)
};

const fr_schedule_empty_description = /** @type {(inputs: Schedule_Empty_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez une tâche pour automatiser des actions selon un planning.`)
};

/**
* | output |
* | --- |
* | "Create a job to automate tasks on a schedule." |
*
* @param {Schedule_Empty_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_empty_description = /** @type {((inputs?: Schedule_Empty_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Empty_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_empty_description(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_empty_description(inputs)
	if (locale === "es") return es_schedule_empty_description(inputs)
	if (locale === "ja") return ja_schedule_empty_description(inputs)
	if (locale === "hi") return hi_schedule_empty_description(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_empty_description(inputs)
	if (locale === "ko") return ko_schedule_empty_description(inputs)
	return fr_schedule_empty_description(inputs)
});