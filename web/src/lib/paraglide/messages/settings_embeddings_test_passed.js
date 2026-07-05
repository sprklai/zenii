/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ dimensions: NonNullable<unknown>, latency_ms: NonNullable<unknown> }} Settings_Embeddings_Test_PassedInputs */

const en_settings_embeddings_test_passed = /** @type {(inputs: Settings_Embeddings_Test_PassedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Test passed (${i?.dimensions} dims, ${i?.latency_ms}ms)`)
};

const zh_cn2_settings_embeddings_test_passed = /** @type {(inputs: Settings_Embeddings_Test_PassedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`测试通过（${i?.dimensions} 维，${i?.latency_ms}ms）`)
};

const es_settings_embeddings_test_passed = /** @type {(inputs: Settings_Embeddings_Test_PassedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prueba exitosa (${i?.dimensions} dims, ${i?.latency_ms}ms)`)
};

const ja_settings_embeddings_test_passed = /** @type {(inputs: Settings_Embeddings_Test_PassedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`テスト通過（${i?.dimensions} 次元、${i?.latency_ms}ms）`)
};

const hi_settings_embeddings_test_passed = /** @type {(inputs: Settings_Embeddings_Test_PassedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`जाँच सफल (${i?.dimensions} dims, ${i?.latency_ms}ms)`)
};

const pt_br2_settings_embeddings_test_passed = /** @type {(inputs: Settings_Embeddings_Test_PassedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Teste aprovado (${i?.dimensions} dims, ${i?.latency_ms}ms)`)
};

const ko_settings_embeddings_test_passed = /** @type {(inputs: Settings_Embeddings_Test_PassedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`테스트 통과 (${i?.dimensions} dims, ${i?.latency_ms}ms)`)
};

const fr_settings_embeddings_test_passed = /** @type {(inputs: Settings_Embeddings_Test_PassedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Test réussi (${i?.dimensions} dims, ${i?.latency_ms}ms)`)
};

/**
* | output |
* | --- |
* | "Test passed ({dimensions} dims, {latency_ms}ms)" |
*
* @param {Settings_Embeddings_Test_PassedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_embeddings_test_passed = /** @type {((inputs: Settings_Embeddings_Test_PassedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Embeddings_Test_PassedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_embeddings_test_passed(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_embeddings_test_passed(inputs)
	if (locale === "es") return es_settings_embeddings_test_passed(inputs)
	if (locale === "ja") return ja_settings_embeddings_test_passed(inputs)
	if (locale === "hi") return hi_settings_embeddings_test_passed(inputs)
	if (locale === "pt-BR") return pt_br2_settings_embeddings_test_passed(inputs)
	if (locale === "ko") return ko_settings_embeddings_test_passed(inputs)
	return fr_settings_embeddings_test_passed(inputs)
});