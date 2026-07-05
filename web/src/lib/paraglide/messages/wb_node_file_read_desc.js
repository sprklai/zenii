/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_File_Read_DescInputs */

const en_wb_node_file_read_desc = /** @type {(inputs: Wb_Node_File_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read file contents`)
};

const zh_cn2_wb_node_file_read_desc = /** @type {(inputs: Wb_Node_File_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`读取文件内容`)
};

const es_wb_node_file_read_desc = /** @type {(inputs: Wb_Node_File_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leer contenido de archivo`)
};

const ja_wb_node_file_read_desc = /** @type {(inputs: Wb_Node_File_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルの内容を読み取る`)
};

const hi_wb_node_file_read_desc = /** @type {(inputs: Wb_Node_File_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ाइल सामग्री पढ़ें`)
};

const pt_br2_wb_node_file_read_desc = /** @type {(inputs: Wb_Node_File_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ler conteúdo do arquivo`)
};

const ko_wb_node_file_read_desc = /** @type {(inputs: Wb_Node_File_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`파일 내용 읽기`)
};

const fr_wb_node_file_read_desc = /** @type {(inputs: Wb_Node_File_Read_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lire le contenu d'un fichier`)
};

/**
* | output |
* | --- |
* | "Read file contents" |
*
* @param {Wb_Node_File_Read_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_file_read_desc = /** @type {((inputs?: Wb_Node_File_Read_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_File_Read_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_file_read_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_file_read_desc(inputs)
	if (locale === "es") return es_wb_node_file_read_desc(inputs)
	if (locale === "ja") return ja_wb_node_file_read_desc(inputs)
	if (locale === "hi") return hi_wb_node_file_read_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_file_read_desc(inputs)
	if (locale === "ko") return ko_wb_node_file_read_desc(inputs)
	return fr_wb_node_file_read_desc(inputs)
});