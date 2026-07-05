/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Update_ButtonInputs */

const en_workflows_update_button = /** @type {(inputs: Workflows_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Update Workflow`)
};

const zh_cn2_workflows_update_button = /** @type {(inputs: Workflows_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新工作流`)
};

const es_workflows_update_button = /** @type {(inputs: Workflows_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizar flujo de trabajo`)
};

const ja_workflows_update_button = /** @type {(inputs: Workflows_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローを更新`)
};

const hi_workflows_update_button = /** @type {(inputs: Workflows_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो अपडेट करें`)
};

const pt_br2_workflows_update_button = /** @type {(inputs: Workflows_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizar Workflow`)
};

const ko_workflows_update_button = /** @type {(inputs: Workflows_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로 업데이트`)
};

const fr_workflows_update_button = /** @type {(inputs: Workflows_Update_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mettre à jour le flux de travail`)
};

/**
* | output |
* | --- |
* | "Update Workflow" |
*
* @param {Workflows_Update_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_update_button = /** @type {((inputs?: Workflows_Update_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Update_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_update_button(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_update_button(inputs)
	if (locale === "es") return es_workflows_update_button(inputs)
	if (locale === "ja") return ja_workflows_update_button(inputs)
	if (locale === "hi") return hi_workflows_update_button(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_update_button(inputs)
	if (locale === "ko") return ko_workflows_update_button(inputs)
	return fr_workflows_update_button(inputs)
});