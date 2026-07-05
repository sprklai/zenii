/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Update_ButtonInputs */

const en_schedule_update_button = /** @type {(inputs: Schedule_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update Job`)
};

const zh_cn2_schedule_update_button = /** @type {(inputs: Schedule_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新任务`)
};

const es_schedule_update_button = /** @type {(inputs: Schedule_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizar tarea`)
};

const ja_schedule_update_button = /** @type {(inputs: Schedule_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブを更新`)
};

const hi_schedule_update_button = /** @type {(inputs: Schedule_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कार्य अपडेट करें`)
};

const pt_br2_schedule_update_button = /** @type {(inputs: Schedule_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizar Tarefa`)
};

const ko_schedule_update_button = /** @type {(inputs: Schedule_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작업 업데이트`)
};

const fr_schedule_update_button = /** @type {(inputs: Schedule_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mettre à jour la tâche`)
};

/**
* | output |
* | --- |
* | "Update Job" |
*
* @param {Schedule_Update_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_update_button = /** @type {((inputs?: Schedule_Update_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Update_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_update_button(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_update_button(inputs)
	if (locale === "es") return es_schedule_update_button(inputs)
	if (locale === "ja") return ja_schedule_update_button(inputs)
	if (locale === "hi") return hi_schedule_update_button(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_update_button(inputs)
	if (locale === "ko") return ko_schedule_update_button(inputs)
	return fr_schedule_update_button(inputs)
});