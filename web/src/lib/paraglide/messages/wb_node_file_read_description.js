/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_File_Read_DescriptionInputs */

const en_wb_node_file_read_description = /** @type {(inputs: Wb_Node_File_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read the contents of a file`)
};

const zh_cn2_wb_node_file_read_description = /** @type {(inputs: Wb_Node_File_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`读取文件内容`)
};

const es_wb_node_file_read_description = /** @type {(inputs: Wb_Node_File_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leer el contenido de un archivo`)
};

const ja_wb_node_file_read_description = /** @type {(inputs: Wb_Node_File_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルの内容を読み取ります`)
};

const hi_wb_node_file_read_description = /** @type {(inputs: Wb_Node_File_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक फ़ाइल की सामग्री पढ़ें`)
};

const pt_br2_wb_node_file_read_description = /** @type {(inputs: Wb_Node_File_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ler o conteúdo de um arquivo`)
};

const ko_wb_node_file_read_description = /** @type {(inputs: Wb_Node_File_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`파일의 내용을 읽습니다`)
};

const fr_wb_node_file_read_description = /** @type {(inputs: Wb_Node_File_Read_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lire le contenu d'un fichier`)
};

/**
* | output |
* | --- |
* | "Read the contents of a file" |
*
* @param {Wb_Node_File_Read_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_file_read_description = /** @type {((inputs?: Wb_Node_File_Read_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_File_Read_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_file_read_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_file_read_description(inputs)
	if (locale === "es") return es_wb_node_file_read_description(inputs)
	if (locale === "ja") return ja_wb_node_file_read_description(inputs)
	if (locale === "hi") return hi_wb_node_file_read_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_file_read_description(inputs)
	if (locale === "ko") return ko_wb_node_file_read_description(inputs)
	return fr_wb_node_file_read_description(inputs)
});