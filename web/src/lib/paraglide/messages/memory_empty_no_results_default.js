/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Memory_Empty_No_Results_DefaultInputs */

const en_memory_empty_no_results_default = /** @type {(inputs: Memory_Empty_No_Results_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No memories yet. Add one or chat with the agent to build memory.`)
};

const zh_cn2_memory_empty_no_results_default = /** @type {(inputs: Memory_Empty_No_Results_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无记忆。添加一条记忆或与代理聊天以积累记忆。`)
};

const es_memory_empty_no_results_default = /** @type {(inputs: Memory_Empty_No_Results_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay memorias. Añade una o chatea con el agente para crear memoria.`)
};

const ja_memory_empty_no_results_default = /** @type {(inputs: Memory_Empty_No_Results_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモリはまだありません。メモリを追加するか、エージェントとチャットしてメモリを蓄積しましょう。`)
};

const hi_memory_empty_no_results_default = /** @type {(inputs: Memory_Empty_No_Results_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अभी तक कोई मेमोरी नहीं। एक जोड़ें या एजेंट से चैट करके मेमोरी बनाएँ।`)
};

const pt_br2_memory_empty_no_results_default = /** @type {(inputs: Memory_Empty_No_Results_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma memória ainda. Adicione uma ou converse com o agente para criar memórias.`)
};

const ko_memory_empty_no_results_default = /** @type {(inputs: Memory_Empty_No_Results_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`아직 메모리가 없습니다. 하나를 추가하거나 에이전트와 대화하여 메모리를 만드세요.`)
};

const fr_memory_empty_no_results_default = /** @type {(inputs: Memory_Empty_No_Results_DefaultInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de mémoires. Ajoutez-en une ou discutez avec l'agent pour créer de la mémoire.`)
};

/**
* | output |
* | --- |
* | "No memories yet. Add one or chat with the agent to build memory." |
*
* @param {Memory_Empty_No_Results_DefaultInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const memory_empty_no_results_default = /** @type {((inputs?: Memory_Empty_No_Results_DefaultInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Memory_Empty_No_Results_DefaultInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_memory_empty_no_results_default(inputs)
	if (locale === "zh-CN") return zh_cn2_memory_empty_no_results_default(inputs)
	if (locale === "es") return es_memory_empty_no_results_default(inputs)
	if (locale === "ja") return ja_memory_empty_no_results_default(inputs)
	if (locale === "hi") return hi_memory_empty_no_results_default(inputs)
	if (locale === "pt-BR") return pt_br2_memory_empty_no_results_default(inputs)
	if (locale === "ko") return ko_memory_empty_no_results_default(inputs)
	return fr_memory_empty_no_results_default(inputs)
});