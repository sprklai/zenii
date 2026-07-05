/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Search_Path_PlaceholderInputs */

const en_wb_field_search_path_placeholder = /** @type {(inputs: Wb_Field_Search_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Directory to search in (optional)`)
};

const zh_cn2_wb_field_search_path_placeholder = /** @type {(inputs: Wb_Field_Search_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索目录（可选）`)
};

const es_wb_field_search_path_placeholder = /** @type {(inputs: Wb_Field_Search_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Directorio en el que buscar (opcional)`)
};

const ja_wb_field_search_path_placeholder = /** @type {(inputs: Wb_Field_Search_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索するディレクトリ（オプション）`)
};

const hi_wb_field_search_path_placeholder = /** @type {(inputs: Wb_Field_Search_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`खोज की डायरेक्टरी (वैकल्पिक)`)
};

const pt_br2_wb_field_search_path_placeholder = /** @type {(inputs: Wb_Field_Search_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diretório em que pesquisar (opcional)`)
};

const ko_wb_field_search_path_placeholder = /** @type {(inputs: Wb_Field_Search_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`검색할 디렉토리（선택적）`)
};

const fr_wb_field_search_path_placeholder = /** @type {(inputs: Wb_Field_Search_Path_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Répertoire de recherche (optionnel)`)
};

/**
* | output |
* | --- |
* | "Directory to search in (optional)" |
*
* @param {Wb_Field_Search_Path_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_search_path_placeholder = /** @type {((inputs?: Wb_Field_Search_Path_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Search_Path_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_search_path_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_search_path_placeholder(inputs)
	if (locale === "es") return es_wb_field_search_path_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_search_path_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_search_path_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_search_path_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_search_path_placeholder(inputs)
	return fr_wb_field_search_path_placeholder(inputs)
});