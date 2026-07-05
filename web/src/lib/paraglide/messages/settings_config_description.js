/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Config_DescriptionInputs */

const en_settings_config_description = /** @type {(inputs: Settings_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raw TOML configuration — edit directly on disk or use settings above`)
};

const zh_cn2_settings_config_description = /** @type {(inputs: Settings_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原始 TOML 配置 — 直接在磁盘上编辑或使用上方的设置项`)
};

const es_settings_config_description = /** @type {(inputs: Settings_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuración TOML sin procesar — edita directamente en disco o usa los ajustes de arriba`)
};

const ja_settings_config_description = /** @type {(inputs: Settings_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生の TOML 設定 — ディスク上で直接編集するか、上の設定項目を使用してください`)
};

const hi_settings_config_description = /** @type {(inputs: Settings_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`रॉ TOML कॉन्फ़िगरेशन — सीधे डिस्क पर संपादित करें या ऊपर सेटिंग्स का उपयोग करें`)
};

const pt_br2_settings_config_description = /** @type {(inputs: Settings_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuração TOML bruta — edite diretamente no disco ou use as configurações acima`)
};

const ko_settings_config_description = /** @type {(inputs: Settings_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`원본 TOML 설정 — 디스크에서 직접 편집하거나 위의 설정을 사용하세요`)
};

const fr_settings_config_description = /** @type {(inputs: Settings_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuration TOML brute — modifiez directement sur le disque ou utilisez les paramètres ci-dessus`)
};

/**
* | output |
* | --- |
* | "Raw TOML configuration — edit directly on disk or use settings above" |
*
* @param {Settings_Config_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_config_description = /** @type {((inputs?: Settings_Config_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Config_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_config_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_config_description(inputs)
	if (locale === "es") return es_settings_config_description(inputs)
	if (locale === "ja") return ja_settings_config_description(inputs)
	if (locale === "hi") return hi_settings_config_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_config_description(inputs)
	if (locale === "ko") return ko_settings_config_description(inputs)
	return fr_settings_config_description(inputs)
});