/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Auto_Delete_NoteInputs */

const en_schedule_auto_delete_note = /** @type {(inputs: Schedule_Auto_Delete_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto-deletes after execution`)
};

const zh_cn2_schedule_auto_delete_note = /** @type {(inputs: Schedule_Auto_Delete_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`执行后自动删除`)
};

const es_schedule_auto_delete_note = /** @type {(inputs: Schedule_Auto_Delete_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se elimina automáticamente después de la ejecución`)
};

const ja_schedule_auto_delete_note = /** @type {(inputs: Schedule_Auto_Delete_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行後に自動削除`)
};

const hi_schedule_auto_delete_note = /** @type {(inputs: Schedule_Auto_Delete_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`निष्पादन के बाद स्वतः हटाया जाएगा`)
};

const pt_br2_schedule_auto_delete_note = /** @type {(inputs: Schedule_Auto_Delete_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluído automaticamente após a execução`)
};

const ko_schedule_auto_delete_note = /** @type {(inputs: Schedule_Auto_Delete_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실행 후 자동 삭제됨`)
};

const fr_schedule_auto_delete_note = /** @type {(inputs: Schedule_Auto_Delete_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimé automatiquement après exécution`)
};

/**
* | output |
* | --- |
* | "Auto-deletes after execution" |
*
* @param {Schedule_Auto_Delete_NoteInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_auto_delete_note = /** @type {((inputs?: Schedule_Auto_Delete_NoteInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Auto_Delete_NoteInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_auto_delete_note(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_auto_delete_note(inputs)
	if (locale === "es") return es_schedule_auto_delete_note(inputs)
	if (locale === "ja") return ja_schedule_auto_delete_note(inputs)
	if (locale === "hi") return hi_schedule_auto_delete_note(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_auto_delete_note(inputs)
	if (locale === "ko") return ko_schedule_auto_delete_note(inputs)
	return fr_schedule_auto_delete_note(inputs)
});