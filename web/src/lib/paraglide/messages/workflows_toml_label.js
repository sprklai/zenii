/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Toml_LabelInputs */

const en_workflows_toml_label = /** @type {(inputs: Workflows_Toml_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML Definition`)
};

const zh_cn2_workflows_toml_label = /** @type {(inputs: Workflows_Toml_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML 定义`)
};

const es_workflows_toml_label = /** @type {(inputs: Workflows_Toml_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Definición TOML`)
};

const ja_workflows_toml_label = /** @type {(inputs: Workflows_Toml_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML 定義`)
};

const hi_workflows_toml_label = /** @type {(inputs: Workflows_Toml_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML परिभाषा`)
};

const pt_br2_workflows_toml_label = /** @type {(inputs: Workflows_Toml_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Definição TOML`)
};

const ko_workflows_toml_label = /** @type {(inputs: Workflows_Toml_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML 정의`)
};

const fr_workflows_toml_label = /** @type {(inputs: Workflows_Toml_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Définition TOML`)
};

/**
* | output |
* | --- |
* | "TOML Definition" |
*
* @param {Workflows_Toml_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_toml_label = /** @type {((inputs?: Workflows_Toml_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Toml_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_toml_label(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_toml_label(inputs)
	if (locale === "es") return es_workflows_toml_label(inputs)
	if (locale === "ja") return ja_workflows_toml_label(inputs)
	if (locale === "hi") return hi_workflows_toml_label(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_toml_label(inputs)
	if (locale === "ko") return ko_workflows_toml_label(inputs)
	return fr_workflows_toml_label(inputs)
});