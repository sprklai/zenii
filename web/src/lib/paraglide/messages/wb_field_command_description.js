/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Command_DescriptionInputs */

const en_wb_field_command_description = /** @type {(inputs: Wb_Field_Command_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The shell command to run`)
};

const zh_cn2_wb_field_command_description = /** @type {(inputs: Wb_Field_Command_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要运行的 Shell 命令`)
};

const es_wb_field_command_description = /** @type {(inputs: Wb_Field_Command_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El comando de Shell a ejecutar`)
};

const ja_wb_field_command_description = /** @type {(inputs: Wb_Field_Command_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行する Shell コマンド`)
};

const hi_wb_field_command_description = /** @type {(inputs: Wb_Field_Command_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चलाने के लिए Shell कमांड`)
};

const pt_br2_wb_field_command_description = /** @type {(inputs: Wb_Field_Command_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O comando Shell a executar`)
};

const ko_wb_field_command_description = /** @type {(inputs: Wb_Field_Command_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실행할 Shell 명령`)
};

const fr_wb_field_command_description = /** @type {(inputs: Wb_Field_Command_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La commande Shell à exécuter`)
};

/**
* | output |
* | --- |
* | "The shell command to run" |
*
* @param {Wb_Field_Command_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_command_description = /** @type {((inputs?: Wb_Field_Command_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Command_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_command_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_command_description(inputs)
	if (locale === "es") return es_wb_field_command_description(inputs)
	if (locale === "ja") return ja_wb_field_command_description(inputs)
	if (locale === "hi") return hi_wb_field_command_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_command_description(inputs)
	if (locale === "ko") return ko_wb_field_command_description(inputs)
	return fr_wb_field_command_description(inputs)
});