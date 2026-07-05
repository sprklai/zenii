/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Toolbar_SaveInputs */

const en_wb_toolbar_save = /** @type {(inputs: Wb_Toolbar_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save`)
};

const zh_cn2_wb_toolbar_save = /** @type {(inputs: Wb_Toolbar_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

const es_wb_toolbar_save = /** @type {(inputs: Wb_Toolbar_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar`)
};

const ja_wb_toolbar_save = /** @type {(inputs: Wb_Toolbar_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

const hi_wb_toolbar_save = /** @type {(inputs: Wb_Toolbar_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सहेजें`)
};

const pt_br2_wb_toolbar_save = /** @type {(inputs: Wb_Toolbar_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar`)
};

const ko_wb_toolbar_save = /** @type {(inputs: Wb_Toolbar_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`저장`)
};

const fr_wb_toolbar_save = /** @type {(inputs: Wb_Toolbar_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer`)
};

/**
* | output |
* | --- |
* | "Save" |
*
* @param {Wb_Toolbar_SaveInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_toolbar_save = /** @type {((inputs?: Wb_Toolbar_SaveInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Toolbar_SaveInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_toolbar_save(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_toolbar_save(inputs)
	if (locale === "es") return es_wb_toolbar_save(inputs)
	if (locale === "ja") return ja_wb_toolbar_save(inputs)
	if (locale === "hi") return hi_wb_toolbar_save(inputs)
	if (locale === "pt-BR") return pt_br2_wb_toolbar_save(inputs)
	if (locale === "ko") return ko_wb_toolbar_save(inputs)
	return fr_wb_toolbar_save(inputs)
});