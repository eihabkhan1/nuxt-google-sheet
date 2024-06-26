import sheetService from "~/server/composables/sheetService"
import { uuidSchema } from "~/server/utils/schemas"


export default defineEventHandler((event) => handler.async(event, async () => {
  const id = validator.routeParam(uuidSchema, event, 'id')
  return await sheetService.delete(getStoreId(event), id) || handler.notFoundError(event)
}))
