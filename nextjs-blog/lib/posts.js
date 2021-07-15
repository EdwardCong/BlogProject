import fs from 'fs' // file system
import path from 'path'
import matter from 'gray-matter'

// process.cwd() is current working directory
const postsDir = path.join(process.cwd(), 'posts')

export default function posts() {
  const files = fs.readdirSync(postsDir)
  const postsData = files.map(file => {
    // remove .md from filenames
    const id = file.replace(/\.md$/, '') 
    // reads content of files
    const filePath = path.join(postsDir, file)
    const contents = fs.readFileSync(filePath, 'utf-8')

    // gray matter parses metadata
    const result = matter(contents)

    // return the file id and content data
    return {
      id,
      ...result.data
    }
  })

  // sort by date
  return postsData.sort(({date: a}, {date: b}) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}