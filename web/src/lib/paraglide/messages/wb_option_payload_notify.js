/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Payload_NotifyInputs */

const en_wb_option_payload_notify = /** @type {(inputs: Wb_Option_Payload_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notify`)
};

const zh_cn2_wb_option_payload_notify = /** @type {(inputs: Wb_Option_Payload_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const es_wb_option_payload_notify = /** @type {(inputs: Wb_Option_Payload_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificar`)
};

const ja_wb_option_payload_notify = /** @type {(inputs: Wb_Option_Payload_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知`)
};

const hi_wb_option_payload_notify = /** @type {(inputs: Wb_Option_Payload_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सूचना`)
};

const pt_br2_wb_option_payload_notify = /** @type {(inputs: Wb_Option_Payload_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notificar`)
};

const ko_wb_option_payload_notify = /** @type {(inputs: Wb_Option_Payload_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`알림`)
};

const fr_wb_option_payload_notify = /** @type {(inputs: Wb_Option_Payload_NotifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notifier`)
};

/**
* | output |
* | --- |
* | "Notify" |
*
* @param {Wb_Option_Payload_NotifyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_payload_notify = /** @type {((inputs?: Wb_Option_Payload_NotifyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Payload_NotifyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_payload_notify(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_payload_notify(inputs)
	if (locale === "es") return es_wb_option_payload_notify(inputs)
	if (locale === "ja") return ja_wb_option_payload_notify(inputs)
	if (locale === "hi") return hi_wb_option_payload_notify(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_payload_notify(inputs)
	if (locale === "ko") return ko_wb_option_payload_notify(inputs)
	return fr_wb_option_payload_notify(inputs)
});