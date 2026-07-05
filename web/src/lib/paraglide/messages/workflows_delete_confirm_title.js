/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Delete_Confirm_TitleInputs */

const en_workflows_delete_confirm_title = /** @type {(inputs: Workflows_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete workflow?`)
};

const zh_cn2_workflows_delete_confirm_title = /** @type {(inputs: Workflows_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除工作流？`)
};

const es_workflows_delete_confirm_title = /** @type {(inputs: Workflows_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar flujo de trabajo?`)
};

const ja_workflows_delete_confirm_title = /** @type {(inputs: Workflows_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローを削除しますか？`)
};

const hi_workflows_delete_confirm_title = /** @type {(inputs: Workflows_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो हटाएँ?`)
};

const pt_br2_workflows_delete_confirm_title = /** @type {(inputs: Workflows_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir workflow?`)
};

const ko_workflows_delete_confirm_title = /** @type {(inputs: Workflows_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로를 삭제할까요?`)
};

const fr_workflows_delete_confirm_title = /** @type {(inputs: Workflows_Delete_Confirm_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer le flux de travail ?`)
};

/**
* | output |
* | --- |
* | "Delete workflow?" |
*
* @param {Workflows_Delete_Confirm_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_delete_confirm_title = /** @type {((inputs?: Workflows_Delete_Confirm_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Delete_Confirm_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_delete_confirm_title(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_delete_confirm_title(inputs)
	if (locale === "es") return es_workflows_delete_confirm_title(inputs)
	if (locale === "ja") return ja_workflows_delete_confirm_title(inputs)
	if (locale === "hi") return hi_workflows_delete_confirm_title(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_delete_confirm_title(inputs)
	if (locale === "ko") return ko_workflows_delete_confirm_title(inputs)
	return fr_workflows_delete_confirm_title(inputs)
});