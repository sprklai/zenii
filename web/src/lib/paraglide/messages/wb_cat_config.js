/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Cat_ConfigInputs */

const en_wb_cat_config = /** @type {(inputs: Wb_Cat_ConfigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Config`)
};

const zh_cn2_wb_cat_config = /** @type {(inputs: Wb_Cat_ConfigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置`)
};

const es_wb_cat_config = /** @type {(inputs: Wb_Cat_ConfigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuración`)
};

const ja_wb_cat_config = /** @type {(inputs: Wb_Cat_ConfigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定`)
};

const hi_wb_cat_config = /** @type {(inputs: Wb_Cat_ConfigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉन्फ़िगरेशन`)
};

const pt_br2_wb_cat_config = /** @type {(inputs: Wb_Cat_ConfigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Config`)
};

const ko_wb_cat_config = /** @type {(inputs: Wb_Cat_ConfigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`구성`)
};

const fr_wb_cat_config = /** @type {(inputs: Wb_Cat_ConfigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Config`)
};

/**
* | output |
* | --- |
* | "Config" |
*
* @param {Wb_Cat_ConfigInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_cat_config = /** @type {((inputs?: Wb_Cat_ConfigInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Cat_ConfigInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_cat_config(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_cat_config(inputs)
	if (locale === "es") return es_wb_cat_config(inputs)
	if (locale === "ja") return ja_wb_cat_config(inputs)
	if (locale === "hi") return hi_wb_cat_config(inputs)
	if (locale === "pt-BR") return pt_br2_wb_cat_config(inputs)
	if (locale === "ko") return ko_wb_cat_config(inputs)
	return fr_wb_cat_config(inputs)
});