/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Import_SuccessInputs */

const en_wb_import_success = /** @type {(inputs: Wb_Import_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workflow imported successfully`)
};

const zh_cn2_wb_import_success = /** @type {(inputs: Wb_Import_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工作流导入成功`)
};

const es_wb_import_success = /** @type {(inputs: Wb_Import_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flujo de trabajo importado correctamente`)
};

const ja_wb_import_success = /** @type {(inputs: Wb_Import_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローのインポートに成功しました`)
};

const hi_wb_import_success = /** @type {(inputs: Wb_Import_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो सफलतापूर्वक आयात किया गया`)
};

const pt_br2_wb_import_success = /** @type {(inputs: Wb_Import_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Workflow importado com sucesso`)
};

const ko_wb_import_success = /** @type {(inputs: Wb_Import_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로를 성공적으로 가져왔습니다`)
};

const fr_wb_import_success = /** @type {(inputs: Wb_Import_SuccessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flux de travail importé avec succès`)
};

/**
* | output |
* | --- |
* | "Workflow imported successfully" |
*
* @param {Wb_Import_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_import_success = /** @type {((inputs?: Wb_Import_SuccessInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Import_SuccessInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_import_success(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_import_success(inputs)
	if (locale === "es") return es_wb_import_success(inputs)
	if (locale === "ja") return ja_wb_import_success(inputs)
	if (locale === "hi") return hi_wb_import_success(inputs)
	if (locale === "pt-BR") return pt_br2_wb_import_success(inputs)
	if (locale === "ko") return ko_wb_import_success(inputs)
	return fr_wb_import_success(inputs)
});