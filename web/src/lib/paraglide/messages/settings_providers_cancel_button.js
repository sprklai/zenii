/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Cancel_ButtonInputs */

const en_settings_providers_cancel_button = /** @type {(inputs: Settings_Providers_Cancel_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const zh_cn2_settings_providers_cancel_button = /** @type {(inputs: Settings_Providers_Cancel_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const es_settings_providers_cancel_button = /** @type {(inputs: Settings_Providers_Cancel_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ja_settings_providers_cancel_button = /** @type {(inputs: Settings_Providers_Cancel_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

const hi_settings_providers_cancel_button = /** @type {(inputs: Settings_Providers_Cancel_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`रद्द करें`)
};

const pt_br2_settings_providers_cancel_button = /** @type {(inputs: Settings_Providers_Cancel_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ko_settings_providers_cancel_button = /** @type {(inputs: Settings_Providers_Cancel_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`취소`)
};

const fr_settings_providers_cancel_button = /** @type {(inputs: Settings_Providers_Cancel_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Settings_Providers_Cancel_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_cancel_button = /** @type {((inputs?: Settings_Providers_Cancel_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Cancel_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_cancel_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_cancel_button(inputs)
	if (locale === "es") return es_settings_providers_cancel_button(inputs)
	if (locale === "ja") return ja_settings_providers_cancel_button(inputs)
	if (locale === "hi") return hi_settings_providers_cancel_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_cancel_button(inputs)
	if (locale === "ko") return ko_settings_providers_cancel_button(inputs)
	return fr_settings_providers_cancel_button(inputs)
});