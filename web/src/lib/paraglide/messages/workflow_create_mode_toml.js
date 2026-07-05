/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Create_Mode_TomlInputs */

const en_workflow_create_mode_toml = /** @type {(inputs: Workflow_Create_Mode_TomlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML`)
};

const zh_cn2_workflow_create_mode_toml = /** @type {(inputs: Workflow_Create_Mode_TomlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML`)
};

const es_workflow_create_mode_toml = /** @type {(inputs: Workflow_Create_Mode_TomlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML`)
};

const ja_workflow_create_mode_toml = /** @type {(inputs: Workflow_Create_Mode_TomlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML`)
};

const hi_workflow_create_mode_toml = /** @type {(inputs: Workflow_Create_Mode_TomlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML`)
};

const pt_br2_workflow_create_mode_toml = /** @type {(inputs: Workflow_Create_Mode_TomlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML`)
};

const ko_workflow_create_mode_toml = /** @type {(inputs: Workflow_Create_Mode_TomlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML`)
};

const fr_workflow_create_mode_toml = /** @type {(inputs: Workflow_Create_Mode_TomlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`TOML`)
};

/**
* | output |
* | --- |
* | "TOML" |
*
* @param {Workflow_Create_Mode_TomlInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_create_mode_toml = /** @type {((inputs?: Workflow_Create_Mode_TomlInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Create_Mode_TomlInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_create_mode_toml(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_create_mode_toml(inputs)
	if (locale === "es") return es_workflow_create_mode_toml(inputs)
	if (locale === "ja") return ja_workflow_create_mode_toml(inputs)
	if (locale === "hi") return hi_workflow_create_mode_toml(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_create_mode_toml(inputs)
	if (locale === "ko") return ko_workflow_create_mode_toml(inputs)
	return fr_workflow_create_mode_toml(inputs)
});