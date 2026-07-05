/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Update_ErrorInputs */

const en_workflows_update_error = /** @type {(inputs: Workflows_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to update workflow`)
};

const zh_cn2_workflows_update_error = /** @type {(inputs: Workflows_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新工作流失败`)
};

const es_workflows_update_error = /** @type {(inputs: Workflows_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al actualizar flujo de trabajo`)
};

const ja_workflows_update_error = /** @type {(inputs: Workflows_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローの更新に失敗しました`)
};

const hi_workflows_update_error = /** @type {(inputs: Workflows_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो अपडेट करने में विफल`)
};

const pt_br2_workflows_update_error = /** @type {(inputs: Workflows_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao atualizar workflow`)
};

const ko_workflows_update_error = /** @type {(inputs: Workflows_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로 업데이트 실패`)
};

const fr_workflows_update_error = /** @type {(inputs: Workflows_Update_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la mise à jour du flux de travail`)
};

/**
* | output |
* | --- |
* | "Failed to update workflow" |
*
* @param {Workflows_Update_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_update_error = /** @type {((inputs?: Workflows_Update_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Update_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_update_error(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_update_error(inputs)
	if (locale === "es") return es_workflows_update_error(inputs)
	if (locale === "ja") return ja_workflows_update_error(inputs)
	if (locale === "hi") return hi_workflows_update_error(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_update_error(inputs)
	if (locale === "ko") return ko_workflows_update_error(inputs)
	return fr_workflows_update_error(inputs)
});