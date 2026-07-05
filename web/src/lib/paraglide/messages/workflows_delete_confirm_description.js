/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Delete_Confirm_DescriptionInputs */

const en_workflows_delete_confirm_description = /** @type {(inputs: Workflows_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This will permanently remove this workflow and its run history.`)
};

const zh_cn2_workflows_delete_confirm_description = /** @type {(inputs: Workflows_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这将永久删除此工作流及其运行历史。`)
};

const es_workflows_delete_confirm_description = /** @type {(inputs: Workflows_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto eliminará permanentemente este flujo de trabajo y su historial de ejecuciones.`)
};

const ja_workflows_delete_confirm_description = /** @type {(inputs: Workflows_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このワークフローと実行履歴が完全に削除されます。`)
};

const hi_workflows_delete_confirm_description = /** @type {(inputs: Workflows_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यह इस वर्कफ़्लो और उसके रन इतिहास को स्थायी रूप से हटा देगा।`)
};

const pt_br2_workflows_delete_confirm_description = /** @type {(inputs: Workflows_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso removerá permanentemente este workflow e seu histórico de execuções.`)
};

const ko_workflows_delete_confirm_description = /** @type {(inputs: Workflows_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 워크플로와 실행 이력이 영구적으로 삭제됩니다.`)
};

const fr_workflows_delete_confirm_description = /** @type {(inputs: Workflows_Delete_Confirm_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ceci supprimera définitivement ce flux de travail et son historique d'exécutions.`)
};

/**
* | output |
* | --- |
* | "This will permanently remove this workflow and its run history." |
*
* @param {Workflows_Delete_Confirm_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_delete_confirm_description = /** @type {((inputs?: Workflows_Delete_Confirm_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Delete_Confirm_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_delete_confirm_description(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_delete_confirm_description(inputs)
	if (locale === "es") return es_workflows_delete_confirm_description(inputs)
	if (locale === "ja") return ja_workflows_delete_confirm_description(inputs)
	if (locale === "hi") return hi_workflows_delete_confirm_description(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_delete_confirm_description(inputs)
	if (locale === "ko") return ko_workflows_delete_confirm_description(inputs)
	return fr_workflows_delete_confirm_description(inputs)
});