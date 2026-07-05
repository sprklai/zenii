/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Embeddings_Disabled_MessageInputs */

const en_settings_embeddings_disabled_message = /** @type {(inputs: Settings_Embeddings_Disabled_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Semantic search is disabled. Select a provider to enable.`)
};

const zh_cn2_settings_embeddings_disabled_message = /** @type {(inputs: Settings_Embeddings_Disabled_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`语义搜索已禁用。请选择提供商以启用。`)
};

const es_settings_embeddings_disabled_message = /** @type {(inputs: Settings_Embeddings_Disabled_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La búsqueda semántica está deshabilitada. Selecciona un proveedor para habilitarla.`)
};

const ja_settings_embeddings_disabled_message = /** @type {(inputs: Settings_Embeddings_Disabled_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セマンティック検索が無効です。プロバイダーを選択して有効にしてください。`)
};

const hi_settings_embeddings_disabled_message = /** @type {(inputs: Settings_Embeddings_Disabled_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सिमेंटिक सर्च अक्षम है। सक्षम करने के लिए एक प्रदाता चुनें।`)
};

const pt_br2_settings_embeddings_disabled_message = /** @type {(inputs: Settings_Embeddings_Disabled_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca semântica desabilitada. Selecione um provedor para habilitar.`)
};

const ko_settings_embeddings_disabled_message = /** @type {(inputs: Settings_Embeddings_Disabled_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`의미 검색이 비활성화되어 있습니다. 활성화하려면 공급자를 선택하세요.`)
};

const fr_settings_embeddings_disabled_message = /** @type {(inputs: Settings_Embeddings_Disabled_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La recherche sémantique est désactivée. Sélectionnez un fournisseur pour l'activer.`)
};

/**
* | output |
* | --- |
* | "Semantic search is disabled. Select a provider to enable." |
*
* @param {Settings_Embeddings_Disabled_MessageInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_disabled_message = /** @type {((inputs?: Settings_Embeddings_Disabled_MessageInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Disabled_MessageInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_disabled_message(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_disabled_message(inputs)
	if (locale === "es") return es_settings_embeddings_disabled_message(inputs)
	if (locale === "ja") return ja_settings_embeddings_disabled_message(inputs)
	if (locale === "hi") return hi_settings_embeddings_disabled_message(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_disabled_message(inputs)
	if (locale === "ko") return ko_settings_embeddings_disabled_message(inputs)
	return fr_settings_embeddings_disabled_message(inputs)
});