import { isNonEmptyString } from "@/lib/utils";

/**
 * Footer copy shown beneath the nav links.
 * @type {{ message: string }}
 */
export const FOOTER_CONTENT = {
  message: "Get in touch for Wisdom 😊",
};

/**
 * @returns {boolean} True if the footer message is present and non-empty.
 */
export function validateFooterContent() {
  return Boolean(FOOTER_CONTENT) && isNonEmptyString(FOOTER_CONTENT.message);
}
