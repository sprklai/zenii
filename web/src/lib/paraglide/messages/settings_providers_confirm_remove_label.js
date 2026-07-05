/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Confirm_Remove_LabelInputs */

const en_settings_providers_confirm_remove_label = /** @type {(inputs: Settings_Providers_Confirm_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove`)
};

const zh_cn2_settings_providers_confirm_remove_label = /** @type {(inputs: Settings_Providers_Confirm_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除`)
};

const es_settings_providers_confirm_remove_label = /** @type {(inputs: Settings_Providers_Confirm_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar`)
};

const ja_settings_providers_confirm_remove_label = /** @type {(inputs: Settings_Providers_Confirm_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

const hi_settings_providers_confirm_remove_label = /** @type {(inputs: Settings_Providers_Confirm_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हटाएँ`)
};

const pt_br2_settings_providers_confirm_remove_label = /** @type {(inputs: Settings_Providers_Confirm_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover`)
};

const ko_settings_providers_confirm_remove_label = /** @type {(inputs: Settings_Providers_Confirm_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`제거`)
};

const fr_settings_providers_confirm_remove_label = /** @type {(inputs: Settings_Providers_Confirm_Remove_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

/**
* | output |
* | --- |
* | "Remove" |
*
* @param {Settings_Providers_Confirm_Remove_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_confirm_remove_label = /** @type {((inputs?: Settings_Providers_Confirm_Remove_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Confirm_Remove_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_confirm_remove_label(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_confirm_remove_label(inputs)
	if (locale === "es") return es_settings_providers_confirm_remove_label(inputs)
	if (locale === "ja") return ja_settings_providers_confirm_remove_label(inputs)
	if (locale === "hi") return hi_settings_providers_confirm_remove_label(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_confirm_remove_label(inputs)
	if (locale === "ko") return ko_settings_providers_confirm_remove_label(inputs)
	return fr_settings_providers_confirm_remove_label(inputs)
});