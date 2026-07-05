/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Copy_Button_Copied_SrInputs */

const en_copy_button_copied_sr = /** @type {(inputs: Copy_Button_Copied_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied`)
};

const zh_cn2_copy_button_copied_sr = /** @type {(inputs: Copy_Button_Copied_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制`)
};

const es_copy_button_copied_sr = /** @type {(inputs: Copy_Button_Copied_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiado`)
};

const ja_copy_button_copied_sr = /** @type {(inputs: Copy_Button_Copied_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピーしました`)
};

const hi_copy_button_copied_sr = /** @type {(inputs: Copy_Button_Copied_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉपी हो गया`)
};

const pt_br2_copy_button_copied_sr = /** @type {(inputs: Copy_Button_Copied_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiado`)
};

const ko_copy_button_copied_sr = /** @type {(inputs: Copy_Button_Copied_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`복사됨`)
};

const fr_copy_button_copied_sr = /** @type {(inputs: Copy_Button_Copied_SrInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copié`)
};

/**
* | output |
* | --- |
* | "Copied" |
*
* @param {Copy_Button_Copied_SrInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const copy_button_copied_sr = /** @type {((inputs?: Copy_Button_Copied_SrInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Copy_Button_Copied_SrInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_copy_button_copied_sr(inputs)
	if (locale === "zh-CN") return zh_cn2_copy_button_copied_sr(inputs)
	if (locale === "es") return es_copy_button_copied_sr(inputs)
	if (locale === "ja") return ja_copy_button_copied_sr(inputs)
	if (locale === "hi") return hi_copy_button_copied_sr(inputs)
	if (locale === "pt-BR") return pt_br2_copy_button_copied_sr(inputs)
	if (locale === "ko") return ko_copy_button_copied_sr(inputs)
	return fr_copy_button_copied_sr(inputs)
});