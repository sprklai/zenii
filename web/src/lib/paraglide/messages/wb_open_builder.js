/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Open_BuilderInputs */

const en_wb_open_builder = /** @type {(inputs: Wb_Open_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open Builder`)
};

const zh_cn2_wb_open_builder = /** @type {(inputs: Wb_Open_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开构建器`)
};

const es_wb_open_builder = /** @type {(inputs: Wb_Open_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir constructor`)
};

const ja_wb_open_builder = /** @type {(inputs: Wb_Open_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ビルダーを開く`)
};

const hi_wb_open_builder = /** @type {(inputs: Wb_Open_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`बिल्डर खोलें`)
};

const pt_br2_wb_open_builder = /** @type {(inputs: Wb_Open_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir Construtor`)
};

const ko_wb_open_builder = /** @type {(inputs: Wb_Open_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`빌더 열기`)
};

const fr_wb_open_builder = /** @type {(inputs: Wb_Open_BuilderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir le générateur`)
};

/**
* | output |
* | --- |
* | "Open Builder" |
*
* @param {Wb_Open_BuilderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_open_builder = /** @type {((inputs?: Wb_Open_BuilderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Open_BuilderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_open_builder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_open_builder(inputs)
	if (locale === "es") return es_wb_open_builder(inputs)
	if (locale === "ja") return ja_wb_open_builder(inputs)
	if (locale === "hi") return hi_wb_open_builder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_open_builder(inputs)
	if (locale === "ko") return ko_wb_open_builder(inputs)
	return fr_wb_open_builder(inputs)
});