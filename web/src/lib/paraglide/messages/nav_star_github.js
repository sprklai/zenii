/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Nav_Star_GithubInputs */

const en_nav_star_github = /** @type {(inputs: Nav_Star_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Star on GitHub`)
};

const zh_cn2_nav_star_github = /** @type {(inputs: Nav_Star_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 GitHub 上加星`)
};

const es_nav_star_github = /** @type {(inputs: Nav_Star_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dar estrella en GitHub`)
};

const ja_nav_star_github = /** @type {(inputs: Nav_Star_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub でスターする`)
};

const hi_nav_star_github = /** @type {(inputs: Nav_Star_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub पर स्टार करें`)
};

const pt_br2_nav_star_github = /** @type {(inputs: Nav_Star_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dar estrela no GitHub`)
};

const ko_nav_star_github = /** @type {(inputs: Nav_Star_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`GitHub에서 별표하기`)
};

const fr_nav_star_github = /** @type {(inputs: Nav_Star_GithubInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Étoile sur GitHub`)
};

/**
* | output |
* | --- |
* | "Star on GitHub" |
*
* @param {Nav_Star_GithubInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const nav_star_github = /** @type {((inputs?: Nav_Star_GithubInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_Star_GithubInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_nav_star_github(inputs)
	if (locale === "zh-CN") return zh_cn2_nav_star_github(inputs)
	if (locale === "es") return es_nav_star_github(inputs)
	if (locale === "ja") return ja_nav_star_github(inputs)
	if (locale === "hi") return hi_nav_star_github(inputs)
	if (locale === "pt-BR") return pt_br2_nav_star_github(inputs)
	if (locale === "ko") return ko_nav_star_github(inputs)
	return fr_nav_star_github(inputs)
});