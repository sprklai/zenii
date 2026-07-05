/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Config_Value_DescriptionInputs */

const en_wb_field_config_value_description = /** @type {(inputs: Wb_Field_Config_Value_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The new value to set for the configuration key`)
};

const zh_cn2_wb_field_config_value_description = /** @type {(inputs: Wb_Field_Config_Value_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为配置键设置的新值`)
};

const es_wb_field_config_value_description = /** @type {(inputs: Wb_Field_Config_Value_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El nuevo valor a establecer para la clave de configuración`)
};

const ja_wb_field_config_value_description = /** @type {(inputs: Wb_Field_Config_Value_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定キーに設定する新しい値`)
};

const hi_wb_field_config_value_description = /** @type {(inputs: Wb_Field_Config_Value_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉन्फ़िगरेशन कुंजी के लिए सेट किया जाने वाला नया मान`)
};

const pt_br2_wb_field_config_value_description = /** @type {(inputs: Wb_Field_Config_Value_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O novo valor a definir para a chave de configuração`)
};

const ko_wb_field_config_value_description = /** @type {(inputs: Wb_Field_Config_Value_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정 키에 설정할 새 값`)
};

const fr_wb_field_config_value_description = /** @type {(inputs: Wb_Field_Config_Value_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La nouvelle valeur à définir pour la clé de configuration`)
};

/**
* | output |
* | --- |
* | "The new value to set for the configuration key" |
*
* @param {Wb_Field_Config_Value_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_config_value_description = /** @type {((inputs?: Wb_Field_Config_Value_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Config_Value_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_config_value_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_config_value_description(inputs)
	if (locale === "es") return es_wb_field_config_value_description(inputs)
	if (locale === "ja") return ja_wb_field_config_value_description(inputs)
	if (locale === "hi") return hi_wb_field_config_value_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_config_value_description(inputs)
	if (locale === "ko") return ko_wb_field_config_value_description(inputs)
	return fr_wb_field_config_value_description(inputs)
});