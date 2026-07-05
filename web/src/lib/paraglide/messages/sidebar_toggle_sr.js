/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Sidebar_Toggle_SrInputs */

const en_sidebar_toggle_sr = /** @type {(inputs: Sidebar_Toggle_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toggle Sidebar`)
};

const zh_cn2_sidebar_toggle_sr = /** @type {(inputs: Sidebar_Toggle_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`切换侧边栏`)
};

const es_sidebar_toggle_sr = /** @type {(inputs: Sidebar_Toggle_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alternar barra lateral`)
};

const ja_sidebar_toggle_sr = /** @type {(inputs: Sidebar_Toggle_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サイドバー切替`)
};

const hi_sidebar_toggle_sr = /** @type {(inputs: Sidebar_Toggle_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`साइडबार टॉगल करें`)
};

const pt_br2_sidebar_toggle_sr = /** @type {(inputs: Sidebar_Toggle_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alternar barra lateral`)
};

const ko_sidebar_toggle_sr = /** @type {(inputs: Sidebar_Toggle_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`사이드바 전환`)
};

const fr_sidebar_toggle_sr = /** @type {(inputs: Sidebar_Toggle_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Basculer la barre latérale`)
};

/**
* | output |
* | --- |
* | "Toggle Sidebar" |
*
* @param {Sidebar_Toggle_SrInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const sidebar_toggle_sr = /** @type {((inputs?: Sidebar_Toggle_SrInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Sidebar_Toggle_SrInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_sidebar_toggle_sr(inputs)
	if (locale === "zh-CN") return zh_cn2_sidebar_toggle_sr(inputs)
	if (locale === "es") return es_sidebar_toggle_sr(inputs)
	if (locale === "ja") return ja_sidebar_toggle_sr(inputs)
	if (locale === "hi") return hi_sidebar_toggle_sr(inputs)
	if (locale === "pt-BR") return pt_br2_sidebar_toggle_sr(inputs)
	if (locale === "ko") return ko_sidebar_toggle_sr(inputs)
	return fr_sidebar_toggle_sr(inputs)
});