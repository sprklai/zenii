/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Cat_FlowInputs */

const en_wb_cat_flow = /** @type {(inputs: Wb_Cat_FlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flow Control`)
};

const zh_cn2_wb_cat_flow = /** @type {(inputs: Wb_Cat_FlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`流程控制`)
};

const es_wb_cat_flow = /** @type {(inputs: Wb_Cat_FlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Control de flujo`)
};

const ja_wb_cat_flow = /** @type {(inputs: Wb_Cat_FlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フロー制御`)
};

const hi_wb_cat_flow = /** @type {(inputs: Wb_Cat_FlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रवाह नियंत्रण`)
};

const pt_br2_wb_cat_flow = /** @type {(inputs: Wb_Cat_FlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controle de Fluxo`)
};

const ko_wb_cat_flow = /** @type {(inputs: Wb_Cat_FlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`흐름 제어`)
};

const fr_wb_cat_flow = /** @type {(inputs: Wb_Cat_FlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contrôle de flux`)
};

/**
* | output |
* | --- |
* | "Flow Control" |
*
* @param {Wb_Cat_FlowInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_cat_flow = /** @type {((inputs?: Wb_Cat_FlowInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Cat_FlowInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_cat_flow(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_cat_flow(inputs)
	if (locale === "es") return es_wb_cat_flow(inputs)
	if (locale === "ja") return ja_wb_cat_flow(inputs)
	if (locale === "hi") return hi_wb_cat_flow(inputs)
	if (locale === "pt-BR") return pt_br2_wb_cat_flow(inputs)
	if (locale === "ko") return ko_wb_cat_flow(inputs)
	return fr_wb_cat_flow(inputs)
});