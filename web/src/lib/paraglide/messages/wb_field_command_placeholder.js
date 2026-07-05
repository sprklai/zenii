/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Command_PlaceholderInputs */

const en_wb_field_command_placeholder = /** @type {(inputs: Wb_Field_Command_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shell command to execute`)
};

const zh_cn2_wb_field_command_placeholder = /** @type {(inputs: Wb_Field_Command_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要执行的 Shell 命令`)
};

const es_wb_field_command_placeholder = /** @type {(inputs: Wb_Field_Command_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comando de Shell a ejecutar`)
};

const ja_wb_field_command_placeholder = /** @type {(inputs: Wb_Field_Command_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行する Shell コマンド`)
};

const hi_wb_field_command_placeholder = /** @type {(inputs: Wb_Field_Command_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`निष्पादित करने के लिए Shell कमांड`)
};

const pt_br2_wb_field_command_placeholder = /** @type {(inputs: Wb_Field_Command_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comando Shell a executar`)
};

const ko_wb_field_command_placeholder = /** @type {(inputs: Wb_Field_Command_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실행할 Shell 명령`)
};

const fr_wb_field_command_placeholder = /** @type {(inputs: Wb_Field_Command_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commande Shell à exécuter`)
};

/**
* | output |
* | --- |
* | "Shell command to execute" |
*
* @param {Wb_Field_Command_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_command_placeholder = /** @type {((inputs?: Wb_Field_Command_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Command_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_command_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_command_placeholder(inputs)
	if (locale === "es") return es_wb_field_command_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_command_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_command_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_command_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_command_placeholder(inputs)
	return fr_wb_field_command_placeholder(inputs)
});