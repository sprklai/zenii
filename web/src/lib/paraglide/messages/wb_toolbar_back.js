/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Toolbar_BackInputs */

const en_wb_toolbar_back = /** @type {(inputs: Wb_Toolbar_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back`)
};

const zh_cn2_wb_toolbar_back = /** @type {(inputs: Wb_Toolbar_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回`)
};

const es_wb_toolbar_back = /** @type {(inputs: Wb_Toolbar_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver`)
};

const ja_wb_toolbar_back = /** @type {(inputs: Wb_Toolbar_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`戻る`)
};

const hi_wb_toolbar_back = /** @type {(inputs: Wb_Toolbar_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वापस`)
};

const pt_br2_wb_toolbar_back = /** @type {(inputs: Wb_Toolbar_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar`)
};

const ko_wb_toolbar_back = /** @type {(inputs: Wb_Toolbar_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`뒤로`)
};

const fr_wb_toolbar_back = /** @type {(inputs: Wb_Toolbar_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour`)
};

/**
* | output |
* | --- |
* | "Back" |
*
* @param {Wb_Toolbar_BackInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_toolbar_back = /** @type {((inputs?: Wb_Toolbar_BackInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Toolbar_BackInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_toolbar_back(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_toolbar_back(inputs)
	if (locale === "es") return es_wb_toolbar_back(inputs)
	if (locale === "ja") return ja_wb_toolbar_back(inputs)
	if (locale === "hi") return hi_wb_toolbar_back(inputs)
	if (locale === "pt-BR") return pt_br2_wb_toolbar_back(inputs)
	if (locale === "ko") return ko_wb_toolbar_back(inputs)
	return fr_wb_toolbar_back(inputs)
});