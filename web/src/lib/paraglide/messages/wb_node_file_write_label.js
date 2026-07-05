/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Node_File_Write_LabelInputs */

const en_wb_node_file_write_label = /** @type {(inputs: Wb_Node_File_Write_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File Write`)
};

const zh_cn2_wb_node_file_write_label = /** @type {(inputs: Wb_Node_File_Write_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`写入文件`)
};

const es_wb_node_file_write_label = /** @type {(inputs: Wb_Node_File_Write_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribir archivo`)
};

const ja_wb_node_file_write_label = /** @type {(inputs: Wb_Node_File_Write_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイル書き込み`)
};

const hi_wb_node_file_write_label = /** @type {(inputs: Wb_Node_File_Write_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ाइल लिखें`)
};

const pt_br2_wb_node_file_write_label = /** @type {(inputs: Wb_Node_File_Write_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escrever Arquivo`)
};

const ko_wb_node_file_write_label = /** @type {(inputs: Wb_Node_File_Write_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`파일 쓰기`)
};

const fr_wb_node_file_write_label = /** @type {(inputs: Wb_Node_File_Write_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Écriture de fichier`)
};

/**
* | output |
* | --- |
* | "File Write" |
*
* @param {Wb_Node_File_Write_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_node_file_write_label = /** @type {((inputs?: Wb_Node_File_Write_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Node_File_Write_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_node_file_write_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_node_file_write_label(inputs)
	if (locale === "es") return es_wb_node_file_write_label(inputs)
	if (locale === "ja") return ja_wb_node_file_write_label(inputs)
	if (locale === "hi") return hi_wb_node_file_write_label(inputs)
	if (locale === "pt-BR") return pt_br2_wb_node_file_write_label(inputs)
	if (locale === "ko") return ko_wb_node_file_write_label(inputs)
	return fr_wb_node_file_write_label(inputs)
});