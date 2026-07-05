/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Deleting_ButtonInputs */

const en_settings_providers_deleting_button = /** @type {(inputs: Settings_Providers_Deleting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deleting...`)
};

const zh_cn2_settings_providers_deleting_button = /** @type {(inputs: Settings_Providers_Deleting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除中...`)
};

const es_settings_providers_deleting_button = /** @type {(inputs: Settings_Providers_Deleting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminando...`)
};

const ja_settings_providers_deleting_button = /** @type {(inputs: Settings_Providers_Deleting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除中...`)
};

const hi_settings_providers_deleting_button = /** @type {(inputs: Settings_Providers_Deleting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हटाया जा रहा है...`)
};

const pt_br2_settings_providers_deleting_button = /** @type {(inputs: Settings_Providers_Deleting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluindo...`)
};

const ko_settings_providers_deleting_button = /** @type {(inputs: Settings_Providers_Deleting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`삭제 중...`)
};

const fr_settings_providers_deleting_button = /** @type {(inputs: Settings_Providers_Deleting_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suppression...`)
};

/**
* | output |
* | --- |
* | "Deleting..." |
*
* @param {Settings_Providers_Deleting_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_deleting_button = /** @type {((inputs?: Settings_Providers_Deleting_ButtonInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Deleting_ButtonInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_deleting_button(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_deleting_button(inputs)
	if (locale === "es") return es_settings_providers_deleting_button(inputs)
	if (locale === "ja") return ja_settings_providers_deleting_button(inputs)
	if (locale === "hi") return hi_settings_providers_deleting_button(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_deleting_button(inputs)
	if (locale === "ko") return ko_settings_providers_deleting_button(inputs)
	return fr_settings_providers_deleting_button(inputs)
});