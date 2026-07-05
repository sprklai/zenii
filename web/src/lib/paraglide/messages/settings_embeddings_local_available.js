/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Local_AvailableInputs */

const en_settings_embeddings_local_available = /** @type {(inputs: Settings_Embeddings_Local_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Available`)
};

const zh_cn2_settings_embeddings_local_available = /** @type {(inputs: Settings_Embeddings_Local_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可用`)
};

const es_settings_embeddings_local_available = /** @type {(inputs: Settings_Embeddings_Local_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponible`)
};

const ja_settings_embeddings_local_available = /** @type {(inputs: Settings_Embeddings_Local_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`利用可能`)
};

const hi_settings_embeddings_local_available = /** @type {(inputs: Settings_Embeddings_Local_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`उपलब्ध`)
};

const pt_br2_settings_embeddings_local_available = /** @type {(inputs: Settings_Embeddings_Local_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponível`)
};

const ko_settings_embeddings_local_available = /** @type {(inputs: Settings_Embeddings_Local_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`사용 가능`)
};

const fr_settings_embeddings_local_available = /** @type {(inputs: Settings_Embeddings_Local_AvailableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disponible`)
};

/**
* | output |
* | --- |
* | "Available" |
*
* @param {Settings_Embeddings_Local_AvailableInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_local_available = /** @type {((inputs?: Settings_Embeddings_Local_AvailableInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Local_AvailableInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_local_available(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_local_available(inputs)
	if (locale === "es") return es_settings_embeddings_local_available(inputs)
	if (locale === "ja") return ja_settings_embeddings_local_available(inputs)
	if (locale === "hi") return hi_settings_embeddings_local_available(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_local_available(inputs)
	if (locale === "ko") return ko_settings_embeddings_local_available(inputs)
	return fr_settings_embeddings_local_available(inputs)
});