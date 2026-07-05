/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Agent_Features_TitleInputs */

const en_settings_general_agent_features_title = /** @type {(inputs: Settings_General_Agent_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agent Features`)
};

const zh_cn2_settings_general_agent_features_title = /** @type {(inputs: Settings_General_Agent_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`代理功能`)
};

const es_settings_general_agent_features_title = /** @type {(inputs: Settings_General_Agent_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funciones del agente`)
};

const ja_settings_general_agent_features_title = /** @type {(inputs: Settings_General_Agent_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エージェント機能`)
};

const hi_settings_general_agent_features_title = /** @type {(inputs: Settings_General_Agent_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एजेंट सुविधाएँ`)
};

const pt_br2_settings_general_agent_features_title = /** @type {(inputs: Settings_General_Agent_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recursos do Agente`)
};

const ko_settings_general_agent_features_title = /** @type {(inputs: Settings_General_Agent_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`에이전트 기능`)
};

const fr_settings_general_agent_features_title = /** @type {(inputs: Settings_General_Agent_Features_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fonctionnalités de l'agent`)
};

/**
* | output |
* | --- |
* | "Agent Features" |
*
* @param {Settings_General_Agent_Features_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_agent_features_title = /** @type {((inputs?: Settings_General_Agent_Features_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Agent_Features_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_agent_features_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_agent_features_title(inputs)
	if (locale === "es") return es_settings_general_agent_features_title(inputs)
	if (locale === "ja") return ja_settings_general_agent_features_title(inputs)
	if (locale === "hi") return hi_settings_general_agent_features_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_agent_features_title(inputs)
	if (locale === "ko") return ko_settings_general_agent_features_title(inputs)
	return fr_settings_general_agent_features_title(inputs)
});