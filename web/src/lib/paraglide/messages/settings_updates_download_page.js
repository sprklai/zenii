/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Updates_Download_PageInputs */

const en_settings_updates_download_page = /** @type {(inputs: Settings_Updates_Download_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download Page`)
};

const zh_cn2_settings_updates_download_page = /** @type {(inputs: Settings_Updates_Download_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载页面`)
};

const es_settings_updates_download_page = /** @type {(inputs: Settings_Updates_Download_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página de descarga`)
};

const ja_settings_updates_download_page = /** @type {(inputs: Settings_Updates_Download_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロードページ`)
};

const hi_settings_updates_download_page = /** @type {(inputs: Settings_Updates_Download_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डाउनलोड पेज`)
};

const pt_br2_settings_updates_download_page = /** @type {(inputs: Settings_Updates_Download_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Página de Download`)
};

const ko_settings_updates_download_page = /** @type {(inputs: Settings_Updates_Download_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`다운로드 페이지`)
};

const fr_settings_updates_download_page = /** @type {(inputs: Settings_Updates_Download_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page de téléchargement`)
};

/**
* | output |
* | --- |
* | "Download Page" |
*
* @param {Settings_Updates_Download_PageInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_updates_download_page = /** @type {((inputs?: Settings_Updates_Download_PageInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Updates_Download_PageInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_updates_download_page(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_updates_download_page(inputs)
	if (locale === "es") return es_settings_updates_download_page(inputs)
	if (locale === "ja") return ja_settings_updates_download_page(inputs)
	if (locale === "hi") return hi_settings_updates_download_page(inputs)
	if (locale === "pt-BR") return pt_br2_settings_updates_download_page(inputs)
	if (locale === "ko") return ko_settings_updates_download_page(inputs)
	return fr_settings_updates_download_page(inputs)
});