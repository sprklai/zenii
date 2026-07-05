/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Services_Remove_Key_ButtonInputs */

const en_settings_services_remove_key_button = /** @type {(inputs: Settings_Services_Remove_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove Key`)
};

const zh_cn2_settings_services_remove_key_button = /** @type {(inputs: Settings_Services_Remove_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除密钥`)
};

const es_settings_services_remove_key_button = /** @type {(inputs: Settings_Services_Remove_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar clave`)
};

const ja_settings_services_remove_key_button = /** @type {(inputs: Settings_Services_Remove_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キーを削除`)
};

const hi_settings_services_remove_key_button = /** @type {(inputs: Settings_Services_Remove_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कुंजी हटाएँ`)
};

const pt_br2_settings_services_remove_key_button = /** @type {(inputs: Settings_Services_Remove_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover Chave`)
};

const ko_settings_services_remove_key_button = /** @type {(inputs: Settings_Services_Remove_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`키 제거`)
};

const fr_settings_services_remove_key_button = /** @type {(inputs: Settings_Services_Remove_Key_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer la clé`)
};

/**
* | output |
* | --- |
* | "Remove Key" |
*
* @param {Settings_Services_Remove_Key_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_services_remove_key_button = /** @type {((inputs?: Settings_Services_Remove_Key_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Services_Remove_Key_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_services_remove_key_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_services_remove_key_button(inputs)
	if (locale === "es") return es_settings_services_remove_key_button(inputs)
	if (locale === "ja") return ja_settings_services_remove_key_button(inputs)
	if (locale === "hi") return hi_settings_services_remove_key_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_services_remove_key_button(inputs)
	if (locale === "ko") return ko_settings_services_remove_key_button(inputs)
	return fr_settings_services_remove_key_button(inputs)
});