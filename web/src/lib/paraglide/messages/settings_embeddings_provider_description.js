/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Provider_DescriptionInputs */

const en_settings_embeddings_provider_description = /** @type {(inputs: Settings_Embeddings_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose how semantic embeddings are generated for memory search`)
};

const zh_cn2_settings_embeddings_provider_description = /** @type {(inputs: Settings_Embeddings_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择如何为记忆搜索生成语义嵌入`)
};

const es_settings_embeddings_provider_description = /** @type {(inputs: Settings_Embeddings_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige cómo se generan los embeddings semánticos para la búsqueda en memoria`)
};

const ja_settings_embeddings_provider_description = /** @type {(inputs: Settings_Embeddings_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリ検索用のセマンティック埋め込みの生成方法を選択`)
};

const hi_settings_embeddings_provider_description = /** @type {(inputs: Settings_Embeddings_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मेमोरी खोज के लिए सिमेंटिक एम्बेडिंग कैसे उत्पन्न हों, यह चुनें`)
};

const pt_br2_settings_embeddings_provider_description = /** @type {(inputs: Settings_Embeddings_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha como os embeddings semânticos são gerados para busca na memória`)
};

const ko_settings_embeddings_provider_description = /** @type {(inputs: Settings_Embeddings_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메모리 검색을 위한 의미 임베딩 생성 방법을 선택하세요`)
};

const fr_settings_embeddings_provider_description = /** @type {(inputs: Settings_Embeddings_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez comment les embeddings sémantiques sont générés pour la recherche en mémoire`)
};

/**
* | output |
* | --- |
* | "Choose how semantic embeddings are generated for memory search" |
*
* @param {Settings_Embeddings_Provider_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_provider_description = /** @type {((inputs?: Settings_Embeddings_Provider_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Provider_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_provider_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_provider_description(inputs)
	if (locale === "es") return es_settings_embeddings_provider_description(inputs)
	if (locale === "ja") return ja_settings_embeddings_provider_description(inputs)
	if (locale === "hi") return hi_settings_embeddings_provider_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_provider_description(inputs)
	if (locale === "ko") return ko_settings_embeddings_provider_description(inputs)
	return fr_settings_embeddings_provider_description(inputs)
});