/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Import_Error_ParseInputs */

const en_wb_import_error_parse = /** @type {(inputs: Wb_Import_Error_ParseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to parse workflow file`)
};

const zh_cn2_wb_import_error_parse = /** @type {(inputs: Wb_Import_Error_ParseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解析工作流文件失败`)
};

const es_wb_import_error_parse = /** @type {(inputs: Wb_Import_Error_ParseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al analizar el archivo de flujo de trabajo`)
};

const ja_wb_import_error_parse = /** @type {(inputs: Wb_Import_Error_ParseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローファイルの解析に失敗しました`)
};

const hi_wb_import_error_parse = /** @type {(inputs: Wb_Import_Error_ParseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो फ़ाइल पार्स करने में विफल`)
};

const pt_br2_wb_import_error_parse = /** @type {(inputs: Wb_Import_Error_ParseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao analisar o arquivo de workflow`)
};

const ko_wb_import_error_parse = /** @type {(inputs: Wb_Import_Error_ParseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로 파일 파싱에 실패했습니다`)
};

const fr_wb_import_error_parse = /** @type {(inputs: Wb_Import_Error_ParseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de l'analyse du fichier de flux de travail`)
};

/**
* | output |
* | --- |
* | "Failed to parse workflow file" |
*
* @param {Wb_Import_Error_ParseInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_import_error_parse = /** @type {((inputs?: Wb_Import_Error_ParseInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Import_Error_ParseInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_import_error_parse(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_import_error_parse(inputs)
	if (locale === "es") return es_wb_import_error_parse(inputs)
	if (locale === "ja") return ja_wb_import_error_parse(inputs)
	if (locale === "hi") return hi_wb_import_error_parse(inputs)
	if (locale === "pt-BR") return pt_br2_wb_import_error_parse(inputs)
	if (locale === "ko") return ko_wb_import_error_parse(inputs)
	return fr_wb_import_error_parse(inputs)
});