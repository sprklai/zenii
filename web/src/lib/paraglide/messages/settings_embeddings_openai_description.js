/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Openai_DescriptionInputs */

const en_settings_embeddings_openai_description = /** @type {(inputs: Settings_Embeddings_Openai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uses your OpenAI API key from Settings > Providers`)
};

const zh_cn2_settings_embeddings_openai_description = /** @type {(inputs: Settings_Embeddings_Openai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用你在 设置 > 提供商 中配置的 OpenAI API 密钥`)
};

const es_settings_embeddings_openai_description = /** @type {(inputs: Settings_Embeddings_Openai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa tu clave API de OpenAI desde Ajustes > Proveedores`)
};

const ja_settings_embeddings_openai_description = /** @type {(inputs: Settings_Embeddings_Openai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定 > プロバイダー の OpenAI API キーを使用します`)
};

const hi_settings_embeddings_openai_description = /** @type {(inputs: Settings_Embeddings_Openai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सेटिंग्स > प्रदाता से आपकी OpenAI API कुंजी का उपयोग करता है`)
};

const pt_br2_settings_embeddings_openai_description = /** @type {(inputs: Settings_Embeddings_Openai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa sua chave de API OpenAI de Configurações > Provedores`)
};

const ko_settings_embeddings_openai_description = /** @type {(inputs: Settings_Embeddings_Openai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정 > 공급자의 OpenAI API 키를 사용합니다`)
};

const fr_settings_embeddings_openai_description = /** @type {(inputs: Settings_Embeddings_Openai_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilise votre clé API OpenAI depuis Paramètres > Fournisseurs`)
};

/**
* | output |
* | --- |
* | "Uses your OpenAI API key from Settings > Providers" |
*
* @param {Settings_Embeddings_Openai_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_openai_description = /** @type {((inputs?: Settings_Embeddings_Openai_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Openai_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_openai_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_openai_description(inputs)
	if (locale === "es") return es_settings_embeddings_openai_description(inputs)
	if (locale === "ja") return ja_settings_embeddings_openai_description(inputs)
	if (locale === "hi") return hi_settings_embeddings_openai_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_openai_description(inputs)
	if (locale === "ko") return ko_settings_embeddings_openai_description(inputs)
	return fr_settings_embeddings_openai_description(inputs)
});