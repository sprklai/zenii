/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sidebar_Description_SrInputs */

const en_sidebar_description_sr = /** @type {(inputs: Sidebar_Description_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Displays the mobile sidebar.`)
};

const zh_cn2_sidebar_description_sr = /** @type {(inputs: Sidebar_Description_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示移动端侧边栏。`)
};

const es_sidebar_description_sr = /** @type {(inputs: Sidebar_Description_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Muestra la barra lateral móvil.`)
};

const ja_sidebar_description_sr = /** @type {(inputs: Sidebar_Description_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モバイルサイドバーを表示します。`)
};

const hi_sidebar_description_sr = /** @type {(inputs: Sidebar_Description_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`मोबाइल साइडबार दिखाता है।`)
};

const pt_br2_sidebar_description_sr = /** @type {(inputs: Sidebar_Description_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exibe a barra lateral móvel.`)
};

const ko_sidebar_description_sr = /** @type {(inputs: Sidebar_Description_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모바일 사이드바를 표시합니다.`)
};

const fr_sidebar_description_sr = /** @type {(inputs: Sidebar_Description_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affiche la barre latérale mobile.`)
};

/**
* | output |
* | --- |
* | "Displays the mobile sidebar." |
*
* @param {Sidebar_Description_SrInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const sidebar_description_sr = /** @type {((inputs?: Sidebar_Description_SrInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sidebar_Description_SrInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_sidebar_description_sr(inputs)
	if (locale === "zh-CN") return zh_cn2_sidebar_description_sr(inputs)
	if (locale === "es") return es_sidebar_description_sr(inputs)
	if (locale === "ja") return ja_sidebar_description_sr(inputs)
	if (locale === "hi") return hi_sidebar_description_sr(inputs)
	if (locale === "pt-BR") return pt_br2_sidebar_description_sr(inputs)
	if (locale === "ko") return ko_sidebar_description_sr(inputs)
	return fr_sidebar_description_sr(inputs)
});