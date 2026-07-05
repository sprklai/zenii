/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ total: NonNullable<unknown>, suffix: NonNullable<unknown>, enabled: NonNullable<unknown> }} Dashboard_Schedule_EnabledInputs */

const en_dashboard_schedule_enabled = /** @type {(inputs: Dashboard_Schedule_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} job${i?.suffix} · ${i?.enabled} enabled`)
};

const zh_cn2_dashboard_schedule_enabled = /** @type {(inputs: Dashboard_Schedule_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} 个任务${i?.suffix} · ${i?.enabled} 个已启用`)
};

const es_dashboard_schedule_enabled = /** @type {(inputs: Dashboard_Schedule_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} tarea${i?.suffix} · ${i?.enabled} habilitada(s)`)
};

const ja_dashboard_schedule_enabled = /** @type {(inputs: Dashboard_Schedule_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} 件のジョブ${i?.suffix} · ${i?.enabled} 件有効`)
};

const hi_dashboard_schedule_enabled = /** @type {(inputs: Dashboard_Schedule_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} कार्य${i?.suffix} · ${i?.enabled} सक्षम`)
};

const pt_br2_dashboard_schedule_enabled = /** @type {(inputs: Dashboard_Schedule_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} tarefa${i?.suffix} · ${i?.enabled} habilitada(s)`)
};

const ko_dashboard_schedule_enabled = /** @type {(inputs: Dashboard_Schedule_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total}개 작업${i?.suffix} · ${i?.enabled}개 활성`)
};

const fr_dashboard_schedule_enabled = /** @type {(inputs: Dashboard_Schedule_EnabledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} tâche${i?.suffix} · ${i?.enabled} activée(s)`)
};

/**
* | output |
* | --- |
* | "{total} job{suffix} · {enabled} enabled" |
*
* @param {Dashboard_Schedule_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const dashboard_schedule_enabled = /** @type {((inputs: Dashboard_Schedule_EnabledInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Schedule_EnabledInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_schedule_enabled(inputs)
	if (locale === "zh-CN") return zh_cn2_dashboard_schedule_enabled(inputs)
	if (locale === "es") return es_dashboard_schedule_enabled(inputs)
	if (locale === "ja") return ja_dashboard_schedule_enabled(inputs)
	if (locale === "hi") return hi_dashboard_schedule_enabled(inputs)
	if (locale === "pt-BR") return pt_br2_dashboard_schedule_enabled(inputs)
	if (locale === "ko") return ko_dashboard_schedule_enabled(inputs)
	return fr_dashboard_schedule_enabled(inputs)
});