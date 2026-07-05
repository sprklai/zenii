/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_CommandInputs */

const en_wb_field_command = /** @type {(inputs: Wb_Field_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Command`)
};

const zh_cn2_wb_field_command = /** @type {(inputs: Wb_Field_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`命令`)
};

const es_wb_field_command = /** @type {(inputs: Wb_Field_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comando`)
};

const ja_wb_field_command = /** @type {(inputs: Wb_Field_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コマンド`)
};

const hi_wb_field_command = /** @type {(inputs: Wb_Field_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कमांड`)
};

const pt_br2_wb_field_command = /** @type {(inputs: Wb_Field_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comando`)
};

const ko_wb_field_command = /** @type {(inputs: Wb_Field_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`명령`)
};

const fr_wb_field_command = /** @type {(inputs: Wb_Field_CommandInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commande`)
};

/**
* | output |
* | --- |
* | "Command" |
*
* @param {Wb_Field_CommandInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_command = /** @type {((inputs?: Wb_Field_CommandInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_CommandInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_command(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_command(inputs)
	if (locale === "es") return es_wb_field_command(inputs)
	if (locale === "ja") return ja_wb_field_command(inputs)
	if (locale === "hi") return hi_wb_field_command(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_command(inputs)
	if (locale === "ko") return ko_wb_field_command(inputs)
	return fr_wb_field_command(inputs)
});