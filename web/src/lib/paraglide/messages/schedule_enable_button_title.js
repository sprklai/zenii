/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Enable_Button_TitleInputs */

const en_schedule_enable_button_title = /** @type {(inputs: Schedule_Enable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enable`)
};

const zh_cn2_schedule_enable_button_title = /** @type {(inputs: Schedule_Enable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`启用`)
};

const es_schedule_enable_button_title = /** @type {(inputs: Schedule_Enable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activar`)
};

const ja_schedule_enable_button_title = /** @type {(inputs: Schedule_Enable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効化`)
};

const hi_schedule_enable_button_title = /** @type {(inputs: Schedule_Enable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सक्षम करें`)
};

const pt_br2_schedule_enable_button_title = /** @type {(inputs: Schedule_Enable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ativar`)
};

const ko_schedule_enable_button_title = /** @type {(inputs: Schedule_Enable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`활성화`)
};

const fr_schedule_enable_button_title = /** @type {(inputs: Schedule_Enable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activer`)
};

/**
* | output |
* | --- |
* | "Enable" |
*
* @param {Schedule_Enable_Button_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_enable_button_title = /** @type {((inputs?: Schedule_Enable_Button_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Enable_Button_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_enable_button_title(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_enable_button_title(inputs)
	if (locale === "es") return es_schedule_enable_button_title(inputs)
	if (locale === "ja") return ja_schedule_enable_button_title(inputs)
	if (locale === "hi") return hi_schedule_enable_button_title(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_enable_button_title(inputs)
	if (locale === "ko") return ko_schedule_enable_button_title(inputs)
	return fr_schedule_enable_button_title(inputs)
});