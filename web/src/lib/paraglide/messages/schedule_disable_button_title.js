/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Disable_Button_TitleInputs */

const en_schedule_disable_button_title = /** @type {(inputs: Schedule_Disable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disable`)
};

const zh_cn2_schedule_disable_button_title = /** @type {(inputs: Schedule_Disable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`禁用`)
};

const es_schedule_disable_button_title = /** @type {(inputs: Schedule_Disable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desactivar`)
};

const ja_schedule_disable_button_title = /** @type {(inputs: Schedule_Disable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`無効化`)
};

const hi_schedule_disable_button_title = /** @type {(inputs: Schedule_Disable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अक्षम करें`)
};

const pt_br2_schedule_disable_button_title = /** @type {(inputs: Schedule_Disable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desativar`)
};

const ko_schedule_disable_button_title = /** @type {(inputs: Schedule_Disable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`비활성화`)
};

const fr_schedule_disable_button_title = /** @type {(inputs: Schedule_Disable_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Désactiver`)
};

/**
* | output |
* | --- |
* | "Disable" |
*
* @param {Schedule_Disable_Button_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_disable_button_title = /** @type {((inputs?: Schedule_Disable_Button_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Disable_Button_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_disable_button_title(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_disable_button_title(inputs)
	if (locale === "es") return es_schedule_disable_button_title(inputs)
	if (locale === "ja") return ja_schedule_disable_button_title(inputs)
	if (locale === "hi") return hi_schedule_disable_button_title(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_disable_button_title(inputs)
	if (locale === "ko") return ko_schedule_disable_button_title(inputs)
	return fr_schedule_disable_button_title(inputs)
});