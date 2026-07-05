/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Plugins_Detail_AuthorInputs */

const en_settings_plugins_detail_author = /** @type {(inputs: Settings_Plugins_Detail_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Author:`)
};

const zh_cn2_settings_plugins_detail_author = /** @type {(inputs: Settings_Plugins_Detail_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者：`)
};

const es_settings_plugins_detail_author = /** @type {(inputs: Settings_Plugins_Detail_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor:`)
};

const ja_settings_plugins_detail_author = /** @type {(inputs: Settings_Plugins_Detail_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者：`)
};

const hi_settings_plugins_detail_author = /** @type {(inputs: Settings_Plugins_Detail_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लेखक:`)
};

const pt_br2_settings_plugins_detail_author = /** @type {(inputs: Settings_Plugins_Detail_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autor:`)
};

const ko_settings_plugins_detail_author = /** @type {(inputs: Settings_Plugins_Detail_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`작성자:`)
};

const fr_settings_plugins_detail_author = /** @type {(inputs: Settings_Plugins_Detail_AuthorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auteur :`)
};

/**
* | output |
* | --- |
* | "Author:" |
*
* @param {Settings_Plugins_Detail_AuthorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_plugins_detail_author = /** @type {((inputs?: Settings_Plugins_Detail_AuthorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Plugins_Detail_AuthorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_plugins_detail_author(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_plugins_detail_author(inputs)
	if (locale === "es") return es_settings_plugins_detail_author(inputs)
	if (locale === "ja") return ja_settings_plugins_detail_author(inputs)
	if (locale === "hi") return hi_settings_plugins_detail_author(inputs)
	if (locale === "pt-BR") return pt_br2_settings_plugins_detail_author(inputs)
	if (locale === "ko") return ko_settings_plugins_detail_author(inputs)
	return fr_settings_plugins_detail_author(inputs)
});