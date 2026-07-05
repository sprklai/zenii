/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Permissions_SubtitleInputs */

const en_settings_permissions_subtitle = /** @type {(inputs: Settings_Permissions_SubtitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configure which tools are available on each surface`)
};

const zh_cn2_settings_permissions_subtitle = /** @type {(inputs: Settings_Permissions_SubtitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置每个界面上可用的工具`)
};

const es_settings_permissions_subtitle = /** @type {(inputs: Settings_Permissions_SubtitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configura qué herramientas están disponibles en cada superficie`)
};

const ja_settings_permissions_subtitle = /** @type {(inputs: Settings_Permissions_SubtitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各環境で利用可能なツールを設定`)
};

const hi_settings_permissions_subtitle = /** @type {(inputs: Settings_Permissions_SubtitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रत्येक सरफ़ेस पर कौन से टूल उपलब्ध हैं, कॉन्फ़िगर करें`)
};

const pt_br2_settings_permissions_subtitle = /** @type {(inputs: Settings_Permissions_SubtitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configure quais ferramentas estão disponíveis em cada superfície`)
};

const ko_settings_permissions_subtitle = /** @type {(inputs: Settings_Permissions_SubtitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`각 환경에서 사용 가능한 도구를 설정하세요`)
};

const fr_settings_permissions_subtitle = /** @type {(inputs: Settings_Permissions_SubtitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurez quels outils sont disponibles sur chaque surface`)
};

/**
* | output |
* | --- |
* | "Configure which tools are available on each surface" |
*
* @param {Settings_Permissions_SubtitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_permissions_subtitle = /** @type {((inputs?: Settings_Permissions_SubtitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Permissions_SubtitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_permissions_subtitle(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_permissions_subtitle(inputs)
	if (locale === "es") return es_settings_permissions_subtitle(inputs)
	if (locale === "ja") return ja_settings_permissions_subtitle(inputs)
	if (locale === "hi") return hi_settings_permissions_subtitle(inputs)
	if (locale === "pt-BR") return pt_br2_settings_permissions_subtitle(inputs)
	if (locale === "ko") return ko_settings_permissions_subtitle(inputs)
	return fr_settings_permissions_subtitle(inputs)
});