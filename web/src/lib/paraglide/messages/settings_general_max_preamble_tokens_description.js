/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Max_Preamble_Tokens_DescriptionInputs */

const en_settings_general_max_preamble_tokens_description = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token budget for system preamble. Overflow trims lowest-priority context.`)
};

const zh_cn2_settings_general_max_preamble_tokens_description = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`系统前言的令牌预算。超出时将裁剪最低优先级的上下文。`)
};

const es_settings_general_max_preamble_tokens_description = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Presupuesto de tokens para el preámbulo del sistema. El desbordamiento recorta el contexto de menor prioridad.`)
};

const ja_settings_general_max_preamble_tokens_description = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`システム前文のトークン予算。超過時は最低優先度のコンテキストが削除されます。`)
};

const hi_settings_general_max_preamble_tokens_description = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सिस्टम प्रस्तावना के लिए टोकन बजट। ओवरफ़्लो सबसे कम प्राथमिकता वाले संदर्भ को काटता है।`)
};

const pt_br2_settings_general_max_preamble_tokens_description = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orçamento de tokens para o preâmbulo do sistema. Overflow remove contexto de menor prioridade.`)
};

const ko_settings_general_max_preamble_tokens_description = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`시스템 서문의 토큰 예산. 초과 시 우선순위가 낮은 컨텍스트가 제거됩니다.`)
};

const fr_settings_general_max_preamble_tokens_description = /** @type {(inputs: Settings_General_Max_Preamble_Tokens_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Budget de jetons pour le préambule système. Le dépassement supprime le contexte de priorité la plus basse.`)
};

/**
* | output |
* | --- |
* | "Token budget for system preamble. Overflow trims lowest-priority context." |
*
* @param {Settings_General_Max_Preamble_Tokens_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_max_preamble_tokens_description = /** @type {((inputs?: Settings_General_Max_Preamble_Tokens_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Max_Preamble_Tokens_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_max_preamble_tokens_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_max_preamble_tokens_description(inputs)
	if (locale === "es") return es_settings_general_max_preamble_tokens_description(inputs)
	if (locale === "ja") return ja_settings_general_max_preamble_tokens_description(inputs)
	if (locale === "hi") return hi_settings_general_max_preamble_tokens_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_max_preamble_tokens_description(inputs)
	if (locale === "ko") return ko_settings_general_max_preamble_tokens_description(inputs)
	return fr_settings_general_max_preamble_tokens_description(inputs)
});