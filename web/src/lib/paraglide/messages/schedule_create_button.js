/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Create_ButtonInputs */

const en_schedule_create_button = /** @type {(inputs: Schedule_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create Job`)
};

const zh_cn2_schedule_create_button = /** @type {(inputs: Schedule_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建任务`)
};

const es_schedule_create_button = /** @type {(inputs: Schedule_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear tarea`)
};

const ja_schedule_create_button = /** @type {(inputs: Schedule_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブを作成`)
};

const hi_schedule_create_button = /** @type {(inputs: Schedule_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कार्य बनाएँ`)
};

const pt_br2_schedule_create_button = /** @type {(inputs: Schedule_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar Tarefa`)
};

const ko_schedule_create_button = /** @type {(inputs: Schedule_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작업 생성`)
};

const fr_schedule_create_button = /** @type {(inputs: Schedule_Create_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer une tâche`)
};

/**
* | output |
* | --- |
* | "Create Job" |
*
* @param {Schedule_Create_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_create_button = /** @type {((inputs?: Schedule_Create_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Create_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_create_button(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_create_button(inputs)
	if (locale === "es") return es_schedule_create_button(inputs)
	if (locale === "ja") return ja_schedule_create_button(inputs)
	if (locale === "hi") return hi_schedule_create_button(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_create_button(inputs)
	if (locale === "ko") return ko_schedule_create_button(inputs)
	return fr_schedule_create_button(inputs)
});