/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Memory_Forget_Key_DescriptionInputs */

const en_wb_field_memory_forget_key_description = /** @type {(inputs: Wb_Field_Memory_Forget_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Key of the memory entry to delete`)
};

const zh_cn2_wb_field_memory_forget_key_description = /** @type {(inputs: Wb_Field_Memory_Forget_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要删除的记忆条目的键`)
};

const es_wb_field_memory_forget_key_description = /** @type {(inputs: Wb_Field_Memory_Forget_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clave de la entrada de memoria a eliminar`)
};

const ja_wb_field_memory_forget_key_description = /** @type {(inputs: Wb_Field_Memory_Forget_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除するメモリエントリのキー`)
};

const hi_wb_field_memory_forget_key_description = /** @type {(inputs: Wb_Field_Memory_Forget_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हटाई जाने वाली मेमोरी प्रविष्टि की कुंजी`)
};

const pt_br2_wb_field_memory_forget_key_description = /** @type {(inputs: Wb_Field_Memory_Forget_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chave da entrada de memória a excluir`)
};

const ko_wb_field_memory_forget_key_description = /** @type {(inputs: Wb_Field_Memory_Forget_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`삭제할 메모리 항목의 키`)
};

const fr_wb_field_memory_forget_key_description = /** @type {(inputs: Wb_Field_Memory_Forget_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clé de l'entrée mémoire à supprimer`)
};

/**
* | output |
* | --- |
* | "Key of the memory entry to delete" |
*
* @param {Wb_Field_Memory_Forget_Key_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_memory_forget_key_description = /** @type {((inputs?: Wb_Field_Memory_Forget_Key_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Memory_Forget_Key_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_memory_forget_key_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_memory_forget_key_description(inputs)
	if (locale === "es") return es_wb_field_memory_forget_key_description(inputs)
	if (locale === "ja") return ja_wb_field_memory_forget_key_description(inputs)
	if (locale === "hi") return hi_wb_field_memory_forget_key_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_memory_forget_key_description(inputs)
	if (locale === "ko") return ko_wb_field_memory_forget_key_description(inputs)
	return fr_wb_field_memory_forget_key_description(inputs)
});