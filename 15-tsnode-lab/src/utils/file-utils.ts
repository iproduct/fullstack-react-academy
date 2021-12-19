import { readFile } from "fs";
import * as fsPromise from 'fs/promises'

export const readJsonFile = async (fileName: string) =>
    JSON.parse((await fsPromise.readFile(fileName, { encoding: 'utf-8' })).toString())

export const writeJsonFile = async (fileName: string, data: any) =>
   await fsPromise.writeFile(fileName, JSON.stringify(data, null, 4),{ encoding: 'utf-8' })