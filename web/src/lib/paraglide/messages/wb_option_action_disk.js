/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Action_DiskInputs */

const en_wb_option_action_disk = /** @type {(inputs: Wb_Option_Action_DiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disk`)
};

const zh_cn2_wb_option_action_disk = /** @type {(inputs: Wb_Option_Action_DiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`磁盘`)
};

const es_wb_option_action_disk = /** @type {(inputs: Wb_Option_Action_DiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disco`)
};

const ja_wb_option_action_disk = /** @type {(inputs: Wb_Option_Action_DiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ディスク`)
};

const hi_wb_option_action_disk = /** @type {(inputs: Wb_Option_Action_DiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`डिस्क`)
};

const pt_br2_wb_option_action_disk = /** @type {(inputs: Wb_Option_Action_DiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disco`)
};

const ko_wb_option_action_disk = /** @type {(inputs: Wb_Option_Action_DiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`디스크`)
};

const fr_wb_option_action_disk = /** @type {(inputs: Wb_Option_Action_DiskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disque`)
};

/**
* | output |
* | --- |
* | "Disk" |
*
* @param {Wb_Option_Action_DiskInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_action_disk = /** @type {((inputs?: Wb_Option_Action_DiskInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Action_DiskInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_action_disk(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_action_disk(inputs)
	if (locale === "es") return es_wb_option_action_disk(inputs)
	if (locale === "ja") return ja_wb_option_action_disk(inputs)
	if (locale === "hi") return hi_wb_option_action_disk(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_action_disk(inputs)
	if (locale === "ko") return ko_wb_option_action_disk(inputs)
	return fr_wb_option_action_disk(inputs)
});