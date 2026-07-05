/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Search_Path_DescriptionInputs */

const en_wb_field_search_path_description = /** @type {(inputs: Wb_Field_Search_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Base directory for the file search`)
};

const zh_cn2_wb_field_search_path_description = /** @type {(inputs: Wb_Field_Search_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件搜索的基础目录`)
};

const es_wb_field_search_path_description = /** @type {(inputs: Wb_Field_Search_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Directorio base para la búsqueda de archivos`)
};

const ja_wb_field_search_path_description = /** @type {(inputs: Wb_Field_Search_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイル検索のベースディレクトリ`)
};

const hi_wb_field_search_path_description = /** @type {(inputs: Wb_Field_Search_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ाइल खोज के लिए बेस डायरेक्टरी`)
};

const pt_br2_wb_field_search_path_description = /** @type {(inputs: Wb_Field_Search_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diretório base para a pesquisa de arquivos`)
};

const ko_wb_field_search_path_description = /** @type {(inputs: Wb_Field_Search_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`파일 검색의 기본 디렉토리`)
};

const fr_wb_field_search_path_description = /** @type {(inputs: Wb_Field_Search_Path_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répertoire de base pour la recherche de fichiers`)
};

/**
* | output |
* | --- |
* | "Base directory for the file search" |
*
* @param {Wb_Field_Search_Path_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_search_path_description = /** @type {((inputs?: Wb_Field_Search_Path_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Search_Path_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_search_path_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_search_path_description(inputs)
	if (locale === "es") return es_wb_field_search_path_description(inputs)
	if (locale === "ja") return ja_wb_field_search_path_description(inputs)
	if (locale === "hi") return hi_wb_field_search_path_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_search_path_description(inputs)
	if (locale === "ko") return ko_wb_field_search_path_description(inputs)
	return fr_wb_field_search_path_description(inputs)
});