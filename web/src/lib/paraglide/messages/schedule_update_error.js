/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Update_ErrorInputs */

const en_schedule_update_error = /** @type {(inputs: Schedule_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update job`)
};

const zh_cn2_schedule_update_error = /** @type {(inputs: Schedule_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新任务失败`)
};

const es_schedule_update_error = /** @type {(inputs: Schedule_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al actualizar la tarea`)
};

const ja_schedule_update_error = /** @type {(inputs: Schedule_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブの更新に失敗しました`)
};

const hi_schedule_update_error = /** @type {(inputs: Schedule_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कार्य अपडेट करने में विफल`)
};

const pt_br2_schedule_update_error = /** @type {(inputs: Schedule_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao atualizar tarefa`)
};

const ko_schedule_update_error = /** @type {(inputs: Schedule_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작업 업데이트 실패`)
};

const fr_schedule_update_error = /** @type {(inputs: Schedule_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la mise à jour de la tâche`)
};

/**
* | output |
* | --- |
* | "Failed to update job" |
*
* @param {Schedule_Update_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_update_error = /** @type {((inputs?: Schedule_Update_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Update_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_update_error(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_update_error(inputs)
	if (locale === "es") return es_schedule_update_error(inputs)
	if (locale === "ja") return ja_schedule_update_error(inputs)
	if (locale === "hi") return hi_schedule_update_error(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_update_error(inputs)
	if (locale === "ko") return ko_schedule_update_error(inputs)
	return fr_schedule_update_error(inputs)
});