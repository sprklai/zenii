/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Delete_Confirm_TitleInputs */

const en_schedule_delete_confirm_title = /** @type {(inputs: Schedule_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete job?`)
};

const zh_cn2_schedule_delete_confirm_title = /** @type {(inputs: Schedule_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除任务？`)
};

const es_schedule_delete_confirm_title = /** @type {(inputs: Schedule_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar tarea?`)
};

const ja_schedule_delete_confirm_title = /** @type {(inputs: Schedule_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブを削除しますか？`)
};

const hi_schedule_delete_confirm_title = /** @type {(inputs: Schedule_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कार्य हटाएँ?`)
};

const pt_br2_schedule_delete_confirm_title = /** @type {(inputs: Schedule_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir tarefa?`)
};

const ko_schedule_delete_confirm_title = /** @type {(inputs: Schedule_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작업을 삭제할까요?`)
};

const fr_schedule_delete_confirm_title = /** @type {(inputs: Schedule_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer la tâche ?`)
};

/**
* | output |
* | --- |
* | "Delete job?" |
*
* @param {Schedule_Delete_Confirm_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_delete_confirm_title = /** @type {((inputs?: Schedule_Delete_Confirm_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Delete_Confirm_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_delete_confirm_title(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_delete_confirm_title(inputs)
	if (locale === "es") return es_schedule_delete_confirm_title(inputs)
	if (locale === "ja") return ja_schedule_delete_confirm_title(inputs)
	if (locale === "hi") return hi_schedule_delete_confirm_title(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_delete_confirm_title(inputs)
	if (locale === "ko") return ko_schedule_delete_confirm_title(inputs)
	return fr_schedule_delete_confirm_title(inputs)
});