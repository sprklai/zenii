/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Openai_Key_RequiredInputs */

const en_settings_embeddings_openai_key_required = /** @type {(inputs: Settings_Embeddings_Openai_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI API key is required. Add it in Settings > Providers.`)
};

const zh_cn2_settings_embeddings_openai_key_required = /** @type {(inputs: Settings_Embeddings_Openai_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要 OpenAI API 密钥。请在 设置 > 提供商 中添加。`)
};

const es_settings_embeddings_openai_key_required = /** @type {(inputs: Settings_Embeddings_Openai_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se requiere la clave API de OpenAI. Añádela en Ajustes > Proveedores.`)
};

const ja_settings_embeddings_openai_key_required = /** @type {(inputs: Settings_Embeddings_Openai_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI API キーが必要です。設定 > プロバイダー で追加してください。`)
};

const hi_settings_embeddings_openai_key_required = /** @type {(inputs: Settings_Embeddings_Openai_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI API कुंजी आवश्यक है। सेटिंग्स > प्रदाता में जोड़ें।`)
};

const pt_br2_settings_embeddings_openai_key_required = /** @type {(inputs: Settings_Embeddings_Openai_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chave de API OpenAI é obrigatória. Adicione em Configurações > Provedores.`)
};

const ko_settings_embeddings_openai_key_required = /** @type {(inputs: Settings_Embeddings_Openai_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`OpenAI API 키가 필요합니다. 설정 > 공급자에서 추가하세요.`)
};

const fr_settings_embeddings_openai_key_required = /** @type {(inputs: Settings_Embeddings_Openai_Key_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La clé API OpenAI est requise. Ajoutez-la dans Paramètres > Fournisseurs.`)
};

/**
* | output |
* | --- |
* | "OpenAI API key is required. Add it in Settings > Providers." |
*
* @param {Settings_Embeddings_Openai_Key_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_openai_key_required = /** @type {((inputs?: Settings_Embeddings_Openai_Key_RequiredInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Openai_Key_RequiredInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_openai_key_required(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_openai_key_required(inputs)
	if (locale === "es") return es_settings_embeddings_openai_key_required(inputs)
	if (locale === "ja") return ja_settings_embeddings_openai_key_required(inputs)
	if (locale === "hi") return hi_settings_embeddings_openai_key_required(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_openai_key_required(inputs)
	if (locale === "ko") return ko_settings_embeddings_openai_key_required(inputs)
	return fr_settings_embeddings_openai_key_required(inputs)
});