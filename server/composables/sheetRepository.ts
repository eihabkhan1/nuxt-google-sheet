import { Sheet as PrismaSheet } from "@prisma/client"
import { Sheet, GoogleSpreadSheet, PaginationQuery } from "../utils/types"

const getter = (sheet: PrismaSheet): Sheet => sheet as Sheet

export default {
  create: (storeId: string, sheet: GoogleSpreadSheet) => prisma.sheet.create({
    data: { ...sheet, storeId }
  }).then(
    (sheet: PrismaSheet) => getter(sheet)
  ),

  paginate: (storeId: string, paginationQuery: PaginationQuery) => prisma.sheet.findMany({
    take: paginationQuery.take,
    skip: paginationQuery.skip,
    where: { storeId },
    orderBy: {
      createdAt: 'desc'
    }
  }).then(sheets => sheets.map(sheet => getter(sheet))),

  find: (storeId: string, id: string) => prisma.sheet.findUnique({
    where: {
      storeId,
      id
    }
  }),

  delete: (storeId: string, id: string) => prisma.sheet.delete({
    where: {
      storeId,
      id
    }
  }).then(
    deleted => true,
    failed => false
  )
}