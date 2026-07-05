/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_File_Write_DescInputs */

const en_wb_node_file_write_desc = /** @type {(inputs: Wb_Node_File_Write_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write to file`)
};

const zh_cn2_wb_node_file_write_desc = /** @type {(inputs: Wb_Node_File_Write_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写入文件`)
};

const es_wb_node_file_write_desc = /** @type {(inputs: Wb_Node_File_Write_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribir en archivo`)
};

const ja_wb_node_file_write_desc = /** @type {(inputs: Wb_Node_File_Write_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルに書き込む`)
};

const hi_wb_node_file_write_desc = /** @type {(inputs: Wb_Node_File_Write_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ाइल में लिखें`)
};

const pt_br2_wb_node_file_write_desc = /** @type {(inputs: Wb_Node_File_Write_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escrever em arquivo`)
};

const ko_wb_node_file_write_desc = /** @type {(inputs: Wb_Node_File_Write_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`파일에 쓰기`)
};

const fr_wb_node_file_write_desc = /** @type {(inputs: Wb_Node_File_Write_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écrire dans un fichier`)
};

/**
* | output |
* | --- |
* | "Write to file" |
*
* @param {Wb_Node_File_Write_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_file_write_desc = /** @type {((inputs?: Wb_Node_File_Write_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_File_Write_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_file_write_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_file_write_desc(inputs)
	if (locale === "es") return es_wb_node_file_write_desc(inputs)
	if (locale === "ja") return ja_wb_node_file_write_desc(inputs)
	if (locale === "hi") return hi_wb_node_file_write_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_file_write_desc(inputs)
	if (locale === "ko") return ko_wb_node_file_write_desc(inputs)
	return fr_wb_node_file_write_desc(inputs)
});