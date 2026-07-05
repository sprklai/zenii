/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_File_Content_DescriptionInputs */

const en_wb_field_file_content_description = /** @type {(inputs: Wb_Field_File_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The content to write to the file`)
};

const zh_cn2_wb_field_file_content_description = /** @type {(inputs: Wb_Field_File_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要写入文件的内容`)
};

const es_wb_field_file_content_description = /** @type {(inputs: Wb_Field_File_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El contenido a escribir en el archivo`)
};

const ja_wb_field_file_content_description = /** @type {(inputs: Wb_Field_File_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルに書き込む内容`)
};

const hi_wb_field_file_content_description = /** @type {(inputs: Wb_Field_File_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ाइल में लिखी जाने वाली सामग्री`)
};

const pt_br2_wb_field_file_content_description = /** @type {(inputs: Wb_Field_File_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O conteúdo a ser escrito no arquivo`)
};

const ko_wb_field_file_content_description = /** @type {(inputs: Wb_Field_File_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`파일에 쓸 내용`)
};

const fr_wb_field_file_content_description = /** @type {(inputs: Wb_Field_File_Content_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le contenu à écrire dans le fichier`)
};

/**
* | output |
* | --- |
* | "The content to write to the file" |
*
* @param {Wb_Field_File_Content_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_file_content_description = /** @type {((inputs?: Wb_Field_File_Content_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_File_Content_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_file_content_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_file_content_description(inputs)
	if (locale === "es") return es_wb_field_file_content_description(inputs)
	if (locale === "ja") return ja_wb_field_file_content_description(inputs)
	if (locale === "hi") return hi_wb_field_file_content_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_file_content_description(inputs)
	if (locale === "ko") return ko_wb_field_file_content_description(inputs)
	return fr_wb_field_file_content_description(inputs)
});