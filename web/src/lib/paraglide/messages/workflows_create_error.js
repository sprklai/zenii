/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Create_ErrorInputs */

const en_workflows_create_error = /** @type {(inputs: Workflows_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to create workflow`)
};

const zh_cn2_workflows_create_error = /** @type {(inputs: Workflows_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建工作流失败`)
};

const es_workflows_create_error = /** @type {(inputs: Workflows_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al crear flujo de trabajo`)
};

const ja_workflows_create_error = /** @type {(inputs: Workflows_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローの作成に失敗しました`)
};

const hi_workflows_create_error = /** @type {(inputs: Workflows_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो बनाने में विफल`)
};

const pt_br2_workflows_create_error = /** @type {(inputs: Workflows_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao criar workflow`)
};

const ko_workflows_create_error = /** @type {(inputs: Workflows_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로 생성 실패`)
};

const fr_workflows_create_error = /** @type {(inputs: Workflows_Create_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la création du flux de travail`)
};

/**
* | output |
* | --- |
* | "Failed to create workflow" |
*
* @param {Workflows_Create_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_create_error = /** @type {((inputs?: Workflows_Create_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Create_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_create_error(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_create_error(inputs)
	if (locale === "es") return es_workflows_create_error(inputs)
	if (locale === "ja") return ja_workflows_create_error(inputs)
	if (locale === "hi") return hi_workflows_create_error(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_create_error(inputs)
	if (locale === "ko") return ko_workflows_create_error(inputs)
	return fr_workflows_create_error(inputs)
});