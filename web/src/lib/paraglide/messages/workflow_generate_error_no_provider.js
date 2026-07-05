/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflow_Generate_Error_No_ProviderInputs */

const en_workflow_generate_error_no_provider = /** @type {(inputs: Workflow_Generate_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No AI provider configured. Add one in Settings → Providers.`)
};

const zh_cn2_workflow_generate_error_no_provider = /** @type {(inputs: Workflow_Generate_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未配置 AI 提供商。请在设置 → 提供商中添加。`)
};

const es_workflow_generate_error_no_provider = /** @type {(inputs: Workflow_Generate_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay proveedor de IA configurado. Añade uno en Configuración → Proveedores.`)
};

const ja_workflow_generate_error_no_provider = /** @type {(inputs: Workflow_Generate_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI プロバイダーが設定されていません。設定 → プロバイダーで追加してください。`)
};

const hi_workflow_generate_error_no_provider = /** @type {(inputs: Workflow_Generate_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई AI प्रदाता कॉन्फ़िगर नहीं है। सेटिंग → प्रदाता में एक जोड़ें।`)
};

const pt_br2_workflow_generate_error_no_provider = /** @type {(inputs: Workflow_Generate_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum provedor de IA configurado. Adicione um em Configurações → Provedores.`)
};

const ko_workflow_generate_error_no_provider = /** @type {(inputs: Workflow_Generate_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`AI 제공업체가 구성되지 않았습니다. 설정 → 제공업체에서 추가하세요.`)
};

const fr_workflow_generate_error_no_provider = /** @type {(inputs: Workflow_Generate_Error_No_ProviderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun fournisseur d'IA configuré. Ajoutez-en un dans Paramètres → Fournisseurs.`)
};

/**
* | output |
* | --- |
* | "No AI provider configured. Add one in Settings → Providers." |
*
* @param {Workflow_Generate_Error_No_ProviderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflow_generate_error_no_provider = /** @type {((inputs?: Workflow_Generate_Error_No_ProviderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflow_Generate_Error_No_ProviderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflow_generate_error_no_provider(inputs)
	if (locale === "zh-CN") return zh_cn2_workflow_generate_error_no_provider(inputs)
	if (locale === "es") return es_workflow_generate_error_no_provider(inputs)
	if (locale === "ja") return ja_workflow_generate_error_no_provider(inputs)
	if (locale === "hi") return hi_workflow_generate_error_no_provider(inputs)
	if (locale === "pt-BR") return pt_br2_workflow_generate_error_no_provider(inputs)
	if (locale === "ko") return ko_workflow_generate_error_no_provider(inputs)
	return fr_workflow_generate_error_no_provider(inputs)
});