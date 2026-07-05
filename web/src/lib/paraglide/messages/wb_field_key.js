/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_KeyInputs */

const en_wb_field_key = /** @type {(inputs: Wb_Field_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Config Key`)
};

const zh_cn2_wb_field_key = /** @type {(inputs: Wb_Field_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置键`)
};

const es_wb_field_key = /** @type {(inputs: Wb_Field_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clave de configuración`)
};

const ja_wb_field_key = /** @type {(inputs: Wb_Field_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Config キー`)
};

const hi_wb_field_key = /** @type {(inputs: Wb_Field_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉन्फ़िग कुंजी`)
};

const pt_br2_wb_field_key = /** @type {(inputs: Wb_Field_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chave de Configuração`)
};

const ko_wb_field_key = /** @type {(inputs: Wb_Field_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Config 키`)
};

const fr_wb_field_key = /** @type {(inputs: Wb_Field_KeyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clé de config`)
};

/**
* | output |
* | --- |
* | "Config Key" |
*
* @param {Wb_Field_KeyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_key = /** @type {((inputs?: Wb_Field_KeyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_KeyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_key(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_key(inputs)
	if (locale === "es") return es_wb_field_key(inputs)
	if (locale === "ja") return ja_wb_field_key(inputs)
	if (locale === "hi") return hi_wb_field_key(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_key(inputs)
	if (locale === "ko") return ko_wb_field_key(inputs)
	return fr_wb_field_key(inputs)
});