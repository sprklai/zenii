/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Validation_Toml_RequiredInputs */

const en_workflows_validation_toml_required = /** @type {(inputs: Workflows_Validation_Toml_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML content is required`)
};

const zh_cn2_workflows_validation_toml_required = /** @type {(inputs: Workflows_Validation_Toml_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML 内容为必填项`)
};

const es_workflows_validation_toml_required = /** @type {(inputs: Workflows_Validation_Toml_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El contenido TOML es obligatorio`)
};

const ja_workflows_validation_toml_required = /** @type {(inputs: Workflows_Validation_Toml_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML の内容は必須です`)
};

const hi_workflows_validation_toml_required = /** @type {(inputs: Workflows_Validation_Toml_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML सामग्री आवश्यक है`)
};

const pt_br2_workflows_validation_toml_required = /** @type {(inputs: Workflows_Validation_Toml_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo TOML é obrigatório`)
};

const ko_workflows_validation_toml_required = /** @type {(inputs: Workflows_Validation_Toml_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML 내용은 필수입니다`)
};

const fr_workflows_validation_toml_required = /** @type {(inputs: Workflows_Validation_Toml_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le contenu TOML est requis`)
};

/**
* | output |
* | --- |
* | "TOML content is required" |
*
* @param {Workflows_Validation_Toml_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_validation_toml_required = /** @type {((inputs?: Workflows_Validation_Toml_RequiredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Validation_Toml_RequiredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_validation_toml_required(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_validation_toml_required(inputs)
	if (locale === "es") return es_workflows_validation_toml_required(inputs)
	if (locale === "ja") return ja_workflows_validation_toml_required(inputs)
	if (locale === "hi") return hi_workflows_validation_toml_required(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_validation_toml_required(inputs)
	if (locale === "ko") return ko_workflows_validation_toml_required(inputs)
	return fr_workflows_validation_toml_required(inputs)
});