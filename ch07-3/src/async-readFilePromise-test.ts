import { readFile } from 'fs';


const readFilePromise = (filename: string): Promise<string> =>
    new Promise<string>((
        resolve: (value: string) => void,
        reject: (error: Error) => void) => {
        readFile(filename, (err: any, buffer: Buffer) => {
            if (err) reject(err)
            else resolve(buffer.toString())
        })
    }
    )

const readFilesAll = async (filenames: string[]) => {
    return await Promise.all(
        filenames.map(filename => readFilePromise(filename))
    )
}

readFilesAll(['../package.json', '../tsconfig.json']).then(([packageJson, tsconfigJson]: string[]) => {
    console.log('<package.json> : ', packageJson);
    console.log('<tsconfig.json> : ', tsconfigJson);
})
    .catch((err) => console.log('error : ', err));