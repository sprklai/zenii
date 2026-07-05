/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Config_Key_DescriptionInputs */

const en_wb_field_config_key_description = /** @type {(inputs: Wb_Field_Config_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The whitelisted configuration key to read or update`)
};

const zh_cn2_wb_field_config_key_description = /** @type {(inputs: Wb_Field_Config_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要读取或更新的白名单配置键`)
};

const es_wb_field_config_key_description = /** @type {(inputs: Wb_Field_Config_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La clave de configuración permitida a leer o actualizar`)
};

const ja_wb_field_config_key_description = /** @type {(inputs: Wb_Field_Config_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み取りまたは更新するホワイトリスト済みの設定キー`)
};

const hi_wb_field_config_key_description = /** @type {(inputs: Wb_Field_Config_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पढ़ने या अपडेट करने के लिए व्हाइटलिस्टेड कॉन्फ़िगरेशन कुंजी`)
};

const pt_br2_wb_field_config_key_description = /** @type {(inputs: Wb_Field_Config_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A chave de configuração permitida a ser lida ou atualizada`)
};

const ko_wb_field_config_key_description = /** @type {(inputs: Wb_Field_Config_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`읽거나 업데이트할 화이트리스트된 설정 키`)
};

const fr_wb_field_config_key_description = /** @type {(inputs: Wb_Field_Config_Key_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La clé de configuration autorisée à lire ou mettre à jour`)
};

/**
* | output |
* | --- |
* | "The whitelisted configuration key to read or update" |
*
* @param {Wb_Field_Config_Key_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_config_key_description = /** @type {((inputs?: Wb_Field_Config_Key_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Config_Key_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_config_key_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_config_key_description(inputs)
	if (locale === "es") return es_wb_field_config_key_description(inputs)
	if (locale === "ja") return ja_wb_field_config_key_description(inputs)
	if (locale === "hi") return hi_wb_field_config_key_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_config_key_description(inputs)
	if (locale === "ko") return ko_wb_field_config_key_description(inputs)
	return fr_wb_field_config_key_description(inputs)
});