/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Edit_TitleInputs */

const en_schedule_edit_title = /** @type {(inputs: Schedule_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit Job`)
};

const zh_cn2_schedule_edit_title = /** @type {(inputs: Schedule_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑任务`)
};

const es_schedule_edit_title = /** @type {(inputs: Schedule_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar tarea`)
};

const ja_schedule_edit_title = /** @type {(inputs: Schedule_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブを編集`)
};

const hi_schedule_edit_title = /** @type {(inputs: Schedule_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कार्य संपादित करें`)
};

const pt_br2_schedule_edit_title = /** @type {(inputs: Schedule_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar Tarefa`)
};

const ko_schedule_edit_title = /** @type {(inputs: Schedule_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작업 편집`)
};

const fr_schedule_edit_title = /** @type {(inputs: Schedule_Edit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier la tâche`)
};

/**
* | output |
* | --- |
* | "Edit Job" |
*
* @param {Schedule_Edit_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_edit_title = /** @type {((inputs?: Schedule_Edit_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Edit_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_edit_title(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_edit_title(inputs)
	if (locale === "es") return es_schedule_edit_title(inputs)
	if (locale === "ja") return ja_schedule_edit_title(inputs)
	if (locale === "hi") return hi_schedule_edit_title(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_edit_title(inputs)
	if (locale === "ko") return ko_schedule_edit_title(inputs)
	return fr_schedule_edit_title(inputs)
});