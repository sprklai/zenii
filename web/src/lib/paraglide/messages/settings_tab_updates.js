/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Tab_UpdatesInputs */

const en_settings_tab_updates = /** @type {(inputs: Settings_Tab_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updates`)
};

const zh_cn2_settings_tab_updates = /** @type {(inputs: Settings_Tab_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新`)
};

const es_settings_tab_updates = /** @type {(inputs: Settings_Tab_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizaciones`)
};

const ja_settings_tab_updates = /** @type {(inputs: Settings_Tab_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新`)
};

const hi_settings_tab_updates = /** @type {(inputs: Settings_Tab_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अपडेट`)
};

const pt_br2_settings_tab_updates = /** @type {(inputs: Settings_Tab_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizações`)
};

const ko_settings_tab_updates = /** @type {(inputs: Settings_Tab_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`업데이트`)
};

const fr_settings_tab_updates = /** @type {(inputs: Settings_Tab_UpdatesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mises à jour`)
};

/**
* | output |
* | --- |
* | "Updates" |
*
* @param {Settings_Tab_UpdatesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_tab_updates = /** @type {((inputs?: Settings_Tab_UpdatesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Tab_UpdatesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_tab_updates(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_tab_updates(inputs)
	if (locale === "es") return es_settings_tab_updates(inputs)
	if (locale === "ja") return ja_settings_tab_updates(inputs)
	if (locale === "hi") return hi_settings_tab_updates(inputs)
	if (locale === "pt-BR") return pt_br2_settings_tab_updates(inputs)
	if (locale === "ko") return ko_settings_tab_updates(inputs)
	return fr_settings_tab_updates(inputs)
});