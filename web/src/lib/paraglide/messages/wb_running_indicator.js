/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Running_IndicatorInputs */

const en_wb_running_indicator = /** @type {(inputs: Wb_Running_IndicatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Running...`)
};

const zh_cn2_wb_running_indicator = /** @type {(inputs: Wb_Running_IndicatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`运行中...`)
};

const es_wb_running_indicator = /** @type {(inputs: Wb_Running_IndicatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ejecutando...`)
};

const ja_wb_running_indicator = /** @type {(inputs: Wb_Running_IndicatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行中...`)
};

const hi_wb_running_indicator = /** @type {(inputs: Wb_Running_IndicatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चल रहा है...`)
};

const pt_br2_wb_running_indicator = /** @type {(inputs: Wb_Running_IndicatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Executando...`)
};

const ko_wb_running_indicator = /** @type {(inputs: Wb_Running_IndicatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실행 중...`)
};

const fr_wb_running_indicator = /** @type {(inputs: Wb_Running_IndicatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En cours d'exécution...`)
};

/**
* | output |
* | --- |
* | "Running..." |
*
* @param {Wb_Running_IndicatorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_running_indicator = /** @type {((inputs?: Wb_Running_IndicatorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Running_IndicatorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_running_indicator(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_running_indicator(inputs)
	if (locale === "es") return es_wb_running_indicator(inputs)
	if (locale === "ja") return ja_wb_running_indicator(inputs)
	if (locale === "hi") return hi_wb_running_indicator(inputs)
	if (locale === "pt-BR") return pt_br2_wb_running_indicator(inputs)
	if (locale === "ko") return ko_wb_running_indicator(inputs)
	return fr_wb_running_indicator(inputs)
});