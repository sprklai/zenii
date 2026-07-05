/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Confirm_Remove_Key_TitleInputs */

const en_settings_providers_confirm_remove_key_title = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove API key?`)
};

const zh_cn2_settings_providers_confirm_remove_key_title = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除 API 密钥？`)
};

const es_settings_providers_confirm_remove_key_title = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar clave API?`)
};

const ja_settings_providers_confirm_remove_key_title = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API キーを削除しますか？`)
};

const hi_settings_providers_confirm_remove_key_title = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API कुंजी हटाएँ?`)
};

const pt_br2_settings_providers_confirm_remove_key_title = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover chave de API?`)
};

const ko_settings_providers_confirm_remove_key_title = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 키를 제거할까요?`)
};

const fr_settings_providers_confirm_remove_key_title = /** @type {(inputs: Settings_Providers_Confirm_Remove_Key_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer la clé API ?`)
};

/**
* | output |
* | --- |
* | "Remove API key?" |
*
* @param {Settings_Providers_Confirm_Remove_Key_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_confirm_remove_key_title = /** @type {((inputs?: Settings_Providers_Confirm_Remove_Key_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Confirm_Remove_Key_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_confirm_remove_key_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_confirm_remove_key_title(inputs)
	if (locale === "es") return es_settings_providers_confirm_remove_key_title(inputs)
	if (locale === "ja") return ja_settings_providers_confirm_remove_key_title(inputs)
	if (locale === "hi") return hi_settings_providers_confirm_remove_key_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_confirm_remove_key_title(inputs)
	if (locale === "ko") return ko_settings_providers_confirm_remove_key_title(inputs)
	return fr_settings_providers_confirm_remove_key_title(inputs)
});