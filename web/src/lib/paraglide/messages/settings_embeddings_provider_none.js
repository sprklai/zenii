/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Provider_NoneInputs */

const en_settings_embeddings_provider_none = /** @type {(inputs: Settings_Embeddings_Provider_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`None (FTS5 only)`)
};

const zh_cn2_settings_embeddings_provider_none = /** @type {(inputs: Settings_Embeddings_Provider_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无（仅 FTS5）`)
};

const es_settings_embeddings_provider_none = /** @type {(inputs: Settings_Embeddings_Provider_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguno (solo FTS5)`)
};

const ja_settings_embeddings_provider_none = /** @type {(inputs: Settings_Embeddings_Provider_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`なし（FTS5 のみ）`)
};

const hi_settings_embeddings_provider_none = /** @type {(inputs: Settings_Embeddings_Provider_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई नहीं (केवल FTS5)`)
};

const pt_br2_settings_embeddings_provider_none = /** @type {(inputs: Settings_Embeddings_Provider_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum (apenas FTS5)`)
};

const ko_settings_embeddings_provider_none = /** @type {(inputs: Settings_Embeddings_Provider_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`없음 (FTS5만 사용)`)
};

const fr_settings_embeddings_provider_none = /** @type {(inputs: Settings_Embeddings_Provider_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun (FTS5 uniquement)`)
};

/**
* | output |
* | --- |
* | "None (FTS5 only)" |
*
* @param {Settings_Embeddings_Provider_NoneInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_provider_none = /** @type {((inputs?: Settings_Embeddings_Provider_NoneInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Provider_NoneInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_provider_none(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_provider_none(inputs)
	if (locale === "es") return es_settings_embeddings_provider_none(inputs)
	if (locale === "ja") return ja_settings_embeddings_provider_none(inputs)
	if (locale === "hi") return hi_settings_embeddings_provider_none(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_provider_none(inputs)
	if (locale === "ko") return ko_settings_embeddings_provider_none(inputs)
	return fr_settings_embeddings_provider_none(inputs)
});