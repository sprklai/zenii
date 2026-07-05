/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Cat_WikiInputs */

const en_wb_cat_wiki = /** @type {(inputs: Wb_Cat_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki`)
};

const zh_cn2_wb_cat_wiki = /** @type {(inputs: Wb_Cat_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki`)
};

const es_wb_cat_wiki = /** @type {(inputs: Wb_Cat_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki`)
};

const ja_wb_cat_wiki = /** @type {(inputs: Wb_Cat_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki`)
};

const hi_wb_cat_wiki = /** @type {(inputs: Wb_Cat_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki`)
};

const pt_br2_wb_cat_wiki = /** @type {(inputs: Wb_Cat_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki`)
};

const ko_wb_cat_wiki = /** @type {(inputs: Wb_Cat_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki`)
};

const fr_wb_cat_wiki = /** @type {(inputs: Wb_Cat_WikiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiki`)
};

/**
* | output |
* | --- |
* | "Wiki" |
*
* @param {Wb_Cat_WikiInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_cat_wiki = /** @type {((inputs?: Wb_Cat_WikiInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Cat_WikiInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_cat_wiki(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_cat_wiki(inputs)
	if (locale === "es") return es_wb_cat_wiki(inputs)
	if (locale === "ja") return ja_wb_cat_wiki(inputs)
	if (locale === "hi") return hi_wb_cat_wiki(inputs)
	if (locale === "pt-BR") return pt_br2_wb_cat_wiki(inputs)
	if (locale === "ko") return ko_wb_cat_wiki(inputs)
	return fr_wb_cat_wiki(inputs)
});