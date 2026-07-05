/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Wiki_Delete_Modal_WarningInputs */

const en_wiki_delete_modal_warning = /** @type {(inputs: Wiki_Delete_Modal_WarningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This will permanently delete all ${i?.count} wiki pages. Source files are kept.`)
};

const zh_cn2_wiki_delete_modal_warning = /** @type {(inputs: Wiki_Delete_Modal_WarningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`这将永久删除所有 ${i?.count} 个 Wiki 页面。源文件将保留。`)
};

const es_wiki_delete_modal_warning = /** @type {(inputs: Wiki_Delete_Modal_WarningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esto eliminará permanentemente las ${i?.count} páginas del wiki. Los archivos fuente se conservarán.`)
};

const ja_wiki_delete_modal_warning = /** @type {(inputs: Wiki_Delete_Modal_WarningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`すべての ${i?.count} 件の Wiki ページが完全に削除されます。ソースファイルは保持されます。`)
};

const hi_wiki_delete_modal_warning = /** @type {(inputs: Wiki_Delete_Modal_WarningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`यह सभी ${i?.count} विकी पृष्ठों को स्थायी रूप से हटा देगा। स्रोत फ़ाइलें सुरक्षित रहेंगी।`)
};

const pt_br2_wiki_delete_modal_warning = /** @type {(inputs: Wiki_Delete_Modal_WarningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Isso excluirá permanentemente todas as ${i?.count} páginas do wiki. Os arquivos de origem serão mantidos.`)
};

const ko_wiki_delete_modal_warning = /** @type {(inputs: Wiki_Delete_Modal_WarningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`모든 ${i?.count}개의 위키 페이지가 영구적으로 삭제됩니다. 소스 파일은 유지됩니다.`)
};

const fr_wiki_delete_modal_warning = /** @type {(inputs: Wiki_Delete_Modal_WarningInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cela supprimera définitivement les ${i?.count} pages du wiki. Les fichiers sources seront conservés.`)
};

/**
* | output |
* | --- |
* | "This will permanently delete all {count} wiki pages. Source files are kept." |
*
* @param {Wiki_Delete_Modal_WarningInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_delete_modal_warning = /** @type {((inputs: Wiki_Delete_Modal_WarningInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Delete_Modal_WarningInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_delete_modal_warning(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_delete_modal_warning(inputs)
	if (locale === "es") return es_wiki_delete_modal_warning(inputs)
	if (locale === "ja") return ja_wiki_delete_modal_warning(inputs)
	if (locale === "hi") return hi_wiki_delete_modal_warning(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_delete_modal_warning(inputs)
	if (locale === "ko") return ko_wiki_delete_modal_warning(inputs)
	return fr_wiki_delete_modal_warning(inputs)
});