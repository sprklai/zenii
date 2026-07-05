/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_Payload_LabelInputs */

const en_schedule_payload_label = /** @type {(inputs: Schedule_Payload_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Payload`)
};

const zh_cn2_schedule_payload_label = /** @type {(inputs: Schedule_Payload_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`载荷`)
};

const es_schedule_payload_label = /** @type {(inputs: Schedule_Payload_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carga útil`)
};

const ja_schedule_payload_label = /** @type {(inputs: Schedule_Payload_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ペイロード`)
};

const hi_schedule_payload_label = /** @type {(inputs: Schedule_Payload_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पेलोड`)
};

const pt_br2_schedule_payload_label = /** @type {(inputs: Schedule_Payload_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Payload`)
};

const ko_schedule_payload_label = /** @type {(inputs: Schedule_Payload_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`페이로드`)
};

const fr_schedule_payload_label = /** @type {(inputs: Schedule_Payload_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Charge utile`)
};

/**
* | output |
* | --- |
* | "Payload" |
*
* @param {Schedule_Payload_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_payload_label = /** @type {((inputs?: Schedule_Payload_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_Payload_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_payload_label(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_payload_label(inputs)
	if (locale === "es") return es_schedule_payload_label(inputs)
	if (locale === "ja") return ja_schedule_payload_label(inputs)
	if (locale === "hi") return hi_schedule_payload_label(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_payload_label(inputs)
	if (locale === "ko") return ko_schedule_payload_label(inputs)
	return fr_schedule_payload_label(inputs)
});