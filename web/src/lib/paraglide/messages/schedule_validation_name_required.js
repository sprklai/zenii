/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Validation_Name_RequiredInputs */

const en_schedule_validation_name_required = /** @type {(inputs: Schedule_Validation_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Job name is required`)
};

const zh_cn2_schedule_validation_name_required = /** @type {(inputs: Schedule_Validation_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任务名称为必填项`)
};

const es_schedule_validation_name_required = /** @type {(inputs: Schedule_Validation_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El nombre de la tarea es obligatorio`)
};

const ja_schedule_validation_name_required = /** @type {(inputs: Schedule_Validation_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブ名は必須です`)
};

const hi_schedule_validation_name_required = /** @type {(inputs: Schedule_Validation_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कार्य का नाम आवश्यक है`)
};

const pt_br2_schedule_validation_name_required = /** @type {(inputs: Schedule_Validation_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome da tarefa é obrigatório`)
};

const ko_schedule_validation_name_required = /** @type {(inputs: Schedule_Validation_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작업 이름은 필수입니다`)
};

const fr_schedule_validation_name_required = /** @type {(inputs: Schedule_Validation_Name_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le nom de la tâche est requis`)
};

/**
* | output |
* | --- |
* | "Job name is required" |
*
* @param {Schedule_Validation_Name_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_validation_name_required = /** @type {((inputs?: Schedule_Validation_Name_RequiredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Validation_Name_RequiredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_validation_name_required(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_validation_name_required(inputs)
	if (locale === "es") return es_schedule_validation_name_required(inputs)
	if (locale === "ja") return ja_schedule_validation_name_required(inputs)
	if (locale === "hi") return hi_schedule_validation_name_required(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_validation_name_required(inputs)
	if (locale === "ko") return ko_schedule_validation_name_required(inputs)
	return fr_schedule_validation_name_required(inputs)
});