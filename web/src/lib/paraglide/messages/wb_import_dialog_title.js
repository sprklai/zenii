/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Import_Dialog_TitleInputs */

const en_wb_import_dialog_title = /** @type {(inputs: Wb_Import_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Import Workflow`)
};

const zh_cn2_wb_import_dialog_title = /** @type {(inputs: Wb_Import_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导入工作流`)
};

const es_wb_import_dialog_title = /** @type {(inputs: Wb_Import_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importar flujo de trabajo`)
};

const ja_wb_import_dialog_title = /** @type {(inputs: Wb_Import_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローをインポート`)
};

const hi_wb_import_dialog_title = /** @type {(inputs: Wb_Import_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो आयात करें`)
};

const pt_br2_wb_import_dialog_title = /** @type {(inputs: Wb_Import_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importar Workflow`)
};

const ko_wb_import_dialog_title = /** @type {(inputs: Wb_Import_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로 가져오기`)
};

const fr_wb_import_dialog_title = /** @type {(inputs: Wb_Import_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importer un flux de travail`)
};

/**
* | output |
* | --- |
* | "Import Workflow" |
*
* @param {Wb_Import_Dialog_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_import_dialog_title = /** @type {((inputs?: Wb_Import_Dialog_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Import_Dialog_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_import_dialog_title(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_import_dialog_title(inputs)
	if (locale === "es") return es_wb_import_dialog_title(inputs)
	if (locale === "ja") return ja_wb_import_dialog_title(inputs)
	if (locale === "hi") return hi_wb_import_dialog_title(inputs)
	if (locale === "pt-BR") return pt_br2_wb_import_dialog_title(inputs)
	if (locale === "ko") return ko_wb_import_dialog_title(inputs)
	return fr_wb_import_dialog_title(inputs)
});