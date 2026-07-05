/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Create_ErrorInputs */

const en_schedule_create_error = /** @type {(inputs: Schedule_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to create job`)
};

const zh_cn2_schedule_create_error = /** @type {(inputs: Schedule_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建任务失败`)
};

const es_schedule_create_error = /** @type {(inputs: Schedule_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al crear la tarea`)
};

const ja_schedule_create_error = /** @type {(inputs: Schedule_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブの作成に失敗しました`)
};

const hi_schedule_create_error = /** @type {(inputs: Schedule_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कार्य बनाने में विफल`)
};

const pt_br2_schedule_create_error = /** @type {(inputs: Schedule_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao criar tarefa`)
};

const ko_schedule_create_error = /** @type {(inputs: Schedule_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작업 생성 실패`)
};

const fr_schedule_create_error = /** @type {(inputs: Schedule_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la création de la tâche`)
};

/**
* | output |
* | --- |
* | "Failed to create job" |
*
* @param {Schedule_Create_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_create_error = /** @type {((inputs?: Schedule_Create_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Create_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_create_error(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_create_error(inputs)
	if (locale === "es") return es_schedule_create_error(inputs)
	if (locale === "ja") return ja_schedule_create_error(inputs)
	if (locale === "hi") return hi_schedule_create_error(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_create_error(inputs)
	if (locale === "ko") return ko_schedule_create_error(inputs)
	return fr_schedule_create_error(inputs)
});