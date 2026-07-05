/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Confirm_Delete_Provider_TitleInputs */

const en_settings_providers_confirm_delete_provider_title = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete provider?`)
};

const zh_cn2_settings_providers_confirm_delete_provider_title = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除提供商？`)
};

const es_settings_providers_confirm_delete_provider_title = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar proveedor?`)
};

const ja_settings_providers_confirm_delete_provider_title = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロバイダーを削除しますか？`)
};

const hi_settings_providers_confirm_delete_provider_title = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रदाता हटाएँ?`)
};

const pt_br2_settings_providers_confirm_delete_provider_title = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir provedor?`)
};

const ko_settings_providers_confirm_delete_provider_title = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`공급자를 삭제할까요?`)
};

const fr_settings_providers_confirm_delete_provider_title = /** @type {(inputs: Settings_Providers_Confirm_Delete_Provider_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer le fournisseur ?`)
};

/**
* | output |
* | --- |
* | "Delete provider?" |
*
* @param {Settings_Providers_Confirm_Delete_Provider_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_confirm_delete_provider_title = /** @type {((inputs?: Settings_Providers_Confirm_Delete_Provider_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Confirm_Delete_Provider_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_confirm_delete_provider_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_confirm_delete_provider_title(inputs)
	if (locale === "es") return es_settings_providers_confirm_delete_provider_title(inputs)
	if (locale === "ja") return ja_settings_providers_confirm_delete_provider_title(inputs)
	if (locale === "hi") return hi_settings_providers_confirm_delete_provider_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_confirm_delete_provider_title(inputs)
	if (locale === "ko") return ko_settings_providers_confirm_delete_provider_title(inputs)
	return fr_settings_providers_confirm_delete_provider_title(inputs)
});