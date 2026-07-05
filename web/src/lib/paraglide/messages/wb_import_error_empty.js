/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Import_Error_EmptyInputs */

const en_wb_import_error_empty = /** @type {(inputs: Wb_Import_Error_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File is empty`)
};

const zh_cn2_wb_import_error_empty = /** @type {(inputs: Wb_Import_Error_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件为空`)
};

const es_wb_import_error_empty = /** @type {(inputs: Wb_Import_Error_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El archivo está vacío`)
};

const ja_wb_import_error_empty = /** @type {(inputs: Wb_Import_Error_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルが空です`)
};

const hi_wb_import_error_empty = /** @type {(inputs: Wb_Import_Error_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ाइल खाली है`)
};

const pt_br2_wb_import_error_empty = /** @type {(inputs: Wb_Import_Error_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo está vazio`)
};

const ko_wb_import_error_empty = /** @type {(inputs: Wb_Import_Error_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`파일이 비어 있습니다`)
};

const fr_wb_import_error_empty = /** @type {(inputs: Wb_Import_Error_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier est vide`)
};

/**
* | output |
* | --- |
* | "File is empty" |
*
* @param {Wb_Import_Error_EmptyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_import_error_empty = /** @type {((inputs?: Wb_Import_Error_EmptyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Import_Error_EmptyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_import_error_empty(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_import_error_empty(inputs)
	if (locale === "es") return es_wb_import_error_empty(inputs)
	if (locale === "ja") return ja_wb_import_error_empty(inputs)
	if (locale === "hi") return hi_wb_import_error_empty(inputs)
	if (locale === "pt-BR") return pt_br2_wb_import_error_empty(inputs)
	if (locale === "ko") return ko_wb_import_error_empty(inputs)
	return fr_wb_import_error_empty(inputs)
});