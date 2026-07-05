/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Compact_Prompts_DescriptionInputs */

const en_settings_general_compact_prompts_description = /** @type {(inputs: Settings_General_Compact_Prompts_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uses compact axiom-based preamble instead of verbose prose. Reduces token usage by ~60-80% while maintaining response quality.`)
};

const zh_cn2_settings_general_compact_prompts_description = /** @type {(inputs: Settings_General_Compact_Prompts_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用紧凑的公理化前言代替冗长的散文。在保持回复质量的同时减少约 60-80% 的令牌使用量。`)
};

const es_settings_general_compact_prompts_description = /** @type {(inputs: Settings_General_Compact_Prompts_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa un preámbulo compacto basado en axiomas en lugar de prosa detallada. Reduce el uso de tokens en ~60-80% manteniendo la calidad de las respuestas.`)
};

const ja_settings_general_compact_prompts_description = /** @type {(inputs: Settings_General_Compact_Prompts_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`冗長な文章の代わりにコンパクトな公理ベースの前文を使用します。応答品質を維持しつつトークン使用量を約 60-80% 削減します。`)
};

const hi_settings_general_compact_prompts_description = /** @type {(inputs: Settings_General_Compact_Prompts_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`विस्तृत गद्य के बजाय कॉम्पैक्ट एक्सियम-आधारित प्रस्तावना का उपयोग करता है। प्रतिक्रिया गुणवत्ता बनाए रखते हुए टोकन उपयोग ~60-80% कम करता है।`)
};

const pt_br2_settings_general_compact_prompts_description = /** @type {(inputs: Settings_General_Compact_Prompts_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa preâmbulo compacto baseado em axiomas em vez de prosa verbosa. Reduz o uso de tokens em ~60-80% mantendo a qualidade das respostas.`)
};

const ko_settings_general_compact_prompts_description = /** @type {(inputs: Settings_General_Compact_Prompts_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`장황한 산문 대신 간결한 공리 기반 서문을 사용합니다. 응답 품질을 유지하면서 토큰 사용량을 ~60-80% 줄입니다.`)
};

const fr_settings_general_compact_prompts_description = /** @type {(inputs: Settings_General_Compact_Prompts_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilise un préambule compact basé sur des axiomes au lieu de prose détaillée. Réduit l'utilisation de jetons d'environ 60-80% tout en maintenant la qualité des réponses.`)
};

/**
* | output |
* | --- |
* | "Uses compact axiom-based preamble instead of verbose prose. Reduces token usage by ~60-80% while maintaining response quality." |
*
* @param {Settings_General_Compact_Prompts_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_compact_prompts_description = /** @type {((inputs?: Settings_General_Compact_Prompts_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Compact_Prompts_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_compact_prompts_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_compact_prompts_description(inputs)
	if (locale === "es") return es_settings_general_compact_prompts_description(inputs)
	if (locale === "ja") return ja_settings_general_compact_prompts_description(inputs)
	if (locale === "hi") return hi_settings_general_compact_prompts_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_compact_prompts_description(inputs)
	if (locale === "ko") return ko_settings_general_compact_prompts_description(inputs)
	return fr_settings_general_compact_prompts_description(inputs)
});