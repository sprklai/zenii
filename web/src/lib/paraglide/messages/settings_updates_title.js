/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Updates_TitleInputs */

const en_settings_updates_title = /** @type {(inputs: Settings_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Software Update`)
};

const zh_cn2_settings_updates_title = /** @type {(inputs: Settings_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`软件更新`)
};

const es_settings_updates_title = /** @type {(inputs: Settings_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualización de software`)
};

const ja_settings_updates_title = /** @type {(inputs: Settings_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ソフトウェア更新`)
};

const hi_settings_updates_title = /** @type {(inputs: Settings_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सॉफ़्टवेयर अपडेट`)
};

const pt_br2_settings_updates_title = /** @type {(inputs: Settings_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualização de Software`)
};

const ko_settings_updates_title = /** @type {(inputs: Settings_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`소프트웨어 업데이트`)
};

const fr_settings_updates_title = /** @type {(inputs: Settings_Updates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mise à jour logicielle`)
};

/**
* | output |
* | --- |
* | "Software Update" |
*
* @param {Settings_Updates_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_updates_title = /** @type {((inputs?: Settings_Updates_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Updates_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_updates_title(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_updates_title(inputs)
	if (locale === "es") return es_settings_updates_title(inputs)
	if (locale === "ja") return ja_settings_updates_title(inputs)
	if (locale === "hi") return hi_settings_updates_title(inputs)
	if (locale === "pt-BR") return pt_br2_settings_updates_title(inputs)
	if (locale === "ko") return ko_settings_updates_title(inputs)
	return fr_settings_updates_title(inputs)
});