/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_LoadingInputs */

const en_schedule_loading = /** @type {(inputs: Schedule_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loading...`)
};

const zh_cn2_schedule_loading = /** @type {(inputs: Schedule_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载中...`)
};

const es_schedule_loading = /** @type {(inputs: Schedule_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando...`)
};

const ja_schedule_loading = /** @type {(inputs: Schedule_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み込み中...`)
};

const hi_schedule_loading = /** @type {(inputs: Schedule_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लोड हो रहा है...`)
};

const pt_br2_schedule_loading = /** @type {(inputs: Schedule_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando...`)
};

const ko_schedule_loading = /** @type {(inputs: Schedule_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`로딩 중...`)
};

const fr_schedule_loading = /** @type {(inputs: Schedule_LoadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement...`)
};

/**
* | output |
* | --- |
* | "Loading..." |
*
* @param {Schedule_LoadingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_loading = /** @type {((inputs?: Schedule_LoadingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_LoadingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_loading(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_loading(inputs)
	if (locale === "es") return es_schedule_loading(inputs)
	if (locale === "ja") return ja_schedule_loading(inputs)
	if (locale === "hi") return hi_schedule_loading(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_loading(inputs)
	if (locale === "ko") return ko_schedule_loading(inputs)
	return fr_schedule_loading(inputs)
});