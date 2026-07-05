/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Local_Dimensions_PrefixInputs */

const en_settings_embeddings_local_dimensions_prefix = /** @type {(inputs: Settings_Embeddings_Local_Dimensions_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dimensions:`)
};

const zh_cn2_settings_embeddings_local_dimensions_prefix = /** @type {(inputs: Settings_Embeddings_Local_Dimensions_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`维度：`)
};

const es_settings_embeddings_local_dimensions_prefix = /** @type {(inputs: Settings_Embeddings_Local_Dimensions_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dimensiones:`)
};

const ja_settings_embeddings_local_dimensions_prefix = /** @type {(inputs: Settings_Embeddings_Local_Dimensions_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`次元数：`)
};

const hi_settings_embeddings_local_dimensions_prefix = /** @type {(inputs: Settings_Embeddings_Local_Dimensions_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डाइमेंशन:`)
};

const pt_br2_settings_embeddings_local_dimensions_prefix = /** @type {(inputs: Settings_Embeddings_Local_Dimensions_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dimensões:`)
};

const ko_settings_embeddings_local_dimensions_prefix = /** @type {(inputs: Settings_Embeddings_Local_Dimensions_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`차원:`)
};

const fr_settings_embeddings_local_dimensions_prefix = /** @type {(inputs: Settings_Embeddings_Local_Dimensions_PrefixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dimensions :`)
};

/**
* | output |
* | --- |
* | "Dimensions:" |
*
* @param {Settings_Embeddings_Local_Dimensions_PrefixInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_local_dimensions_prefix = /** @type {((inputs?: Settings_Embeddings_Local_Dimensions_PrefixInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Local_Dimensions_PrefixInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_local_dimensions_prefix(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_local_dimensions_prefix(inputs)
	if (locale === "es") return es_settings_embeddings_local_dimensions_prefix(inputs)
	if (locale === "ja") return ja_settings_embeddings_local_dimensions_prefix(inputs)
	if (locale === "hi") return hi_settings_embeddings_local_dimensions_prefix(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_local_dimensions_prefix(inputs)
	if (locale === "ko") return ko_settings_embeddings_local_dimensions_prefix(inputs)
	return fr_settings_embeddings_local_dimensions_prefix(inputs)
});