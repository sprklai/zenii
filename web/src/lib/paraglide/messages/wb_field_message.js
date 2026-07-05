/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_MessageInputs */

const en_wb_field_message = /** @type {(inputs: Wb_Field_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message`)
};

const zh_cn2_wb_field_message = /** @type {(inputs: Wb_Field_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`消息`)
};

const es_wb_field_message = /** @type {(inputs: Wb_Field_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensaje`)
};

const ja_wb_field_message = /** @type {(inputs: Wb_Field_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メッセージ`)
};

const hi_wb_field_message = /** @type {(inputs: Wb_Field_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`संदेश`)
};

const pt_br2_wb_field_message = /** @type {(inputs: Wb_Field_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mensagem`)
};

const ko_wb_field_message = /** @type {(inputs: Wb_Field_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`메시지`)
};

const fr_wb_field_message = /** @type {(inputs: Wb_Field_MessageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Message`)
};

/**
* | output |
* | --- |
* | "Message" |
*
* @param {Wb_Field_MessageInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_message = /** @type {((inputs?: Wb_Field_MessageInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_MessageInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_message(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_message(inputs)
	if (locale === "es") return es_wb_field_message(inputs)
	if (locale === "ja") return ja_wb_field_message(inputs)
	if (locale === "hi") return hi_wb_field_message(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_message(inputs)
	if (locale === "ko") return ko_wb_field_message(inputs)
	return fr_wb_field_message(inputs)
});