/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Openai_TitleInputs */

const en_settings_embeddings_openai_title = /** @type {(inputs: Settings_Embeddings_Openai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI Configuration`)
};

const zh_cn2_settings_embeddings_openai_title = /** @type {(inputs: Settings_Embeddings_Openai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI 配置`)
};

const es_settings_embeddings_openai_title = /** @type {(inputs: Settings_Embeddings_Openai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuración de OpenAI`)
};

const ja_settings_embeddings_openai_title = /** @type {(inputs: Settings_Embeddings_Openai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI 設定`)
};

const hi_settings_embeddings_openai_title = /** @type {(inputs: Settings_Embeddings_Openai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI कॉन्फ़िगरेशन`)
};

const pt_br2_settings_embeddings_openai_title = /** @type {(inputs: Settings_Embeddings_Openai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuração OpenAI`)
};

const ko_settings_embeddings_openai_title = /** @type {(inputs: Settings_Embeddings_Openai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI 설정`)
};

const fr_settings_embeddings_openai_title = /** @type {(inputs: Settings_Embeddings_Openai_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuration OpenAI`)
};

/**
* | output |
* | --- |
* | "OpenAI Configuration" |
*
* @param {Settings_Embeddings_Openai_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_openai_title = /** @type {((inputs?: Settings_Embeddings_Openai_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Openai_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_openai_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_openai_title(inputs)
	if (locale === "es") return es_settings_embeddings_openai_title(inputs)
	if (locale === "ja") return ja_settings_embeddings_openai_title(inputs)
	if (locale === "hi") return hi_settings_embeddings_openai_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_openai_title(inputs)
	if (locale === "ko") return ko_settings_embeddings_openai_title(inputs)
	return fr_settings_embeddings_openai_title(inputs)
});