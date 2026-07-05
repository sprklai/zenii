/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_SaveInputs */

const en_common_save = /** @type {(inputs: Common_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save`)
};

const zh_cn2_common_save = /** @type {(inputs: Common_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

const es_common_save = /** @type {(inputs: Common_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar`)
};

const ja_common_save = /** @type {(inputs: Common_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

const hi_common_save = /** @type {(inputs: Common_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सहेजें`)
};

const pt_br2_common_save = /** @type {(inputs: Common_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar`)
};

const ko_common_save = /** @type {(inputs: Common_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`저장`)
};

const fr_common_save = /** @type {(inputs: Common_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer`)
};

/**
* | output |
* | --- |
* | "Save" |
*
* @param {Common_SaveInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const common_save = /** @type {((inputs?: Common_SaveInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_SaveInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_save(inputs)
	if (locale === "zh-CN") return zh_cn2_common_save(inputs)
	if (locale === "es") return es_common_save(inputs)
	if (locale === "ja") return ja_common_save(inputs)
	if (locale === "hi") return hi_common_save(inputs)
	if (locale === "pt-BR") return pt_br2_common_save(inputs)
	if (locale === "ko") return ko_common_save(inputs)
	return fr_common_save(inputs)
});