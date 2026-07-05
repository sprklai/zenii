/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Delete_Confirm_DescriptionInputs */

const en_memory_delete_confirm_description = /** @type {(inputs: Memory_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This will permanently remove this memory entry.`)
};

const zh_cn2_memory_delete_confirm_description = /** @type {(inputs: Memory_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这将永久删除此记忆条目。`)
};

const es_memory_delete_confirm_description = /** @type {(inputs: Memory_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto eliminará permanentemente esta entrada de memoria.`)
};

const ja_memory_delete_confirm_description = /** @type {(inputs: Memory_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このメモリエントリは完全に削除されます。`)
};

const hi_memory_delete_confirm_description = /** @type {(inputs: Memory_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यह इस मेमोरी प्रविष्टि को स्थायी रूप से हटा देगा।`)
};

const pt_br2_memory_delete_confirm_description = /** @type {(inputs: Memory_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso removerá permanentemente esta entrada de memória.`)
};

const ko_memory_delete_confirm_description = /** @type {(inputs: Memory_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 메모리 항목이 영구적으로 삭제됩니다.`)
};

const fr_memory_delete_confirm_description = /** @type {(inputs: Memory_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ceci supprimera définitivement cette entrée de mémoire.`)
};

/**
* | output |
* | --- |
* | "This will permanently remove this memory entry." |
*
* @param {Memory_Delete_Confirm_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_delete_confirm_description = /** @type {((inputs?: Memory_Delete_Confirm_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Delete_Confirm_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_delete_confirm_description(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_delete_confirm_description(inputs)
	if (locale === "es") return es_memory_delete_confirm_description(inputs)
	if (locale === "ja") return ja_memory_delete_confirm_description(inputs)
	if (locale === "hi") return hi_memory_delete_confirm_description(inputs)
	if (locale === "pt-BR") return pt_br2_memory_delete_confirm_description(inputs)
	if (locale === "ko") return ko_memory_delete_confirm_description(inputs)
	return fr_memory_delete_confirm_description(inputs)
});