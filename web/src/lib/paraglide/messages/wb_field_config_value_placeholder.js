/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Config_Value_PlaceholderInputs */

const en_wb_field_config_value_placeholder = /** @type {(inputs: Wb_Field_Config_Value_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New value`)
};

const zh_cn2_wb_field_config_value_placeholder = /** @type {(inputs: Wb_Field_Config_Value_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新值`)
};

const es_wb_field_config_value_placeholder = /** @type {(inputs: Wb_Field_Config_Value_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo valor`)
};

const ja_wb_field_config_value_placeholder = /** @type {(inputs: Wb_Field_Config_Value_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい値`)
};

const hi_wb_field_config_value_placeholder = /** @type {(inputs: Wb_Field_Config_Value_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`नया मान`)
};

const pt_br2_wb_field_config_value_placeholder = /** @type {(inputs: Wb_Field_Config_Value_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo valor`)
};

const ko_wb_field_config_value_placeholder = /** @type {(inputs: Wb_Field_Config_Value_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`새 값`)
};

const fr_wb_field_config_value_placeholder = /** @type {(inputs: Wb_Field_Config_Value_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle valeur`)
};

/**
* | output |
* | --- |
* | "New value" |
*
* @param {Wb_Field_Config_Value_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_config_value_placeholder = /** @type {((inputs?: Wb_Field_Config_Value_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Config_Value_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_config_value_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_config_value_placeholder(inputs)
	if (locale === "es") return es_wb_field_config_value_placeholder(inputs)
	if (locale === "ja") return ja_wb_field_config_value_placeholder(inputs)
	if (locale === "hi") return hi_wb_field_config_value_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_config_value_placeholder(inputs)
	if (locale === "ko") return ko_wb_field_config_value_placeholder(inputs)
	return fr_wb_field_config_value_placeholder(inputs)
});