/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Generate_Error_GenericInputs */

const en_workflow_generate_error_generic = /** @type {(inputs: Workflow_Generate_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to generate workflow — check your provider settings and try again`)
};

const zh_cn2_workflow_generate_error_generic = /** @type {(inputs: Workflow_Generate_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生成工作流失败 — 请检查提供商设置后重试`)
};

const es_workflow_generate_error_generic = /** @type {(inputs: Workflow_Generate_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al generar el flujo de trabajo — revisa la configuración del proveedor e inténtalo de nuevo`)
};

const ja_workflow_generate_error_generic = /** @type {(inputs: Workflow_Generate_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ワークフローの生成に失敗しました — プロバイダー設定を確認してもう一度お試しください`)
};

const hi_workflow_generate_error_generic = /** @type {(inputs: Workflow_Generate_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वर्कफ़्लो बनाने में विफल — प्रदाता सेटिंग जांचें और पुनः प्रयास करें`)
};

const pt_br2_workflow_generate_error_generic = /** @type {(inputs: Workflow_Generate_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao gerar workflow — verifique as configurações do provedor e tente novamente`)
};

const ko_workflow_generate_error_generic = /** @type {(inputs: Workflow_Generate_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`워크플로 생성 실패 — 공급자 설정을 확인하고 다시 시도하세요`)
};

const fr_workflow_generate_error_generic = /** @type {(inputs: Workflow_Generate_Error_GenericInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la génération du flux de travail — vérifiez vos paramètres de fournisseur et réessayez`)
};

/**
* | output |
* | --- |
* | "Failed to generate workflow — check your provider settings and try again" |
*
* @param {Workflow_Generate_Error_GenericInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_generate_error_generic = /** @type {((inputs?: Workflow_Generate_Error_GenericInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Generate_Error_GenericInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_generate_error_generic(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_generate_error_generic(inputs)
	if (locale === "es") return es_workflow_generate_error_generic(inputs)
	if (locale === "ja") return ja_workflow_generate_error_generic(inputs)
	if (locale === "hi") return hi_workflow_generate_error_generic(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_generate_error_generic(inputs)
	if (locale === "ko") return ko_workflow_generate_error_generic(inputs)
	return fr_workflow_generate_error_generic(inputs)
});