/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Palette_TitleInputs */

const en_wb_palette_title = /** @type {(inputs: Wb_Palette_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nodes`)
};

const zh_cn2_wb_palette_title = /** @type {(inputs: Wb_Palette_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`节点`)
};

const es_wb_palette_title = /** @type {(inputs: Wb_Palette_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nodos`)
};

const ja_wb_palette_title = /** @type {(inputs: Wb_Palette_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ノード`)
};

const hi_wb_palette_title = /** @type {(inputs: Wb_Palette_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`नोड्स`)
};

const pt_br2_wb_palette_title = /** @type {(inputs: Wb_Palette_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nós`)
};

const ko_wb_palette_title = /** @type {(inputs: Wb_Palette_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`노드`)
};

const fr_wb_palette_title = /** @type {(inputs: Wb_Palette_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nœuds`)
};

/**
* | output |
* | --- |
* | "Nodes" |
*
* @param {Wb_Palette_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_palette_title = /** @type {((inputs?: Wb_Palette_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Palette_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_palette_title(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_palette_title(inputs)
	if (locale === "es") return es_wb_palette_title(inputs)
	if (locale === "ja") return ja_wb_palette_title(inputs)
	if (locale === "hi") return hi_wb_palette_title(inputs)
	if (locale === "pt-BR") return pt_br2_wb_palette_title(inputs)
	if (locale === "ko") return ko_wb_palette_title(inputs)
	return fr_wb_palette_title(inputs)
});