/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_File_Search_Max_Results_DescriptionInputs */

const en_wb_field_file_search_max_results_description = /** @type {(inputs: Wb_Field_File_Search_Max_Results_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maximum number of file search results to return`)
};

const zh_cn2_wb_field_file_search_max_results_description = /** @type {(inputs: Wb_Field_File_Search_Max_Results_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回的最大文件搜索结果数`)
};

const es_wb_field_file_search_max_results_description = /** @type {(inputs: Wb_Field_File_Search_Max_Results_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Número máximo de resultados de búsqueda de archivos a devolver`)
};

const ja_wb_field_file_search_max_results_description = /** @type {(inputs: Wb_Field_File_Search_Max_Results_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返すファイル検索結果の最大数`)
};

const hi_wb_field_file_search_max_results_description = /** @type {(inputs: Wb_Field_File_Search_Max_Results_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लौटाए जाने वाले अधिकतम फ़ाइल खोज परिणाम`)
};

const pt_br2_wb_field_file_search_max_results_description = /** @type {(inputs: Wb_Field_File_Search_Max_Results_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Número máximo de resultados de pesquisa de arquivos a retornar`)
};

const ko_wb_field_file_search_max_results_description = /** @type {(inputs: Wb_Field_File_Search_Max_Results_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`반환할 최대 파일 검색 결과 수`)
};

const fr_wb_field_file_search_max_results_description = /** @type {(inputs: Wb_Field_File_Search_Max_Results_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre maximum de résultats de recherche de fichiers à retourner`)
};

/**
* | output |
* | --- |
* | "Maximum number of file search results to return" |
*
* @param {Wb_Field_File_Search_Max_Results_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_file_search_max_results_description = /** @type {((inputs?: Wb_Field_File_Search_Max_Results_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_File_Search_Max_Results_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_file_search_max_results_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_file_search_max_results_description(inputs)
	if (locale === "es") return es_wb_field_file_search_max_results_description(inputs)
	if (locale === "ja") return ja_wb_field_file_search_max_results_description(inputs)
	if (locale === "hi") return hi_wb_field_file_search_max_results_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_file_search_max_results_description(inputs)
	if (locale === "ko") return ko_wb_field_file_search_max_results_description(inputs)
	return fr_wb_field_file_search_max_results_description(inputs)
});