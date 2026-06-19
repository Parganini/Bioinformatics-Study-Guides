import { IBDPI_STATUS } from "../ibdpiManifest.js";

export function getIBDPIStatusMeta(status) {
  return IBDPI_STATUS[status] || IBDPI_STATUS.planned;
}
