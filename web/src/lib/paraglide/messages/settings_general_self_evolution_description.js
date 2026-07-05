/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Self_Evolution_DescriptionInputs */

const en_settings_general_self_evolution_description = /** @type {(inputs: Settings_General_Self_Evolution_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent observes your preferences and usage patterns to store learnings, refine its behavior over time, and propose skill updates. Uses additional tokens for observation analysis and memory writes.`)
};

const zh_cn2_settings_general_self_evolution_description = /** @type {(inputs: Settings_General_Self_Evolution_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`代理观察你的偏好和使用模式以存储学习成果，逐步优化其行为，并提出技能更新建议。会消耗额外的令牌用于观察分析和记忆写入。`)
};

const es_settings_general_self_evolution_description = /** @type {(inputs: Settings_General_Self_Evolution_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El agente observa tus preferencias y patrones de uso para almacenar aprendizajes, refinar su comportamiento con el tiempo y proponer actualizaciones de habilidades. Usa tokens adicionales para el análisis de observaciones y escrituras en memoria.`)
};

const ja_settings_general_self_evolution_description = /** @type {(inputs: Settings_General_Self_Evolution_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エージェントがあなたの好みや使用パターンを観察して学習内容を保存し、動作を徐々に改善し、スキルの更新を提案します。観察分析とメモリ書き込みに追加のトークンを消費します。`)
};

const hi_settings_general_self_evolution_description = /** @type {(inputs: Settings_General_Self_Evolution_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एजेंट आपकी प्राथमिकताओं और उपयोग पैटर्न का अवलोकन करता है, सीखने को सहेजता है, समय के साथ अपने व्यवहार को परिष्कृत करता है, और कौशल अपडेट प्रस्तावित करता है। अवलोकन विश्लेषण और मेमोरी लिखने के लिए अतिरिक्त टोकन का उपयोग करता है।`)
};

const pt_br2_settings_general_self_evolution_description = /** @type {(inputs: Settings_General_Self_Evolution_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O agente observa suas preferências e padrões de uso para armazenar aprendizados, refinar seu comportamento ao longo do tempo e propor atualizações de habilidades. Usa tokens adicionais para análise de observação e gravação de memória.`)
};

const ko_settings_general_self_evolution_description = /** @type {(inputs: Settings_General_Self_Evolution_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`에이전트가 사용자의 선호도와 사용 패턴을 관찰하여 학습을 저장하고, 시간이 지남에 따라 동작을 개선하며, 스킬 업데이트를 제안합니다. 관찰 분석 및 메모리 기록에 추가 토큰을 사용합니다.`)
};

const fr_settings_general_self_evolution_description = /** @type {(inputs: Settings_General_Self_Evolution_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L'agent observe vos préférences et habitudes d'utilisation pour stocker des apprentissages, affiner son comportement au fil du temps et proposer des mises à jour de compétences. Utilise des jetons supplémentaires pour l'analyse des observations et les écritures en mémoire.`)
};

/**
* | output |
* | --- |
* | "Agent observes your preferences and usage patterns to store learnings, refine its behavior over time, and propose skill updates. Uses additional tokens for o..." |
*
* @param {Settings_General_Self_Evolution_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_self_evolution_description = /** @type {((inputs?: Settings_General_Self_Evolution_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Self_Evolution_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_self_evolution_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_self_evolution_description(inputs)
	if (locale === "es") return es_settings_general_self_evolution_description(inputs)
	if (locale === "ja") return ja_settings_general_self_evolution_description(inputs)
	if (locale === "hi") return hi_settings_general_self_evolution_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_self_evolution_description(inputs)
	if (locale === "ko") return ko_settings_general_self_evolution_description(inputs)
	return fr_settings_general_self_evolution_description(inputs)
});