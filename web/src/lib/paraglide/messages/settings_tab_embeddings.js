/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Tab_EmbeddingsInputs */

const en_settings_tab_embeddings = /** @type {(inputs: Settings_Tab_EmbeddingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Embeddings`)
};

const zh_cn2_settings_tab_embeddings = /** @type {(inputs: Settings_Tab_EmbeddingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`嵌入向量`)
};

const es_settings_tab_embeddings = /** @type {(inputs: Settings_Tab_EmbeddingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incrustaciones`)
};

const ja_settings_tab_embeddings = /** @type {(inputs: Settings_Tab_EmbeddingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`埋め込み`)
};

const hi_settings_tab_embeddings = /** @type {(inputs: Settings_Tab_EmbeddingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`एम्बेडिंग`)
};

const pt_br2_settings_tab_embeddings = /** @type {(inputs: Settings_Tab_EmbeddingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Embeddings`)
};

const ko_settings_tab_embeddings = /** @type {(inputs: Settings_Tab_EmbeddingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`임베딩`)
};

const fr_settings_tab_embeddings = /** @type {(inputs: Settings_Tab_EmbeddingsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Embeddings`)
};

/**
* | output |
* | --- |
* | "Embeddings" |
*
* @param {Settings_Tab_EmbeddingsInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_tab_embeddings = /** @type {((inputs?: Settings_Tab_EmbeddingsInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Tab_EmbeddingsInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_tab_embeddings(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_tab_embeddings(inputs)
	if (locale === "es") return es_settings_tab_embeddings(inputs)
	if (locale === "ja") return ja_settings_tab_embeddings(inputs)
	if (locale === "hi") return hi_settings_tab_embeddings(inputs)
	if (locale === "pt-BR") return pt_br2_settings_tab_embeddings(inputs)
	if (locale === "ko") return ko_settings_tab_embeddings(inputs)
	return fr_settings_tab_embeddings(inputs)
});