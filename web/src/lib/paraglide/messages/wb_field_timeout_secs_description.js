/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Field_Timeout_Secs_DescriptionInputs */

const en_wb_field_timeout_secs_description = /** @type {(inputs: Wb_Field_Timeout_Secs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maximum time to wait for the command to complete`)
};

const zh_cn2_wb_field_timeout_secs_description = /** @type {(inputs: Wb_Field_Timeout_Secs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待命令完成的最长时间`)
};

const es_wb_field_timeout_secs_description = /** @type {(inputs: Wb_Field_Timeout_Secs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tiempo máximo de espera para que el comando finalice`)
};

const ja_wb_field_timeout_secs_description = /** @type {(inputs: Wb_Field_Timeout_Secs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コマンドの完了を待つ最大時間`)
};

const hi_wb_field_timeout_secs_description = /** @type {(inputs: Wb_Field_Timeout_Secs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कमांड पूर्ण होने की प्रतीक्षा का अधिकतम समय`)
};

const pt_br2_wb_field_timeout_secs_description = /** @type {(inputs: Wb_Field_Timeout_Secs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tempo máximo de espera para o comando concluir`)
};

const ko_wb_field_timeout_secs_description = /** @type {(inputs: Wb_Field_Timeout_Secs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`명령 완료를 기다리는 최대 시간`)
};

const fr_wb_field_timeout_secs_description = /** @type {(inputs: Wb_Field_Timeout_Secs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temps maximum d'attente pour l'exécution de la commande`)
};

/**
* | output |
* | --- |
* | "Maximum time to wait for the command to complete" |
*
* @param {Wb_Field_Timeout_Secs_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_field_timeout_secs_description = /** @type {((inputs?: Wb_Field_Timeout_Secs_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Field_Timeout_Secs_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_field_timeout_secs_description(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_field_timeout_secs_description(inputs)
	if (locale === "es") return es_wb_field_timeout_secs_description(inputs)
	if (locale === "ja") return ja_wb_field_timeout_secs_description(inputs)
	if (locale === "hi") return hi_wb_field_timeout_secs_description(inputs)
	if (locale === "pt-BR") return pt_br2_wb_field_timeout_secs_description(inputs)
	if (locale === "ko") return ko_wb_field_timeout_secs_description(inputs)
	return fr_wb_field_timeout_secs_description(inputs)
});