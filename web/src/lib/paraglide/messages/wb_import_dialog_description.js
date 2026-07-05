/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Import_Dialog_DescriptionInputs */

const en_wb_import_dialog_description = /** @type {(inputs: Wb_Import_Dialog_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select a .toml workflow file to import.`)
};

const zh_cn2_wb_import_dialog_description = /** @type {(inputs: Wb_Import_Dialog_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择一个 .toml 工作流文件进行导入。`)
};

const es_wb_import_dialog_description = /** @type {(inputs: Wb_Import_Dialog_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecciona un archivo .toml de flujo de trabajo para importar.`)
};

const ja_wb_import_dialog_description = /** @type {(inputs: Wb_Import_Dialog_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インポートする .toml ワークフローファイルを選択してください。`)
};

const hi_wb_import_dialog_description = /** @type {(inputs: Wb_Import_Dialog_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आयात करने के लिए एक .toml वर्कफ़्लो फ़ाइल चुनें।`)
};

const pt_br2_wb_import_dialog_description = /** @type {(inputs: Wb_Import_Dialog_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecione um arquivo .toml de workflow para importar.`)
};

const ko_wb_import_dialog_description = /** @type {(inputs: Wb_Import_Dialog_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`가져올 .toml 워크플로 파일을 선택하세요.`)
};

const fr_wb_import_dialog_description = /** @type {(inputs: Wb_Import_Dialog_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sélectionnez un fichier .toml de flux de travail à importer.`)
};

/**
* | output |
* | --- |
* | "Select a .toml workflow file to import." |
*
* @param {Wb_Import_Dialog_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_import_dialog_description = /** @type {((inputs?: Wb_Import_Dialog_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Import_Dialog_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_import_dialog_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_import_dialog_description(inputs)
	if (locale === "es") return es_wb_import_dialog_description(inputs)
	if (locale === "ja") return ja_wb_import_dialog_description(inputs)
	if (locale === "hi") return hi_wb_import_dialog_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_import_dialog_description(inputs)
	if (locale === "ko") return ko_wb_import_dialog_description(inputs)
	return fr_wb_import_dialog_description(inputs)
});