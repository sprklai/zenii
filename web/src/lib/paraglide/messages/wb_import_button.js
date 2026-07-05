/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Import_ButtonInputs */

const en_wb_import_button = /** @type {(inputs: Wb_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Import`)
};

const zh_cn2_wb_import_button = /** @type {(inputs: Wb_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导入`)
};

const es_wb_import_button = /** @type {(inputs: Wb_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importar`)
};

const ja_wb_import_button = /** @type {(inputs: Wb_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`インポート`)
};

const hi_wb_import_button = /** @type {(inputs: Wb_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आयात करें`)
};

const pt_br2_wb_import_button = /** @type {(inputs: Wb_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importar`)
};

const ko_wb_import_button = /** @type {(inputs: Wb_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`가져오기`)
};

const fr_wb_import_button = /** @type {(inputs: Wb_Import_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importer`)
};

/**
* | output |
* | --- |
* | "Import" |
*
* @param {Wb_Import_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_import_button = /** @type {((inputs?: Wb_Import_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Import_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_import_button(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_import_button(inputs)
	if (locale === "es") return es_wb_import_button(inputs)
	if (locale === "ja") return ja_wb_import_button(inputs)
	if (locale === "hi") return hi_wb_import_button(inputs)
	if (locale === "pt-BR") return pt_br2_wb_import_button(inputs)
	if (locale === "ko") return ko_wb_import_button(inputs)
	return fr_wb_import_button(inputs)
});