/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Delete_Confirm_DescriptionInputs */

const en_schedule_delete_confirm_description = /** @type {(inputs: Schedule_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This will permanently remove this scheduled job.`)
};

const zh_cn2_schedule_delete_confirm_description = /** @type {(inputs: Schedule_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这将永久删除此定时任务。`)
};

const es_schedule_delete_confirm_description = /** @type {(inputs: Schedule_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto eliminará permanentemente esta tarea programada.`)
};

const ja_schedule_delete_confirm_description = /** @type {(inputs: Schedule_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このスケジュールジョブは完全に削除されます。`)
};

const hi_schedule_delete_confirm_description = /** @type {(inputs: Schedule_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यह इस शेड्यूल्ड कार्य को स्थायी रूप से हटा देगा।`)
};

const pt_br2_schedule_delete_confirm_description = /** @type {(inputs: Schedule_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso removerá permanentemente esta tarefa agendada.`)
};

const ko_schedule_delete_confirm_description = /** @type {(inputs: Schedule_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 예약 작업이 영구적으로 삭제됩니다.`)
};

const fr_schedule_delete_confirm_description = /** @type {(inputs: Schedule_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ceci supprimera définitivement cette tâche planifiée.`)
};

/**
* | output |
* | --- |
* | "This will permanently remove this scheduled job." |
*
* @param {Schedule_Delete_Confirm_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_delete_confirm_description = /** @type {((inputs?: Schedule_Delete_Confirm_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Delete_Confirm_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_delete_confirm_description(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_delete_confirm_description(inputs)
	if (locale === "es") return es_schedule_delete_confirm_description(inputs)
	if (locale === "ja") return ja_schedule_delete_confirm_description(inputs)
	if (locale === "hi") return hi_schedule_delete_confirm_description(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_delete_confirm_description(inputs)
	if (locale === "ko") return ko_schedule_delete_confirm_description(inputs)
	return fr_schedule_delete_confirm_description(inputs)
});