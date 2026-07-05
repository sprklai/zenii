/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Code_Validation_ErrorInputs */

const en_wb_code_validation_error = /** @type {(inputs: Wb_Code_Validation_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML validation error`)
};

const zh_cn2_wb_code_validation_error = /** @type {(inputs: Wb_Code_Validation_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML 验证错误`)
};

const es_wb_code_validation_error = /** @type {(inputs: Wb_Code_Validation_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error de validación TOML`)
};

const ja_wb_code_validation_error = /** @type {(inputs: Wb_Code_Validation_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML 検証エラー`)
};

const hi_wb_code_validation_error = /** @type {(inputs: Wb_Code_Validation_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML सत्यापन त्रुटि`)
};

const pt_br2_wb_code_validation_error = /** @type {(inputs: Wb_Code_Validation_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erro de validação TOML`)
};

const ko_wb_code_validation_error = /** @type {(inputs: Wb_Code_Validation_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML 유효성 검사 오류`)
};

const fr_wb_code_validation_error = /** @type {(inputs: Wb_Code_Validation_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erreur de validation TOML`)
};

/**
* | output |
* | --- |
* | "TOML validation error" |
*
* @param {Wb_Code_Validation_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_code_validation_error = /** @type {((inputs?: Wb_Code_Validation_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Code_Validation_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_code_validation_error(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_code_validation_error(inputs)
	if (locale === "es") return es_wb_code_validation_error(inputs)
	if (locale === "ja") return ja_wb_code_validation_error(inputs)
	if (locale === "hi") return hi_wb_code_validation_error(inputs)
	if (locale === "pt-BR") return pt_br2_wb_code_validation_error(inputs)
	if (locale === "ko") return ko_wb_code_validation_error(inputs)
	return fr_wb_code_validation_error(inputs)
});