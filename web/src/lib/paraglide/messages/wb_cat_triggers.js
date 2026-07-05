/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Cat_TriggersInputs */

const en_wb_cat_triggers = /** @type {(inputs: Wb_Cat_TriggersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Triggers`)
};

const zh_cn2_wb_cat_triggers = /** @type {(inputs: Wb_Cat_TriggersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`触发器`)
};

const es_wb_cat_triggers = /** @type {(inputs: Wb_Cat_TriggersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disparadores`)
};

const ja_wb_cat_triggers = /** @type {(inputs: Wb_Cat_TriggersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トリガー`)
};

const hi_wb_cat_triggers = /** @type {(inputs: Wb_Cat_TriggersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ट्रिगर`)
};

const pt_br2_wb_cat_triggers = /** @type {(inputs: Wb_Cat_TriggersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gatilhos`)
};

const ko_wb_cat_triggers = /** @type {(inputs: Wb_Cat_TriggersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`트리거`)
};

const fr_wb_cat_triggers = /** @type {(inputs: Wb_Cat_TriggersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déclencheurs`)
};

/**
* | output |
* | --- |
* | "Triggers" |
*
* @param {Wb_Cat_TriggersInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_cat_triggers = /** @type {((inputs?: Wb_Cat_TriggersInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Cat_TriggersInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_cat_triggers(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_cat_triggers(inputs)
	if (locale === "es") return es_wb_cat_triggers(inputs)
	if (locale === "ja") return ja_wb_cat_triggers(inputs)
	if (locale === "hi") return hi_wb_cat_triggers(inputs)
	if (locale === "pt-BR") return pt_br2_wb_cat_triggers(inputs)
	if (locale === "ko") return ko_wb_cat_triggers(inputs)
	return fr_wb_cat_triggers(inputs)
});