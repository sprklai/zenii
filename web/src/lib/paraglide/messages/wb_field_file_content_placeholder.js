/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_File_Content_PlaceholderInputs */

const en_wb_field_file_content_placeholder = /** @type {(inputs: Wb_Field_File_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File content`)
};

const zh_cn2_wb_field_file_content_placeholder = /** @type {(inputs: Wb_Field_File_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件内容`)
};

const es_wb_field_file_content_placeholder = /** @type {(inputs: Wb_Field_File_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido del archivo`)
};

const ja_wb_field_file_content_placeholder = /** @type {(inputs: Wb_Field_File_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルの内容`)
};

const hi_wb_field_file_content_placeholder = /** @type {(inputs: Wb_Field_File_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ाइल सामग्री`)
};

const pt_br2_wb_field_file_content_placeholder = /** @type {(inputs: Wb_Field_File_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo do arquivo`)
};

const ko_wb_field_file_content_placeholder = /** @type {(inputs: Wb_Field_File_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`파일 내용`)
};

const fr_wb_field_file_content_placeholder = /** @type {(inputs: Wb_Field_File_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu du fichier`)
};

/**
* | output |
* | --- |
* | "File content" |
*
* @param {Wb_Field_File_Content_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_file_content_placeholder = /** @type {((inputs?: Wb_Field_File_Content_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_File_Content_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_file_content_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_file_content_placeholder(inputs)
	if (locale === "es") return es_wb_field_file_content_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_file_content_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_file_content_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_file_content_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_file_content_placeholder(inputs)
	return fr_wb_field_file_content_placeholder(inputs)
});