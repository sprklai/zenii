/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Status_TitleInputs */

const en_settings_embeddings_status_title = /** @type {(inputs: Settings_Embeddings_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const zh_cn2_settings_embeddings_status_title = /** @type {(inputs: Settings_Embeddings_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状态`)
};

const es_settings_embeddings_status_title = /** @type {(inputs: Settings_Embeddings_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado`)
};

const ja_settings_embeddings_status_title = /** @type {(inputs: Settings_Embeddings_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ステータス`)
};

const hi_settings_embeddings_status_title = /** @type {(inputs: Settings_Embeddings_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`स्थिति`)
};

const pt_br2_settings_embeddings_status_title = /** @type {(inputs: Settings_Embeddings_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const ko_settings_embeddings_status_title = /** @type {(inputs: Settings_Embeddings_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`상태`)
};

const fr_settings_embeddings_status_title = /** @type {(inputs: Settings_Embeddings_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Statut`)
};

/**
* | output |
* | --- |
* | "Status" |
*
* @param {Settings_Embeddings_Status_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_status_title = /** @type {((inputs?: Settings_Embeddings_Status_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Status_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_status_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_status_title(inputs)
	if (locale === "es") return es_settings_embeddings_status_title(inputs)
	if (locale === "ja") return ja_settings_embeddings_status_title(inputs)
	if (locale === "hi") return hi_settings_embeddings_status_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_status_title(inputs)
	if (locale === "ko") return ko_settings_embeddings_status_title(inputs)
	return fr_settings_embeddings_status_title(inputs)
});