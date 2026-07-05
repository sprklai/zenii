/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Confirm_Remove_Key_DescriptionInputs */

const en_settings_providers_confirm_remove_key_description = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This will remove the stored API key for this provider.`)
};

const zh_cn2_settings_providers_confirm_remove_key_description = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这将移除此提供商已存储的 API 密钥。`)
};

const es_settings_providers_confirm_remove_key_description = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto eliminará la clave API almacenada para este proveedor.`)
};

const ja_settings_providers_confirm_remove_key_description = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このプロバイダーの保存済み API キーが削除されます。`)
};

const hi_settings_providers_confirm_remove_key_description = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यह इस प्रदाता के लिए सहेजी गई API कुंजी को हटा देगा।`)
};

const pt_br2_settings_providers_confirm_remove_key_description = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Isso removerá a chave de API armazenada deste provedor.`)
};

const ko_settings_providers_confirm_remove_key_description = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 공급자의 저장된 API 키가 제거됩니다.`)
};

const fr_settings_providers_confirm_remove_key_description = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ceci supprimera la clé API stockée pour ce fournisseur.`)
};

/**
* | output |
* | --- |
* | "This will remove the stored API key for this provider." |
*
* @param {Settings_Providers_Confirm_Remove_Key_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_confirm_remove_key_description = /** @type {((inputs?: Settings_Providers_Confirm_Remove_Key_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Confirm_Remove_Key_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_confirm_remove_key_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_confirm_remove_key_description(inputs)
	if (locale === "es") return es_settings_providers_confirm_remove_key_description(inputs)
	if (locale === "ja") return ja_settings_providers_confirm_remove_key_description(inputs)
	if (locale === "hi") return hi_settings_providers_confirm_remove_key_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_confirm_remove_key_description(inputs)
	if (locale === "ko") return ko_settings_providers_confirm_remove_key_description(inputs)
	return fr_settings_providers_confirm_remove_key_description(inputs)
});