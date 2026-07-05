/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ key: NonNullable<unknown> }} Memory_Edit_Dialog_TitleInputs */

const en_memory_edit_dialog_title = /** @type {(inputs: Memory_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Edit Memory: ${i?.key}`)
};

const zh_cn2_memory_edit_dialog_title = /** @type {(inputs: Memory_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编辑记忆：${i?.key}`)
};

const es_memory_edit_dialog_title = /** @type {(inputs: Memory_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editar memoria: ${i?.key}`)
};

const ja_memory_edit_dialog_title = /** @type {(inputs: Memory_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`メモリを編集：${i?.key}`)
};

const hi_memory_edit_dialog_title = /** @type {(inputs: Memory_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`मेमोरी संपादित करें: ${i?.key}`)
};

const pt_br2_memory_edit_dialog_title = /** @type {(inputs: Memory_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editar Memória: ${i?.key}`)
};

const ko_memory_edit_dialog_title = /** @type {(inputs: Memory_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`메모리 편집: ${i?.key}`)
};

const fr_memory_edit_dialog_title = /** @type {(inputs: Memory_Edit_Dialog_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifier la mémoire : ${i?.key}`)
};

/**
* | output |
* | --- |
* | "Edit Memory: {key}" |
*
* @param {Memory_Edit_Dialog_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_edit_dialog_title = /** @type {((inputs: Memory_Edit_Dialog_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Edit_Dialog_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_edit_dialog_title(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_edit_dialog_title(inputs)
	if (locale === "es") return es_memory_edit_dialog_title(inputs)
	if (locale === "ja") return ja_memory_edit_dialog_title(inputs)
	if (locale === "hi") return hi_memory_edit_dialog_title(inputs)
	if (locale === "pt-BR") return pt_br2_memory_edit_dialog_title(inputs)
	if (locale === "ko") return ko_memory_edit_dialog_title(inputs)
	return fr_memory_edit_dialog_title(inputs)
});