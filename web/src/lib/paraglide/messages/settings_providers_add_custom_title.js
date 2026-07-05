/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Add_Custom_TitleInputs */

const en_settings_providers_add_custom_title = /** @type {(inputs: Settings_Providers_Add_Custom_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add Custom Provider`)
};

const zh_cn2_settings_providers_add_custom_title = /** @type {(inputs: Settings_Providers_Add_Custom_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加自定义提供商`)
};

const es_settings_providers_add_custom_title = /** @type {(inputs: Settings_Providers_Add_Custom_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir proveedor personalizado`)
};

const ja_settings_providers_add_custom_title = /** @type {(inputs: Settings_Providers_Add_Custom_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カスタムプロバイダーを追加`)
};

const hi_settings_providers_add_custom_title = /** @type {(inputs: Settings_Providers_Add_Custom_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कस्टम प्रदाता जोड़ें`)
};

const pt_br2_settings_providers_add_custom_title = /** @type {(inputs: Settings_Providers_Add_Custom_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar Provedor Personalizado`)
};

const ko_settings_providers_add_custom_title = /** @type {(inputs: Settings_Providers_Add_Custom_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`사용자 정의 공급자 추가`)
};

const fr_settings_providers_add_custom_title = /** @type {(inputs: Settings_Providers_Add_Custom_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter un fournisseur personnalisé`)
};

/**
* | output |
* | --- |
* | "Add Custom Provider" |
*
* @param {Settings_Providers_Add_Custom_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_add_custom_title = /** @type {((inputs?: Settings_Providers_Add_Custom_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Add_Custom_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_add_custom_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_add_custom_title(inputs)
	if (locale === "es") return es_settings_providers_add_custom_title(inputs)
	if (locale === "ja") return ja_settings_providers_add_custom_title(inputs)
	if (locale === "hi") return hi_settings_providers_add_custom_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_add_custom_title(inputs)
	if (locale === "ko") return ko_settings_providers_add_custom_title(inputs)
	return fr_settings_providers_add_custom_title(inputs)
});