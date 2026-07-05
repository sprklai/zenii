/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_New_ButtonInputs */

const en_workflows_new_button = /** @type {(inputs: Workflows_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New Workflow`)
};

const zh_cn2_workflows_new_button = /** @type {(inputs: Workflows_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建工作流`)
};

const es_workflows_new_button = /** @type {(inputs: Workflows_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo flujo de trabajo`)
};

const ja_workflows_new_button = /** @type {(inputs: Workflows_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新規ワークフロー`)
};

const hi_workflows_new_button = /** @type {(inputs: Workflows_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`नया वर्कफ़्लो`)
};

const pt_br2_workflows_new_button = /** @type {(inputs: Workflows_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo Workflow`)
};

const ko_workflows_new_button = /** @type {(inputs: Workflows_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`새 워크플로`)
};

const fr_workflows_new_button = /** @type {(inputs: Workflows_New_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau flux de travail`)
};

/**
* | output |
* | --- |
* | "New Workflow" |
*
* @param {Workflows_New_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_new_button = /** @type {((inputs?: Workflows_New_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_New_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_new_button(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_new_button(inputs)
	if (locale === "es") return es_workflows_new_button(inputs)
	if (locale === "ja") return ja_workflows_new_button(inputs)
	if (locale === "hi") return hi_workflows_new_button(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_new_button(inputs)
	if (locale === "ko") return ko_workflows_new_button(inputs)
	return fr_workflows_new_button(inputs)
});