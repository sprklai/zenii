/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_File_Write_DescriptionInputs */

const en_wb_node_file_write_description = /** @type {(inputs: Wb_Node_File_Write_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Write content to a file`)
};

const zh_cn2_wb_node_file_write_description = /** @type {(inputs: Wb_Node_File_Write_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`将内容写入文件`)
};

const es_wb_node_file_write_description = /** @type {(inputs: Wb_Node_File_Write_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribir contenido en un archivo`)
};

const ja_wb_node_file_write_description = /** @type {(inputs: Wb_Node_File_Write_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルに内容を書き込みます`)
};

const hi_wb_node_file_write_description = /** @type {(inputs: Wb_Node_File_Write_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एक फ़ाइल में सामग्री लिखें`)
};

const pt_br2_wb_node_file_write_description = /** @type {(inputs: Wb_Node_File_Write_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escrever conteúdo em um arquivo`)
};

const ko_wb_node_file_write_description = /** @type {(inputs: Wb_Node_File_Write_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`파일에 내용을 씁니다`)
};

const fr_wb_node_file_write_description = /** @type {(inputs: Wb_Node_File_Write_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écrire du contenu dans un fichier`)
};

/**
* | output |
* | --- |
* | "Write content to a file" |
*
* @param {Wb_Node_File_Write_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_file_write_description = /** @type {((inputs?: Wb_Node_File_Write_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_File_Write_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_file_write_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_file_write_description(inputs)
	if (locale === "es") return es_wb_node_file_write_description(inputs)
	if (locale === "ja") return ja_wb_node_file_write_description(inputs)
	if (locale === "hi") return hi_wb_node_file_write_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_file_write_description(inputs)
	if (locale === "ko") return ko_wb_node_file_write_description(inputs)
	return fr_wb_node_file_write_description(inputs)
});