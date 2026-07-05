/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Permissions_Column_EventInputs */

const en_settings_permissions_column_event = /** @type {(inputs: Settings_Permissions_Column_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Event`)
};

const zh_cn2_settings_permissions_column_event = /** @type {(inputs: Settings_Permissions_Column_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`事件`)
};

const es_settings_permissions_column_event = /** @type {(inputs: Settings_Permissions_Column_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Evento`)
};

const ja_settings_permissions_column_event = /** @type {(inputs: Settings_Permissions_Column_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`イベント`)
};

const hi_settings_permissions_column_event = /** @type {(inputs: Settings_Permissions_Column_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`इवेंट`)
};

const pt_br2_settings_permissions_column_event = /** @type {(inputs: Settings_Permissions_Column_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Evento`)
};

const ko_settings_permissions_column_event = /** @type {(inputs: Settings_Permissions_Column_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이벤트`)
};

const fr_settings_permissions_column_event = /** @type {(inputs: Settings_Permissions_Column_EventInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Événement`)
};

/**
* | output |
* | --- |
* | "Event" |
*
* @param {Settings_Permissions_Column_EventInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_permissions_column_event = /** @type {((inputs?: Settings_Permissions_Column_EventInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Permissions_Column_EventInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_permissions_column_event(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_permissions_column_event(inputs)
	if (locale === "es") return es_settings_permissions_column_event(inputs)
	if (locale === "ja") return ja_settings_permissions_column_event(inputs)
	if (locale === "hi") return hi_settings_permissions_column_event(inputs)
	if (locale === "pt-BR") return pt_br2_settings_permissions_column_event(inputs)
	if (locale === "ko") return ko_settings_permissions_column_event(inputs)
	return fr_settings_permissions_column_event(inputs)
});