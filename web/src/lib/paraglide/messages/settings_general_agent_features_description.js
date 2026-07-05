/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Agent_Features_DescriptionInputs */

const en_settings_general_agent_features_description = /** @type {(inputs: Settings_General_Agent_Features_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toggle context injection and self-evolution at runtime`)
};

const zh_cn2_settings_general_agent_features_description = /** @type {(inputs: Settings_General_Agent_Features_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在运行时切换上下文注入和自我进化`)
};

const es_settings_general_agent_features_description = /** @type {(inputs: Settings_General_Agent_Features_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterna la inyección de contexto y la auto-evolución en tiempo de ejecución`)
};

const ja_settings_general_agent_features_description = /** @type {(inputs: Settings_General_Agent_Features_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンテキスト注入と自己進化のオン/オフを切り替え`)
};

const hi_settings_general_agent_features_description = /** @type {(inputs: Settings_General_Agent_Features_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`रनटाइम पर संदर्भ इंजेक्शन और सेल्फ़-इवोल्यूशन टॉगल करें`)
};

const pt_br2_settings_general_agent_features_description = /** @type {(inputs: Settings_General_Agent_Features_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ative/desative injeção de contexto e autoevolução em tempo de execução`)
};

const ko_settings_general_agent_features_description = /** @type {(inputs: Settings_General_Agent_Features_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`런타임에서 컨텍스트 주입 및 자기 진화를 토글합니다`)
};

const fr_settings_general_agent_features_description = /** @type {(inputs: Settings_General_Agent_Features_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activer/désactiver l'injection de contexte et l'auto-évolution au moment de l'exécution`)
};

/**
* | output |
* | --- |
* | "Toggle context injection and self-evolution at runtime" |
*
* @param {Settings_General_Agent_Features_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_agent_features_description = /** @type {((inputs?: Settings_General_Agent_Features_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Agent_Features_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_agent_features_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_agent_features_description(inputs)
	if (locale === "es") return es_settings_general_agent_features_description(inputs)
	if (locale === "ja") return ja_settings_general_agent_features_description(inputs)
	if (locale === "hi") return hi_settings_general_agent_features_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_agent_features_description(inputs)
	if (locale === "ko") return ko_settings_general_agent_features_description(inputs)
	return fr_settings_general_agent_features_description(inputs)
});