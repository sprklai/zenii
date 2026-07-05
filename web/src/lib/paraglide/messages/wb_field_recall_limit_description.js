/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Recall_Limit_DescriptionInputs */

const en_wb_field_recall_limit_description = /** @type {(inputs: Wb_Field_Recall_Limit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maximum number of memory entries to return`)
};

const zh_cn2_wb_field_recall_limit_description = /** @type {(inputs: Wb_Field_Recall_Limit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回的最大记忆条目数`)
};

const es_wb_field_recall_limit_description = /** @type {(inputs: Wb_Field_Recall_Limit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Número máximo de entradas de memoria a devolver`)
};

const ja_wb_field_recall_limit_description = /** @type {(inputs: Wb_Field_Recall_Limit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返すメモリエントリの最大数`)
};

const hi_wb_field_recall_limit_description = /** @type {(inputs: Wb_Field_Recall_Limit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लौटाई जाने वाली अधिकतम मेमोरी प्रविष्टियाँ`)
};

const pt_br2_wb_field_recall_limit_description = /** @type {(inputs: Wb_Field_Recall_Limit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Número máximo de entradas de memória a retornar`)
};

const ko_wb_field_recall_limit_description = /** @type {(inputs: Wb_Field_Recall_Limit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`반환할 최대 메모리 항목 수`)
};

const fr_wb_field_recall_limit_description = /** @type {(inputs: Wb_Field_Recall_Limit_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre maximum d'entrées de mémoire à retourner`)
};

/**
* | output |
* | --- |
* | "Maximum number of memory entries to return" |
*
* @param {Wb_Field_Recall_Limit_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_recall_limit_description = /** @type {((inputs?: Wb_Field_Recall_Limit_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Recall_Limit_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_recall_limit_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_recall_limit_description(inputs)
	if (locale === "es") return es_wb_field_recall_limit_description(inputs)
	if (locale === "ja") return ja_wb_field_recall_limit_description(inputs)
	if (locale === "hi") return hi_wb_field_recall_limit_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_recall_limit_description(inputs)
	if (locale === "ko") return ko_wb_field_recall_limit_description(inputs)
	return fr_wb_field_recall_limit_description(inputs)
});