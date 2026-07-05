/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Copy_Button_Failed_SrInputs */

const en_copy_button_failed_sr = /** @type {(inputs: Copy_Button_Failed_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed to copy`)
};

const zh_cn2_copy_button_failed_sr = /** @type {(inputs: Copy_Button_Failed_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制失败`)
};

const es_copy_button_failed_sr = /** @type {(inputs: Copy_Button_Failed_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Error al copiar`)
};

const ja_copy_button_failed_sr = /** @type {(inputs: Copy_Button_Failed_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピーに失敗しました`)
};

const hi_copy_button_failed_sr = /** @type {(inputs: Copy_Button_Failed_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉपी विफल`)
};

const pt_br2_copy_button_failed_sr = /** @type {(inputs: Copy_Button_Failed_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao copiar`)
};

const ko_copy_button_failed_sr = /** @type {(inputs: Copy_Button_Failed_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`복사 실패`)
};

const fr_copy_button_failed_sr = /** @type {(inputs: Copy_Button_Failed_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échec de la copie`)
};

/**
* | output |
* | --- |
* | "Failed to copy" |
*
* @param {Copy_Button_Failed_SrInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const copy_button_failed_sr = /** @type {((inputs?: Copy_Button_Failed_SrInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Copy_Button_Failed_SrInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_copy_button_failed_sr(inputs)
	if (locale === "zh-CN") return zh_cn2_copy_button_failed_sr(inputs)
	if (locale === "es") return es_copy_button_failed_sr(inputs)
	if (locale === "ja") return ja_copy_button_failed_sr(inputs)
	if (locale === "hi") return hi_copy_button_failed_sr(inputs)
	if (locale === "pt-BR") return pt_br2_copy_button_failed_sr(inputs)
	if (locale === "ko") return ko_copy_button_failed_sr(inputs)
	return fr_copy_button_failed_sr(inputs)
});